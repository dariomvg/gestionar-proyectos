import { ChangeEvent } from "react";
import { DataSemana } from "./types";

export interface CustomTableTypes {
    tasks: DataSemana;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
  
  export interface PropsTableWeek {
    days: number;
    handleDeleteWeek: () => void;
    saveWeek: (tasks: DataSemana) => void;
    id: number;
  }