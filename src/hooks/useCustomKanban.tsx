"use client";
import { useHandleProjects } from "@/contexts/ContextProjects";
import { CustomKanbanTypes } from "@/types/types.kanban";
import { useEffect, useState } from "react";

export const useCustomKanban = (id: number): CustomKanbanTypes => {
    const { findProject, handleProject } = useHandleProjects();
    const currentProject = findProject(id);
    
    const [tasks, setTasks] = useState(() => {
      if (currentProject.kanban) return currentProject.kanban;
      return [];
    });
  
    const addTask = (content: string) => {
      const newTask = {
        id: `task-${tasks.length + 1}`,
        content,
        column: "tareas",
      };
      setTasks([...tasks, newTask]);
    };
  
    const moveTask = (taskId: string, newColumn: string) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, column: newColumn } : task
        )
      );
    };
  
    const deleteTask = (id: string) => {
      setTasks(tasks.filter((task) => task.id !== id)); 
    };
  
    useEffect(() => {
      const newProject = { ...currentProject, kanban: tasks };
      handleProject(newProject);
    }, [tasks]);
  
    return { tasks, moveTask, deleteTask, addTask }
}
