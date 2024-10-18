"use client";
import { baseTask } from "@/libs/baseTaskTodolist";
import { PropsFormlist } from "@/types/types.todolist";
import { ChangeEvent, FormEvent, useState } from "react";

export const FormTodoList = ({ createTask }: PropsFormlist): JSX.Element => {
  const [task, setTask] = useState(baseTask);

  const changeTasks = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const submitTasks = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
    setTask(baseTask);
  };

  return (
    <form onSubmit={submitTasks} className="form-todo-list">
      <input
        type="text"
        id="task"
        name="task"
        value={task.task}
        onChange={(e) => changeTasks(e)}
        className="input-todo-list"
        placeholder="Añade tus tareas, ideas, etc..."
      />
      <button type="submit" className="btn-todo-list">Agregar</button>
    </form>
  );
};
