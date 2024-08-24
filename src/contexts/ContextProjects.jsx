"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ContextProjects = createContext();

export const useHandleProjects = () => {
  const context = useContext(ContextProjects);
  if (!context) throw new Error("Contexto con alcanze insuficiente");
  return context;
};

export default function ProjectsProvider({ children }) {
  const [viewCreate, setViewCreate] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const [dataProject, setDataProject] = useState({});
  const [projects, setProjects] = useState([]);

  const handleViewCreate = () => {
    setViewCreate(!viewCreate);
  };

  const findProject = (id) => {
    const project = projects.find((item) => item.id == id);
    return project;
  };

  const handleViewDetails = (data) => {
    setViewDetails(!viewDetails);
    setDataProject(data);
  };

  const handleProject = (data) => {
    if (data.id) {
      setProjects(projects.map((item) => (item.id === data.id ? data : item)));
    } else {
      data.id = Date.now();
      setProjects([...projects, data]);
    }
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    if (savedProjects) {
      setProjects(savedProjects);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

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
      }}>
      {children}
    </ContextProjects.Provider>
  );
}
