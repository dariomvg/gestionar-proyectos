"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Notas.css";
import { ToastContainer } from 'react-toastify';
import { useCustomNotes } from "@/hooks/useCustomNotes";

export default function Notas({ params }) {
  const { id } = params;
  const {value, setValue, handleChangeNotes} = useCustomNotes(id); 

  return (
    <section className="section-page-notas">
      <button onClick={handleChangeNotes} className="btn-page-notas">Guardar cambios</button>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <ToastContainer />
    </section>
  );
}
