"use client"
import { useHandleProjects } from "@/contexts/ContextProjects";
import { notify } from "@/libs/toast";
import { CustomWeekTypes, DataSemana } from "@/types/types";
import { useState } from "react";

export const useCustomWeek = (id: number): CustomWeekTypes => {
    const { findProject, handleProject } = useHandleProjects();
    const currentProject = findProject(id);
  
    const [days, setDays] = useState(() => {
      if (currentProject.semana) {
        return currentProject.semana;
      }
      return 0;
    });
  
    const handleCreateWeek = (day: number) => {
      const newProject = { ...currentProject, semana: day };
      handleProject(newProject);
      setDays(day);
    };
  
    const handleDeleteWeek = () => {
      const newProject = { ...currentProject, semana: 0, data_semana: {} };
      handleProject(newProject);
      setDays(0);
    };
  
    const saveWeek = (tasks: DataSemana) => {
      const newProject = { ...currentProject, data_semana: tasks };
      handleProject(newProject);
      notify();
    };
  
    return {days, handleCreateWeek, handleDeleteWeek, saveWeek}
} 

