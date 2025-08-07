"use client";
import { supabase } from "@/supabase/supabase";
import {
  ContextProjectsTypes,
  ObjBaseType,
  ObjProjectBase,
} from "@/types/types";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./ContextAuth";

const ContextProjects = createContext<ContextProjectsTypes | null>(null);

export const useProjects = (): ContextProjectsTypes => {
  const context = useContext(ContextProjects);
  if (!context) throw new Error("Contexto con alcanze insuficiente");
  return context;
};

export default function ProjectsProvider({ children }: {children: ReactNode}) {
  const [projects, setProjects] = useState<ObjBaseType[]>([]);
  const {user} = useAuth();

  const searchProject = async (id: number) => {
    const { data: projects, error } = await supabase
      .from("projects")
      .select("title, description, date_limit, id")
      .eq("id", id);
    if (error) {
      console.error("Error fetching project:", error);
      return [];
    }
    return projects;
  };

  const addNewProject = async (project: ObjBaseType) => {
    const newProject = {...project, user_id: user.user_id};
    const { data, error } = await supabase.from("projects").insert([newProject]);
    if (error) {
      console.error("Error adding project:", error);
      return;
    }
  };

  const updateProject = async (project: ObjProjectBase) => {
    const newProject = {...project, user_id: user.user_id}
    const { data, error } = await supabase
      .from("projects")
      .update(newProject)
      .eq("id", newProject.id);
    if (error) {
      console.error("Error updating project:", error);
      return;
    }
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
  };

  useEffect(() => {
    const getProjects = async () => {
      const { data: projects, error } = await supabase
        .from("projects")
        .select("id, title, description, date_limit");
      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }
      setProjects(projects || []);
    };
    getProjects();
  }, [projects]);

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
