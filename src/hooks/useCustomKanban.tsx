"use client";
import { supabase } from "@/supabase/supabase";
import { TaskKanbanType } from "@/types/types.kanban";
import { CustomKanbanTypes } from "@/types/types.kanban";
import { useEffect, useState } from "react";
import {useAuth} from "@/contexts/ContextAuth"
export const useCustomKanban = (id: number): CustomKanbanTypes => {
  const [tasks, setTasks] = useState<TaskKanbanType[]>([]);
  const {user} = useAuth();

  
  const addTask = async (content: string) => {
    const newTask = {
      content,
      column: "tareas",
      user_id: user.user_id,
      project_id: id
    };
    const { data, error } = await supabase
      .from("kanban")
      .insert([newTask])
      .select();
    if (error) {
      console.error("Error adding task:", error);
      return;
    }
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
    if (id !== null) {
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
      getTasks();
    }
  }, [id, tasks]);

  return { tasks, moveTask, deleteTask, addTask };
};
