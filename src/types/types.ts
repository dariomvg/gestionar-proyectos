import { ReactNode } from "react";

export interface ObjBaseType {
  id: number;
  title: string;
  description: string;
  date_limit: string;
  notes: string;
  semana: number;
  data_semana: DataSemana;
  kanban: TaskKanbanType[];
  todoList: TaskTodolist[];
}
export interface DetailsMainTypes {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ContextProjectsTypes {
  projects: ObjBaseType[];
  findProject: (id: number) => ObjBaseType;
  handleProject: (data: ObjBaseType) => void;
  deleteProject: (id: number) => void;
}

export interface ChildrenContextType {
  children: ReactNode;
}

export interface DataSemana {
  Lunes?: string;
  Martes?: string;
  Miercoles?: string;
  Jueves?: string;
  Viernes?: string;
  Sabado?: string;
  Domingo?: string;
}

export interface TaskKanbanType {
  id: string;
  content: string;
  column: string;
}

export interface TaskTodolist {
  id: number;
  task: string;
  complete: boolean;
}


export interface PropsParamsId {
  params: { id: string };
}

export interface PropsLayoutId {
  children: ReactNode;
  params: {
    id: string;
  };
}

export interface PropsCard {
  item: ObjBaseType;
}

export interface PropsCardNav {
  item: ObjBaseType;
  viewProject: (id: number) => void;
  removeProject: (id: number) => void; 
}

export interface PropsCardDetails {
  item: DetailsMainTypes;
}

export interface PropsHeaderProject {
  id: string;
}
