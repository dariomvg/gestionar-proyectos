"use client";
import { CardProject } from "@/components/CardProject";
import "./Proyectos.css";
import { BtnCreate } from "@/components/BtnCreate";
import { useHandleProjects } from "@/contexts/ContextProjects";
import { ObjBaseType } from "@/types/types";

export default function Proyectos(): JSX.Element {
  const { projects } = useHandleProjects();

  return (
    <main className="page-projects">
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
          <BtnCreate />
        </section>
      )}
    </main>
  );
}
