"use client";
import { useHandleProjects } from "@/contexts/ContextProjects";
import "../styles/Modal-view-project.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { objBaseDetails } from "@/libs/objBaseDetails";
import { ObjBaseDetailsTypes, ObjBaseType } from "@/types/types";
import { objBase } from "@/libs/objBase";


export const ModalViewProject = (): JSX.Element => {
  const { closeModalDetails, handleProject, setDataProject, dataProject } = useHandleProjects();
  const [formDetails, setFormDetails] = useState<ObjBaseDetailsTypes>(objBaseDetails);
  const [formEdit, setFormEdit] = useState<ObjBaseType>(objBase)
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleChangeDetails = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
    setIsDisabled(false); 
  }

  const submitDetails = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    handleProject(formEdit); 
    setFormDetails(objBaseDetails); 
    setDataProject(objBaseDetails);
    setIsDisabled(true);
    closeModalDetails(); 
  }

  useEffect(() => {
    if(dataProject){
      setFormEdit({
        ...objBase, 
        ...dataProject,
      })
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
        <input
          name="description"
          value={formDetails.description}
          onChange={(e) => handleChangeDetails(e)}
          type="text"
          className="input-form-view description" />
        <div className="container-btn-form-view">
          <button className="button-form-view close" onClick={() => closeModalDetails()}>
            Cerrar
          </button>
          <button type="submit" className={`button-form-view save ${isDisabled && "disabled"}`} disabled={isDisabled}>Guardar cambios</button>
        </div>
      </form>
    </div>
  );
};
