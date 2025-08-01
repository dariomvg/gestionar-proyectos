"use client";
import { useProjects } from "@/contexts/ContextProjects";
import { objBase } from "@/libs/objBase";
import { ObjBaseType } from "@/types/types";
import { UseViewProject } from "@/types/types.viewproject";
import { useEffect, useState, ChangeEvent } from "react";

export const useViewProject = (id: number): UseViewProject => {
  const { updateProject, searchProject } = useProjects();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [project, setProject] = useState<ObjBaseType>(objBase);
  
  const changeProject = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProject({ ...project, [name]: value });
    setIsDisabled(false);
  };

  const sendProject = () => {
    updateProject(project);
    setIsDisabled(true);
  };

  useEffect(() => {
    if (id) {
      const findProject = async () => {
        const projects = await searchProject(id);
        if (projects.length > 0) {
          setProject(projects[0]);
        } else {
          console.error("Project not found");
        }
      };
      findProject();
    }
  }, [id]);

  return { project, isDisabled, sendProject, changeProject };
};
