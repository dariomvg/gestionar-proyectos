"use client";

import { ChangeEvent, FormEvent } from "react";
import "./view-project.css";
import { useFindProject } from "@/hooks/useFindProject";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PropsParamsId } from "@/types/types";
import RequireAuth from "@/components/RequireAuth";

export default function ViewProject({ params }: PropsParamsId) {
  const { project, setProject, updateProject, isDisabled, setIsDisabled } =
    useFindProject(params.id);
  const router = useRouter();

  const handleChangeDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProject({ ...project, [name]: value });
    setIsDisabled(false);
  };

  const submitDetails = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProject();
    setIsDisabled(true);
    router.push("/proyectos");
  };

  return (
    <RequireAuth>
      <section className="container-modal">
        <form className="form-view" onSubmit={submitDetails}>
          <label className="label-form-view">Nombre del proyecto</label>
          <input
            type="text"
            className="input-form-view"
            name="title"
            value={project.title}
            onChange={handleChangeDetails}
          />
          <label className="label-form-view">Fecha límite</label>
          <input
            type="date"
            className="input-form-view"
            name="date_limit"
            value={project.date_limit}
            onChange={handleChangeDetails}
          />
          <label className="label-form-view">Descripción</label>
          <input
            name="description"
            value={project.description}
            onChange={handleChangeDetails}
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
