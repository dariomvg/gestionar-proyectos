"use client";
import KanbanBoard from "./KanbanBoard";
import TaskForm from "./TaskForm";
import "./page-kanban.css";
import { useCustomKanban } from "@/hooks/useCustomKanban";

export default function TablaKanban({ params }: {params:{ id: string}}) {
  const { id } = params;
  const { tasks, moveTask, deleteTask, addTask } = useCustomKanban(parseInt(id))

  return (
    <section className="section-page-kanban">
      <TaskForm addTask={addTask} />
      <KanbanBoard tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} />
    </section>
  );
}

