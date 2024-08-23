"use client";
import KanbanBoard from "./KanbanBoard";
import TaskForm from "./TaskForm";
import "./Kanban.css";
import { useCustomKanban } from "@/hooks/useCustomKanban";

export default function TablaKanban({ params }) {
  const { id } = params;
  const { tasks, moveTask, deleteTask, addTask } = useCustomKanban(id)

  return (
    <section className="section-page-kanban">
      <TaskForm addTask={addTask} />
      <KanbanBoard tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} />
    </section>
  );
}
