"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./page-notes.css";
import { ToastContainer } from 'react-toastify';
import { useCustomNotes } from "@/hooks/useCustomNotes";
import { PropsParamsId } from "@/types/types";


export default function Notas({ params }: PropsParamsId) {
  const { id } = params;
  const {value, setValue, handleChangeNotes} = useCustomNotes(parseInt(id)); 

  return (
    <section className="section-page-notas">
      <button onClick={handleChangeNotes} className="btn-page-notas">Guardar cambios</button>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <ToastContainer />
    </section>
  );
}
