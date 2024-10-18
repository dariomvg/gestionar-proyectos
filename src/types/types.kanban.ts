import { TaskKanbanType } from "./types";

export interface CustomKanbanTypes {
  tasks: TaskKanbanType[];
  addTask: (content: string) => void;
  moveTask: (taskId: string, newColumn: string) => void;
  deleteTask: (id: string) => void;
}

export interface PropsTaskForm {
  addTask: (content: string) => void;
}

export interface PropsKanbanBoard {
  tasks: TaskKanbanType[];
  moveTask: (taskId: string, newColumn: string) => void;
  deleteTask: (id: string) => void;
}

export interface PropsColumnTypes {
  id: string;
  title: string;
  tasks: TaskKanbanType[];
  deleteTask: (id: string) => void;
}

export interface PropsTaskKanban {
  id: string;
  content: string;
  deleteTask: (id: string) => void;
}
