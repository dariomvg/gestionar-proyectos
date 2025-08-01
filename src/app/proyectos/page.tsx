"use client";
import { CardProject } from "@/components/CardProject";
import "./page-projects.css";
import { ObjBaseType } from "@/types/types";
import RequireAuth from "@/components/RequireAuth";
import { useProjects } from "@/contexts/ContextProjects";

export default function Proyectos() {
  const { projects } = useProjects();

  return (
    <RequireAuth>
      <section className="page-projects">
        {projects.length > 0 ? (
          <section className="section-projects-main">
            <h1 className="section-projects-title">Tus proyectos</h1>
            <section className="container-projects-main">
              {projects.map((item: ObjBaseType) => (
                <CardProject key={item.id} item={item} />
              ))}
            </section>
          </section>
        ) : (
          <section className="projects-section-create">
            <h1 className="title-section-create">
              Sin proyectos pendientes...
            </h1>
          </section>
        )}
      </section>
    </RequireAuth>
  );
}
