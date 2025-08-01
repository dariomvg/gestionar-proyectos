"use client";
import { supabase } from "@/supabase/supabase";
import { TaskTodolist } from "@/types/types.todolist";
import { CustomTodolistTypes } from "@/types/types.todolist";
import { useEffect, useState } from "react";

export const useCustomTodoList = (id: number): CustomTodolistTypes => {
  const [tasks, setTasks] = useState<TaskTodolist[]>([]);

  const createTask = async (task: TaskTodolist) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert([{ ...task, project_id: id }])
      .select("*");

    if (error) {
      console.log("Error insert task", error);
    }
    console.log(data);
  };

  const deleteTask = async (idTask: number) => {
    const { error } = await supabase.from("tasks").delete().eq("id", idTask);

    if (error) {
      console.log("Error insert task", error);
    }
  };

  const completeTask = async (value: boolean) => {
    const { error } = await supabase
      .from("tasks")
      .update({ complete: value })
      .eq("id", id);

      if(error) {
        console.log("Error updating task", error);
      }
  };

  useEffect(() => {
    if (id) {
      const getTasks = async () => {
        const { data, error } = await supabase
          .from("tasks")
          .select("id, task, complete")
          .eq("project_id", id);
        if (error) {
          console.log("Error fetching tasks", error);
          return;
        }

        setTasks(data ? data : []);
      };
    }
  }, [tasks]);

  return { tasks, createTask, deleteTask, completeTask };
};
