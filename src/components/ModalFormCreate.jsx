"use client";
import { useState } from "react";
import "../styles/Modal-form-create.css";
import { useHandleProjects } from "@/contexts/ContextProjects";

const objBase = {
  id: "",
  title: "",
  description: "",
  date_limit: "",
  notes: "",
  semana: 0,
  data_semana: {},
  kanban: [],
  todoList: [],
};

export const ModalFormCreate = () => {
  const [objForm, setObjForm] = useState(objBase);
  const { handleViewCreate, handleProject } = useHandleProjects();

  const changeFormCreate = (e) => {
    setObjForm({
      ...objForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormCreate = (e) => {
    e.preventDefault();
    handleProject(objForm);
    setObjForm(objBase);
    handleViewCreate();
  };

  return (
    <form onSubmit={submitFormCreate} className="form-create">
      <button className="btn-close-modal" onClick={() => handleViewCreate()}>
        X
      </button>
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
            onChange={(e) => changeFormCreate(e)}
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
            onChange={(e) => changeFormCreate(e)}
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
            onChange={(e) => changeFormCreate(e)}
            className="input-form-create"
          />
        </div>

        <button type="submit" className="button-create-form">
          Crear proyecto
        </button>
      </div>
    </form>
  );
};
