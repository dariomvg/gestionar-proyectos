"use client";
import "./page-todo-list.css";
import { CardTodoList } from "./CardTodoList";
import { FormTodoList } from "./FormTodoList";
import { useCustomTodoList } from "@/hooks/useCustomTodoList";
import { PropsParamsId } from "@/types/types";

export default function TodoList({ params }: PropsParamsId) {
  const { id } = params;
  const { tasks, createTask, deleteTask, completeTask } = useCustomTodoList(parseInt(id));

  return (
    <section className="section-page-todoList">
      <FormTodoList createTask={createTask} />
      <section className="section-cards-todoList">
        {tasks.length > 0 ? (
          tasks.map((item, index) => (
            <CardTodoList
              key={index}
              item={item}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))
        ) : (
          <p className="title-sin-tasks">Sin tareas agregadas</p>
        )}
      </section>
    </section>
  );
}
