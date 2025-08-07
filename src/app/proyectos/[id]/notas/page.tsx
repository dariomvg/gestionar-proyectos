"use client";
import ReactQuill from "react-quill";
import { ToastContainer } from "react-toastify";
import { useCustomNotes } from "@/hooks/useCustomNotes";
import "react-quill/dist/quill.snow.css";
import "./page-notes.css";

export default function Notas({ params }: {params: { id: string }}) {
  const { id } = params;
  const { value, setValue, updateNotes } = useCustomNotes(parseInt(id));

  
  return (
    <section className="section-page-notas">
      <button onClick={updateNotes} className="btn-page-notas">
        Guardar cambios
      </button>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <ToastContainer />
    </section>
  );
}
