"use client";

import "./view-project.css";
import Link from "next/link";
import RequireAuth from "@/components/RequireAuth";
import { useViewProject } from "@/hooks/useViewProject";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ViewProject({ params }: { params: { id: string } }) {
  const { project, isDisabled, changeProject, sendProject } = useViewProject(
    parseInt(params.id)
  );
  const router = useRouter();
  const submitProject = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendProject();
    router.push("/proyectos");
  };

  return (
    <RequireAuth>
      <section className="container-modal">
        <form className="form-view" onSubmit={submitProject}>
          <label className="label-form-view">Nombre del proyecto</label>
          <input
            type="text"
            className="input-form-view"
            name="title"
            value={project.title}
            onChange={changeProject}
          />
          <label className="label-form-view">Fecha límite</label>
          <input
            type="date"
            className="input-form-view"
            name="date_limit"
            value={project.date_limit}
            onChange={changeProject}
          />
          <label className="label-form-view">Descripción</label>
          <input
            name="description"
            value={project.description}
            onChange={changeProject}
            type="text"
            className="input-form-view"
          />
          <div className="container-btn-form-view">
            <Link href="/proyectos" className="button-form-view close">
              Cerrar
            </Link>
            <button
              type="submit"
              className={`button-form-view save ${isDisabled && "disabled"}`}
              disabled={isDisabled}>
              Guardar cambios
            </button>
          </div>
        </form>
      </section>
    </RequireAuth>
  );
}
