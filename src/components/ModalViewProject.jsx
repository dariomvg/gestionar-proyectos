"use client";
import { useHandleProjects } from "@/contexts/ContextProjects";
import "../styles/Modal-view-project.css";
import { useEffect, useState } from "react";

const objBaseDetails = {
  id: "",
  title: "",
  date_limit: "",
  description: "",
}

export const ModalViewProject = () => {
  const { handleViewDetails, handleProject, setDataProject, dataProject } = useHandleProjects();
  const [formDetails, setFormDetails] = useState(objBaseDetails);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeDetails = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
    setIsDisabled(false); 
  }

  const submitDetails = (e) => {
    e.preventDefault(); 
    handleProject(formDetails); 
    setFormDetails(objBaseDetails); 
    setDataProject({});
    setIsDisabled(true);
    handleViewDetails(); 
  }

  useEffect(() => {
    if(dataProject){
      setFormDetails(dataProject); 
    }
  }, [dataProject])
  
  return (
    <div className="container-modal">
      <form className="form-view" onSubmit={submitDetails}>
        <label className="label-form-view">
          Nombre del proyecto
        </label>
        <input type="text" className="input-form-view" name="title" value={formDetails.title}  onChange={(e) => handleChangeDetails(e)}/>
        <label className="label-form-view">
          Fecha límite
        </label>
        <input type="date" className="input-form-view" name="date_limit" value={formDetails.date_limit} onChange={(e) => handleChangeDetails(e)} />
        <label className="label-form-view">
          Descripción
        </label>
        <textarea
          name="description"
          value={formDetails.description}
          onChange={(e) => handleChangeDetails(e)}
          rows={4}
          type="text"
          className="input-form-view description"></textarea>
        <div className="container-btn-form-view">
          <button className="button-form-view close" onClick={() => handleViewDetails()}>
            Cerrar
          </button>
          <button type="submit" className={`button-form-view save ${isDisabled && "disabled"}`} disabled={isDisabled}>Guardar cambios</button>
        </div>
      </form>
    </div>
  );
};
