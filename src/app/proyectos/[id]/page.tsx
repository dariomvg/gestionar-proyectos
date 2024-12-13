"use client";
import { useEffect, useState } from "react";
import "./Principal.css";
import { useHandleProjects } from "@/contexts/ContextProjects";
import Link from "next/link";
import iconLink from "@/assets/icons/icon-link.svg"
import { ObjBaseType, PropsParamsId } from "@/types/types";
import { objBase } from "@/libs/objBase";

export default function IdProject({params}: PropsParamsId): JSX.Element {
  const { findProject } = useHandleProjects();
  const [project, setProject] = useState<ObjBaseType>(objBase);
 
  useEffect(() => {
     const currentProject = findProject(parseInt(params.id));
     setProject(currentProject);
  }, [params.id]);
  
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
      <Link href={`/proyectos/${params.id}/tabla-kanban`} className="link-page-project">
          Tabla kanban
          <img src={iconLink.src} alt="link" width={20} height={20} className="icon-link" />
        </Link>
        <Link href={`/proyectos/${params.id}/semana`} className="link-page-project">
          Semana
          <img src={iconLink.src} alt="link" width={20} height={20} className="icon-link" />
        </Link>
        <Link href={`/proyectos/${params.id}/notas` }className="link-page-project">
          Notas
          <img src={iconLink.src} alt="link" width={20} height={20} className="icon-link" />
        </Link>
        <Link href={`/proyectos/${params.id}/todoList`} className="link-page-project">
          To-do List
          <img src={iconLink.src} alt="link" width={20} height={20} className="icon-link" />
        </Link>
      </div>
    </section>
  );
}
