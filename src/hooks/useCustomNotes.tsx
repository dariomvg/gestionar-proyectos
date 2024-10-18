"use client"
import { useHandleProjects } from "@/contexts/ContextProjects";
import { notify } from "@/libs/toast";
import { CustomNoteTypes } from "@/types/types";
import { useState } from "react";

export const useCustomNotes = (id: number): CustomNoteTypes => {
    const { findProject, handleProject } = useHandleProjects();
    const currentProject = findProject(id);
  
    const [value, setValue] = useState(() => {
      if (currentProject.notes) return currentProject.notes;
      return "";
    });
  
    const handleChangeNotes = () => {
      const newProject = { ...currentProject, notes: value };
      handleProject(newProject);
      notify(); 
    };
  
    return {value, setValue, handleChangeNotes}
  }
  