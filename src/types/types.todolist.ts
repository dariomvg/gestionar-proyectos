
export interface CustomTodolistTypes {
    tasks: TaskTodolist[];
    createTask: (task: TaskTodolist) => void;
    deleteTask: (id: number) => void;
    completeTask: (value: boolean) => void;
  }
  
  export interface PropsFormlist {
    createTask: (task: TaskTodolist) => void;
  }
  
  export interface PropsCardList {
    item: TaskTodolist;
    deleteTask: (id: number) => void;
    completeTask: (value: boolean) => void;
  }
  
  export interface TaskTodolist {
  id: number;
  task: string;
  complete: boolean;
}
