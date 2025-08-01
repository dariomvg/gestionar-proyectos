"use client";
import "./form-new-project.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { objBase } from "@/libs/objBase";
import { useRouter } from "next/navigation";
import RequireAuth from "@/components/RequireAuth";
import { ObjBaseType } from "@/types/types";
import { useProjects } from "@/contexts/ContextProjects";
import Link from "next/link";

export default function FormNewProject() {
  const {addNewProject} = useProjects()
  const [objForm, setObjForm] = useState<ObjBaseType>(objBase);
  const router = useRouter();

  const changeFormCreate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setObjForm({ ...objForm, [name]: value });
  };

  const submitFormCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewProject(objForm);
    setObjForm(objBase);
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
              value={objForm.title}
              name="title"
              id="title"
              placeholder="Aprender react, crear una app en javascript..."
              onChange={changeFormCreate}
              className="input-form-create"
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
              value={objForm.date_limit}
              name="date_limit"
              id="date_limit"
              onChange={changeFormCreate}
              className="input-form-create"
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
              value={objForm.description}
              onChange={changeFormCreate}
              className="input-form-create"
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
