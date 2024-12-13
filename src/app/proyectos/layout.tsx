"use client";
import { NavProjects } from "@/components/NavProjects";
import { useHandleProjects } from "@/contexts/ContextProjects";
import "./global-proyectos.css";

export default function LayoutProyectos({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { projects } = useHandleProjects();

  return (
    <section className="wrapper-projects">
      {projects.length > 0 && <NavProjects />}
      <section className="projects-section-all">
        <div className="container-projects">
          <section className="container-target-project">{children}</section>
        </div>
      </section>
    </section>
  );
}
