import { Dispatch, ReactNode, SetStateAction } from "react";

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
  viewCreate: boolean;
  viewDetails: boolean;
  dataProject: ObjBaseDetailsTypes;
  setDataProject: Dispatch<SetStateAction<{}>>;
  projects: ObjBaseType[];
  handleViewCreate: () => void;
  closeModalDetails: () => void; 
  findProject: (id: number) => ObjBaseType;
  handleViewDetails: (data: ObjBaseDetailsTypes) => void;
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

export interface ObjBaseDetailsTypes {
  id: number;
  title: string;
  date_limit: string;
  description: string;
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

export interface PropsCardDetails {
  item: DetailsMainTypes;
}

export interface PropsHeaderProject {
  id: string;
}
