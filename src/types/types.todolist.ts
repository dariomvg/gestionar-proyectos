
export interface CustomTodolistTypes {
    tasks: TaskTodolist[];
    createTask: (task: {task: string, complete: boolean}) => void;
    deleteTask: (id: number) => void;
    completeTask: (value: boolean, idTask: number) => void;
  }
  
export interface PropsFormlist {
    createTask: (task: {task: string, complete: boolean}) => void;
  }
  
export interface PropsCardList {
    item: TaskTodolist;
    deleteTask: (id: number) => void;
    completeTask: (value: boolean, idTask: number) => void;
  }
  
export interface TaskTodolist {
  id: number;
  task: string;
  complete: boolean;
}
