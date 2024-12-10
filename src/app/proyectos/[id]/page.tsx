"use client";
import { useEffect, useState } from "react";
import "./Principal.css";
import { useHandleProjects } from "@/contexts/ContextProjects";
import Link from "next/link";
import iconLink from "@/assets/icons/icon-link.svg"
import { ObjBaseDetailsTypes, PropsParamsId } from "@/types/types";
import { objBaseDetails } from "@/libs/objBaseDetails";

export default function IdProject({params}: PropsParamsId) {
  const { findProject } = useHandleProjects();
  const [project, setProject] = useState<ObjBaseDetailsTypes>(objBaseDetails);
  const {id} = params;

  useEffect(() => {
     const foundProject = findProject(parseInt(id));
     setProject(foundProject);
  }, [id]);
  
  return (
    <section className="section-page-project">
      <div className="container-details-project">
        <p>Título del proyecto:</p>
        <h2 className="title-details-project">{project.title}</h2>
        <strong className="date-details-project">
          Término: {project.date_limit}
        </strong>
        <p>Descripción:</p>
        <p className="description-details-project">
          {project.description}
        </p>
      </div>
      <div className="links-page-project">
      <Link href={`/proyectos/${id}/tabla-kanban`} className="link-page-project">
          Tabla kanban
          <img src={iconLink.src} alt="link" width={20} height={20} className="icon-link" />
        </Link>
        <Link href={`/proyectos/${id}/semana`} className="link-page-project">
          Semana
          <img src={iconLink.src} alt="link" width={20} height={20} className="icon-link" />
        </Link>
        <Link href={`/proyectos/${id}/notas` }className="link-page-project">
          Notas
          <img src={iconLink.src} alt="link" width={20} height={20} className="icon-link" />
        </Link>
        <Link href={`/proyectos/${id}/todoList`} className="link-page-project">
          To-do List
          <img src={iconLink.src} alt="link" width={20} height={20} className="icon-link" />
        </Link>
      </div>
    </section>
  );
}
