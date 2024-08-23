"use client";
import { useState } from "react";

const baseTask = {
  id: "",
  task: "",
  complete: false,
};

export const FormTodoList = ({ createTask }) => {
  const [task, setTask] = useState(baseTask);

  const changeTasks = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const submitTasks = (e) => {
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
