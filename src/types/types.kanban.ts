export interface CustomKanbanTypes {
  tasks: TaskKanbanType[];
  addTask: (content: string) => void;
  moveTask: (idTask: number, newColumn: string) => void;
  deleteTask: (id: number) => void;
}

export interface PropsTaskForm {
  addTask: (content: string) => void;
}

export interface PropsKanbanBoard {
  tasks: TaskKanbanType[];
  moveTask: (idTask: number, newColumn: string) => void;
  deleteTask: (id: number) => void;
}

export interface PropsColumnTypes {
  id: string;
  title: string;
  tasks: TaskKanbanType[];
  deleteTask: (id: number) => void;
}

export interface PropsTaskKanban {
  id: number;
  content: string;
  deleteTask: (id: number) => void;
}

export interface TaskKanbanType {
  id: number;
  content: string;
  column: string;
}

