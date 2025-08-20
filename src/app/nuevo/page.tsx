"use client";
import "./form-new-project.css";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import RequireAuth from "@/components/RequireAuth";
import { useProjects } from "@/contexts/ContextProjects";
import Link from "next/link";

export default function FormNewProject() {
  const {addNewProject} = useProjects()
  const refTitle = useRef<HTMLInputElement>(null); 
  const refDate = useRef<HTMLInputElement>(null); 
  const refDescription = useRef<HTMLInputElement>(null); 

  const router = useRouter();

  const submitFormCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject = {
      title: refTitle.current.value,
      description: refDescription.current.value,
      date_limit: refDate.current.value,
      notes: ""
    }
    addNewProject(newProject);
    refTitle.current.value = ""; 
    refDate.current.value = ""; 
    refDescription.current.value = ""; 
    router.push("/proyectos");
  };

  return (
    <RequireAuth>
      <form onSubmit={submitFormCreate} className="form-create">
        <Link href="/proyectos" className="link-close-modal">
          Volver
        </Link>
        <div className="container-form">
          <div className="container-form-create">
            <label htmlFor="title" className="label-form-create">
              Nombre del proyecto
            </label>
            <input
              required
              type="text"
              name="title"
              id="title"
              placeholder="Aprender react, crear una app en javascript..."
              className="input-form-create"
              ref={refTitle}
            />
          </div>

          <div className="container-form-create">
            <label htmlFor="date_limit" className="label-form-create">
              Fecha límite
            </label>
            <input
              required
              type="date"
              placeholder="11/06/2024"
              name="date_limit"
              id="date_limit"
              className="input-form-create"
              ref={refDate}
            />
          </div>

          <div className="container-form-create">
            <label htmlFor="description" className="label-form-create">
              Descripción
            </label>
            <input
              required
              type="text"
              name="description"
              id="description"
              placeholder="Proyecto de prueba..."
              className="input-form-create"
              ref={refDescription}
            />
          </div>

          <button type="submit" className="button-create-form">
            Crear proyecto
          </button>
        </div>
      </form>
    </RequireAuth>
  );
}
