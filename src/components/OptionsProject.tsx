"use client";
import "../styles/OptionsProject.css";
import { PropsCardNav } from "@/types/types";

export const OptionsProject = ({
  item,
  viewProject,
  removeProject,
}: PropsCardNav): JSX.Element => {
  return (
    <div className="container-option">
      <button className="btn-option" onClick={() => removeProject(item.id)}>
        Eliminar proyecto
      </button>
      <button className="btn-option" onClick={() => viewProject(item.id)}>
        Ver descripción
      </button>
    </div>
  );
};
