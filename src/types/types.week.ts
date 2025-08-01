import { ChangeEvent } from "react";

export interface CustomWeekTypes {
  createWeek: (day: number) => void;
  deleteWeek: () => void;
  saveWeek: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  week: {id: number, day: string, content: string}[]
}

export interface PropsTableWeek {
  deleteWeek: () => void;
  saveWeek: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  week: {id: number, day: string, content: string}[]
}
