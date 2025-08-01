"use client";
import { FormWeek } from "./FormWeek";
import { TableWeek } from "./TableWeek";
import { ToastContainer } from "react-toastify";
import { useCustomWeek } from "@/hooks/useCustomWeek";
import "./page-week.css";

export default function Semana({ params }: {params: { id: string } }) {
  const { id } = params;
  const { createWeek, deleteWeek, saveWeek, handleInputChange, week } =
    useCustomWeek(parseInt(id));

  return (
    <section className="section-page-semana">
      <ToastContainer />
      {week.length > 0 ? (
        <TableWeek
          week={week}
          deleteWeek={deleteWeek}
          saveWeek={saveWeek}
          handleInputChange={handleInputChange}
        />
      ) : (
        <FormWeek createWeek={createWeek} />
      )}
    </section>
  );
}
