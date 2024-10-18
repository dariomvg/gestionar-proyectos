import { TaskTodolist } from "./types";

export interface CustomTodolistTypes {
    tasks: TaskTodolist[];
    createTask: (task: TaskTodolist) => void;
    deleteTask: (id: number) => void;
    completeTask: (id: number) => void;
  }
  
  
  export interface PropsFormlist {
    createTask: (task: TaskTodolist) => void;
  }
  
  export interface PropsCardList {
    item: TaskTodolist;
    deleteTask: (id: number) => void;
    completeTask: (id: number) => void;
  }
  