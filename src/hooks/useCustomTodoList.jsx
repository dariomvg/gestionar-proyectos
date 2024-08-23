"use client"; 
import { useHandleProjects } from "@/contexts/ContextProjects";
import { useEffect, useState } from "react";

export const useCustomTodoList = (id) => {
    const { findProject, handleProject } = useHandleProjects();
    const currentProject = findProject(id);
  
    const [tasks, setTasks] = useState(() => {
      if (currentProject.todoList) return currentProject.todoList;
      return [];
    });
  
    const createTask = (task) => {
      task.id = Date.now();
      setTasks([...tasks, task]);
    };
  
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    const completeTask = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, complete: task.complete === true ? false : true }
            : task
        )
      );
    };
  
    useEffect(() => {
      const newProject = { ...currentProject, todoList: tasks };
      handleProject(newProject);
    }, [tasks]);
  
    return { tasks, createTask, deleteTask, completeTask };
};
