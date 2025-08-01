import { ReactNode } from "react";
import "./projects.css";
import Link from "next/link";
import iconLink from "@/assets/icons/icon-link.svg";
import imageNotes from "@/assets/image-page-project.svg";

export default function IdProject({ params }: {params: {id: string}}) {
  const {id} = params; 
  return (
    <main className="section-page-project">
      <h1 className="title-page-project">Gestiona tu proyecto</h1>
      <img
        src={imageNotes.src}
        alt="image notes"
        width={400}
        height={400}
        className="image-page-projects"
      />
      <div className="links-page-project">
        <LinkPageProject href={`/proyectos/${id}/tabla-kanban`}>
          Tabla Kanban
        </LinkPageProject>
        <LinkPageProject href={`/proyectos/${id}/semana`}>
          Semana
        </LinkPageProject>
        <LinkPageProject href={`/proyectos/${id}/notas`}>
          Notas
        </LinkPageProject>
        <LinkPageProject href={`/proyectos/${id}/todoList`}>
          To-do List
        </LinkPageProject>
      </div>
    </main>
  );
}

function LinkPageProject({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="link-page-project">
      {children}
      <img
        src={iconLink.src}
        alt="link"
        width={20}
        height={20}
        className="icon-link"
      />
    </Link>
  );
}
