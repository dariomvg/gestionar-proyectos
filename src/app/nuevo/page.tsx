"use client";
import "./nuevo.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { useHandleProjects } from "@/contexts/ContextProjects";
import { objBase } from "@/libs/objBase";
import { useRouter } from "next/navigation";

export default function Nuevo(): JSX.Element {
  const [objForm, setObjForm] = useState(objBase);
  const { handleProject } = useHandleProjects();
  const router = useRouter();

  const changeFormCreate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setObjForm({ ...objForm, [name]: value });
  };

  const submitFormCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleProject(objForm);
    router.push("/proyectos")
    setObjForm(objBase);
  };

  const returnPage = () => {
    setObjForm(objBase); 
    router.push("/proyectos");
  };

  return (
    <form onSubmit={submitFormCreate} className="form-create">
      <button className="btn-close-modal" onClick={returnPage}>Volver</button>
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
  );
}
