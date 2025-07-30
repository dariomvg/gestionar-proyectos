"use client";
import { NavProjects } from "@/components/NavProjects";
import "./global-projects.css";
import { ReactNode } from "react";

export default function LayoutProyectos({ children }: { children: ReactNode }) {
  return (
    <section className="wrapper-projects">
      <NavProjects />
      <section className="projects-section-all">
        <div className="container-projects">
          <main className="container-target-project">{children}</main>
        </div>
      </section>
    </section>
  );
}
