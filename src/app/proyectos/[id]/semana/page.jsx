"use client";

import { FormWeek } from "./FormWeek";
import { TableWeek } from "./TableWeek";
import "./Semana.css";
import { ToastContainer } from "react-toastify";
import { useCustomWeek } from "@/hooks/useCustomWeek";


export default function Semana({ params }) {
  const { id } = params;
  const {days, handleCreateWeek, handleDeleteWeek, saveWeek} = useCustomWeek(id)

  return (
    <section className="section-page-semana">
      <ToastContainer />
      {days > 0 ? (
        <TableWeek
          days={days}
          handleDeleteWeek={handleDeleteWeek}
          id={id}
          saveWeek={saveWeek}
        />
      ) : (
        <FormWeek handleCreateWeek={handleCreateWeek} />
      )}
    </section>
  );
}
