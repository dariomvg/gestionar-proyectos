"use client"
import { CardMainProject } from "@/components/CardMainProject";
import "./Proyectos.css";
import { BtnCreate } from "@/components/BtnCreate";
import { useHandleProjects } from "@/contexts/ContextProjects";

export default function Proyectos() {
  
  const {projects} = useHandleProjects();

  return (
    <main className="page-projects">
      {!projects.length > 0 ? (
        <section className="projects-section-create">
          <BtnCreate />
        </section>
      ) : (
        <section className="section-projects-main">
          <h1 className="section-projects-title">Tus proyectos</h1>
          <section className="container-projects-main">
            {projects && projects.map((item) => <CardMainProject key={item.id} item={item} />)}
          </section>
        </section>
      )}
    </main>
  );
}
