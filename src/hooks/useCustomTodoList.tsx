"use client"; 
import { useHandleProjects } from "@/contexts/ContextProjects";
import {  TaskTodolist } from "@/types/types";
import { CustomTodolistTypes } from "@/types/types.todolist";
import { useEffect, useState } from "react";

export const useCustomTodoList = (id: number): CustomTodolistTypes => {
    const { findProject, handleProject } = useHandleProjects();
    const currentProject = findProject(id);
  
    const [tasks, setTasks] = useState<TaskTodolist[]>(currentProject.todoList || []);

    const createTask = (task: TaskTodolist) => {
      task.id = Date.now();
      setTasks([...tasks, task]);
    };
  
    const deleteTask = (id: number) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    const completeTask = (id: number) => {
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
