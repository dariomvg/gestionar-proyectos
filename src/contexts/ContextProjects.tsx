"use client";
import { objBaseDetails } from "@/libs/objBaseDetails";
import {
  ChildrenContextType,
  ContextProjectsTypes,
  ObjBaseDetailsTypes,
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
  const [viewCreate, setViewCreate] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const [dataProject, setDataProject] = useState(objBaseDetails);
  const [initial, setInitial] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleViewCreate = () => {
    setViewCreate(!viewCreate);
  };

  const findProject = (id: number) => {
    const project = projects.find((item) => item.id === id);
    return project;
  };

  const handleViewDetails = (data: ObjBaseDetailsTypes) => {
    setViewDetails(!viewDetails);
    setDataProject(data);
  };

  const closeModalDetails = () => {
    setViewDetails(!viewDetails);
  };

  const handleProject = (data: ObjBaseType) => {
    if (data.id) {
      setProjects(projects.map((item) => (item.id === data.id ? data : item)));
    } else {
      data.id = Date.now();
      setProjects([...projects, data]);
    }
    setInitial(true)
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter((item) => item.id !== id));
    setInitial(true)

  };

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    if (savedProjects) {
      setProjects(savedProjects);
    }
  }, []);

  useEffect(() => {
      if(initial){
        localStorage.setItem("projects", JSON.stringify(projects));
      } 
      setTimeout(() => {
        setInitial(false); 
      }, 3000);
    
  }, [initial]);

  return (
    <ContextProjects.Provider
      value={{
        handleViewCreate,
        handleViewDetails,
        handleProject,
        deleteProject,
        viewCreate,
        viewDetails,
        projects,
        dataProject,
        setDataProject,
        findProject,
        closeModalDetails,
      }}>
      {children}
    </ContextProjects.Provider>
  );
}
