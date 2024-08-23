"use client"
import { NavProjects } from "@/components/NavProjects";
import { ModalFormCreate } from "@/components/ModalFormCreate";
import { ModalViewProject } from "@/components/ModalViewProject";
import { useHandleProjects } from "@/contexts/ContextProjects";
import "./global-proyectos.css";

export default function LayoutProyectos({ children }) {
  const { viewCreate, viewDetails, projects } = useHandleProjects();

  return (
    <section className="wrapper-projects">
      {projects.length > 0 && <NavProjects />}
      {viewCreate && <ModalFormCreate />}
      {viewDetails && <ModalViewProject />}
      <section className="projects-section-all">
        <div className="container-projects">
          <section className="container-target-project">{children}</section>
        </div>
      </section>
    </section>
  );
}
