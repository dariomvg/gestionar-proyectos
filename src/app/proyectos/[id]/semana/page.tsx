"use client";
import { FormWeek } from "./FormWeek";
import { TableWeek } from "./TableWeek";
import "./page-week.css";
import { ToastContainer } from "react-toastify";
import { useCustomWeek } from "@/hooks/useCustomWeek";
import { PropsParamsId } from "@/types/types";

export default function Semana({ params }: PropsParamsId) {
  const { id } = params;
  const {days, handleCreateWeek, handleDeleteWeek, saveWeek} = useCustomWeek(parseInt(id)); 

  return (
    <section className="section-page-semana">
      <ToastContainer />
      {days > 0 ? (
        <TableWeek
          days={days}
          handleDeleteWeek={handleDeleteWeek}
          id={parseInt(id)}
          saveWeek={saveWeek}
        />
      ) : (
        <FormWeek handleCreateWeek={handleCreateWeek} />
      )}
    </section>
  );
}
