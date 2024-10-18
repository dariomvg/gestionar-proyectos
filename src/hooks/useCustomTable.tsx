"use client"
import { useHandleProjects } from "@/contexts/ContextProjects";
import { CustomTableTypes } from "@/types/types";
import { ChangeEvent, useState } from "react";

export const useCustomTable = (id: number): CustomTableTypes => {
    const { findProject } = useHandleProjects();
    const currentProject = findProject(id);
    const [tasks, setTasks] = useState(() => {
      if (currentProject.data_semana) {
        return currentProject.data_semana;
      }
      return {};
    });
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTasks({
        ...tasks,
        [e.target.name]: e.target.value,
      });
    };
  
    return {tasks, handleInputChange}
  }