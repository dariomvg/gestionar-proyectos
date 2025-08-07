"use client";
import { useProjects } from "@/contexts/ContextProjects";
import { ObjProjectBase } from "@/types/types";
import { UseViewProject } from "@/types/types.viewproject";
import { useEffect, useState, ChangeEvent } from "react";

export const useViewProject = (id: number): UseViewProject => {
  const { updateProject, searchProject } = useProjects();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [project, setProject] = useState<ObjProjectBase>({title: "", description: "", id: null, date_limit: ""});
  
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
    if (id !== null) {
      const findProject = async () => {
        const editProject = await searchProject(id);
        if (editProject.length > 0) {
          setProject(editProject[0]);
        } else {
          console.error("Project not found");
        }
      };
      findProject();
    }
  }, [id]);

  return { project, isDisabled, sendProject, changeProject };
};
