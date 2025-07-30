"use client";
import { useState } from "react";
import iconOptions from "../assets/icons/options.svg";
import { PropsCardNav } from "@/types/types";
import "../styles/card-nav-project.css";
import Link from "next/link";

export const CardNavProject = ({ item, deleteProject }: PropsCardNav) => {
  const [active, setActive] = useState(false);

  return (
    <div className="container-card-project">
      <div className="card-project">
        <Link href={`/proyectos/${item.id}`} className="link-card-project">
          {item.title}
        </Link>
        <img
          src={iconOptions.src}
          alt="options icon"
          width={20}
          height={20}
          className="icon-options"
          onClick={() => setActive(!active)}
        />
      </div>
      {active && (
        <div className="container-option">
          <button className="btn-option" onClick={() => deleteProject(item.id)}>
            Eliminar
          </button>
          <Link href={`/vista/proyecto/${item.id}`} className="link-option" >
            Detalles
          </Link>
        </div>
      )}
    </div>
  );
};
