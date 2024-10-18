import { Dispatch, SetStateAction } from "react";

export interface CustomNoteTypes {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    handleChangeNotes: () => void;
  }