"use client"
import { useHandleProjects } from "@/contexts/ContextProjects";
import { useState } from "react";

export const useCustomTable = (id) => {
    const { findProject } = useHandleProjects();
    const currentProject = findProject(id);
    const [tasks, setTasks] = useState(() => {
      if (currentProject.data_semana) {
        return currentProject.data_semana;
      }
      return {};
    });
  
    const handleInputChange = (e) => {
      setTasks({
        ...tasks,
        [e.target.name]: e.target.value,
      });
    };
  
    return {tasks, handleInputChange}
  }