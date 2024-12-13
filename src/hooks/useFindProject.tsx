"use client";
import { useHandleProjects } from "@/contexts/ContextProjects";
import { objBase } from "@/libs/objBase";
import {  ObjBaseType } from "@/types/types";
import { UseFindProject } from "@/types/types.findProject";
import { useEffect, useState } from "react";

export const useFindProject = (id: string): UseFindProject => {
  const [project, setProject] = useState<ObjBaseType>(objBase);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const { findProject, handleProject } = useHandleProjects();
  const updateProject = () => {
    handleProject(project);
    setProject(objBase);
  };

  useEffect(() => {
    if (id) {
      const currentProject = findProject(parseInt(id));
      setProject(currentProject);
    }
  }, [id]);

  return { project, setProject, updateProject, isDisabled, setIsDisabled };
};
