import { ReactNode } from "react";
import "./projects.css";
import Link from "next/link";
import iconLink from "@/assets/icons/icon-link.svg";
import { PropsParamsId } from "@/types/types";
import imageNotes from "@/assets/image-page-project.svg";

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

export default function IdProject({ params }: PropsParamsId) {
  return (
    <section className="section-page-project">
      <h1 className="title-page-project">Gestiona tu proyecto</h1>
      <img
        src={imageNotes.src}
        alt="image notes"
        width={400}
        height={400}
        className="image-page-projects"
      />
      <div className="links-page-project">
        <LinkPageProject href={`/proyectos/${params.id}/tabla-kanban`}>
          Tabla Kanban
        </LinkPageProject>
        <LinkPageProject href={`/proyectos/${params.id}/semana`}>
          Semana
        </LinkPageProject>
        <LinkPageProject href={`/proyectos/${params.id}/notas`}>
          Notas
        </LinkPageProject>
        <LinkPageProject href={`/proyectos/${params.id}/todoList`}>
          To-do List
        </LinkPageProject>
      </div>
    </section>
  );
}
