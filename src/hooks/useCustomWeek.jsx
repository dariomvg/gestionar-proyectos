"use client"
import { useHandleProjects } from "@/contexts/ContextProjects";
import { notify } from "@/libs/toast";
import { useState } from "react";

export const useCustomWeek = (id) => {
    const { findProject, handleProject } = useHandleProjects();
    const currentProject = findProject(id);
  
    const [days, setDays] = useState(() => {
      if (currentProject.semana) {
        return currentProject.semana;
      }
      return 0;
    });
  
    const handleCreateWeek = (day) => {
      const newProject = { ...currentProject, semana: day };
      handleProject(newProject);
      setDays(day);
    };
  
    const handleDeleteWeek = () => {
      const newProject = { ...currentProject, semana: 0, data_semana: {} };
      handleProject(newProject);
      setDays(0);
    };
  
    const saveWeek = (tasks) => {
      const newProject = { ...currentProject, data_semana: tasks };
      handleProject(newProject);
      notify();
    };
  
    return {days, handleCreateWeek, handleDeleteWeek, saveWeek}
} 

