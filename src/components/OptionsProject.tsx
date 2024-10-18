"use client";
import { useHandleProjects } from "@/contexts/ContextProjects";
import "../styles/OptionsProject.css";
import { PropsCard } from "@/types/types";

export const OptionsProject = ({item}: PropsCard): JSX.Element => {
  const { deleteProject, handleViewDetails } = useHandleProjects();

  return (
    <div className="container-option">
      <button className="btn-option" onClick={() => deleteProject(item.id)}>Eliminar proyecto</button>
      <button className="btn-option" onClick={() => handleViewDetails(item)}>Ver descripción</button>
    </div>
  );
};
