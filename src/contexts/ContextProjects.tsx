"use client";
import { supabase } from "@/supabase/supabase";
import {
  ContextProjectsTypes,
  ObjBaseType,
} from "@/types/types";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const ContextProjects = createContext<ContextProjectsTypes | null>(null);

export const useProjects = (): ContextProjectsTypes => {
  const context = useContext(ContextProjects);
  if (!context) throw new Error("Contexto con alcanze insuficiente");
  return context;
};

export default function ProjectsProvider({ children }: {children: ReactNode}) {
  const [projects, setProjects] = useState<ObjBaseType[]>([]);

  const searchProject = async (id: number) => {
    const { data: projects, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id);
    if (error) {
      console.error("Error fetching project:", error);
      return [];
    }
    return projects;
  };

  const addNewProject = async (project: ObjBaseType) => {
    const { data, error } = await supabase.from("projects").insert([project]);
    if (error) {
      console.error("Error adding project:", error);
      return null;
    }
    console.log(data);
  };

  const updateProject = async (project: ObjBaseType) => {
    const { data, error } = await supabase
      .from("projects")
      .update(project)
      .eq("id", project.id);
    if (error) {
      console.error("Error updating project:", error);
      return;
    }
    console.log(data);
  };

  const removeProject = async (id: number) => {
    const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);
    if (error) {
      console.error("Error deleting project:", error);
      return;
    }
    console.log(data);
  };

  useEffect(() => {
    const getProjects = async () => {
      const { data: projects, error } = await supabase
        .from("projects")
        .select("*");
      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }
      setProjects(projects || []);
    };
    // getProjects();
  }, []);

  return (
    <ContextProjects.Provider
      value={{
        projects,
        searchProject,
        addNewProject,
        removeProject,
        updateProject,
      }}>
      {children}
    </ContextProjects.Provider>
  );
}
