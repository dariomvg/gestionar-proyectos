"use client";
import { supabase } from "@/supabase/supabase";
import { TaskKanbanType } from "@/types/types.kanban";
import { CustomKanbanTypes } from "@/types/types.kanban";
import { useEffect, useState } from "react";

export const useCustomKanban = (id: number): CustomKanbanTypes => {
  const [tasks, setTasks] = useState<TaskKanbanType[]>([]);

  const addTask = async (content: string) => {
    const newTask = {
      content,
      column: "tareas",
    };
    const { data, error } = await supabase
      .from("kanban")
      .insert([newTask])
      .select();
    if (error) {
      console.error("Error adding task:", error);
      return;
    }
    console.log(data);
  };

  const moveTask = async (idTask: number, newColumn: string) => {
    const { error } = await supabase
      .from("kanban")
      .update({ column: newColumn })
      .eq("id", idTask);
    if (error) {
      console.error("Error deleting task:", error);
      return;
    }
  };

  const deleteTask = async (idTask: number) => {
    const { error } = await supabase.from("kanban").delete().eq("id", idTask);
    if (error) {
      console.error("Error deleting task:", error);
      return;
    }
  };

  useEffect(() => {
    if (id) {
      const getTasks = async () => {
        const { data: tasks, error } = await supabase
          .from("kanban")
          .select("*")
          .eq("project_id", id);
        if (error) {
          console.error("Error fetching tasks:", error);
          return;
        }
        setTasks(tasks || []);
      };
      // getTasks();
    }
  }, [id]);

  return { tasks, moveTask, deleteTask, addTask };
};
