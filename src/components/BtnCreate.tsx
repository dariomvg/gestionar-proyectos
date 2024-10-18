"use client"
import { useHandleProjects } from "@/contexts/ContextProjects";
import "../styles/Btn-create.css"

export const BtnCreate = (): JSX.Element => {
  const {handleViewCreate } = useHandleProjects(); 

  return (
    <button className="section-create-btn" onClick={() => handleViewCreate()}>Crea un nuevo proyecto</button>
  )
}
