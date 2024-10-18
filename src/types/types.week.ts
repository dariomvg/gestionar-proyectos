import { DataSemana } from "./types";

export interface CustomWeekTypes {
    days: number;
    handleCreateWeek: (day: number) => void;
    handleDeleteWeek: () => void;
    saveWeek: (tasks: DataSemana) => void;
  }
  