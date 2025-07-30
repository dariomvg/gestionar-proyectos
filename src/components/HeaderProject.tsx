import Link from "next/link";
import "../styles/header-project.css";
import { PropsHeaderProject } from "@/types/types";

export const HeaderProject = ({id}: PropsHeaderProject) => {

  return (
    <header className="header-navbar-project">
      <nav className="navbar-project">
        <Link href={`/proyectos/${id}/tabla-kanban`} className="link-navbar">
          Kanban
        </Link>
        <Link href={`/proyectos/${id}/semana`} className="link-navbar">
          Semana
        </Link>
        <Link href={`/proyectos/${id}/notas` }className="link-navbar">
          Notas
        </Link>
        <Link href={`/proyectos/${id}/todoList`} className="link-navbar">
          To-do List
        </Link>
      </nav>
    </header>
  );
};
