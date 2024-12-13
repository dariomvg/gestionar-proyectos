"use client";
import {
  ChildrenContextType,
  ContextProjectsTypes,
  ObjBaseType,
} from "@/types/types";
import { createContext, useContext, useState, useEffect } from "react";

const ContextProjects = createContext<ContextProjectsTypes | null>(null);

export const useHandleProjects = (): ContextProjectsTypes => {
  const context = useContext(ContextProjects);
  if (!context) throw new Error("Contexto con alcanze insuficiente");
  return context;
};

export default function ProjectsProvider({ children }: ChildrenContextType) {
  const [projects, setProjects] = useState<ObjBaseType[]>([]);

  const findProject = (id: number) => {
    const project = projects.find((item) => item.id === id);
    return project;
  };

  const handleProject = (data: ObjBaseType) => {
    if (data.id) {
      setProjects(projects.map((item) => (item.id === data.id ? data : item)));
    } else {
      setProjects([...projects, { ...data, id: Date.now() }]);
    }
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    if (savedProjects.length > 0) {
      setProjects(savedProjects);
    }
  }, []);

  useEffect(() => {
    if (projects) {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects]);

  return (
    <ContextProjects.Provider
      value={{
        handleProject,
        deleteProject,
        projects,
        findProject,
      }}>
      {children}
    </ContextProjects.Provider>
  );
}
