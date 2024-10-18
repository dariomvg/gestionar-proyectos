"use client";
import KanbanBoard from "./KanbanBoard";
import TaskForm from "./TaskForm";
import "./Kanban.css";
import { useCustomKanban } from "@/hooks/useCustomKanban";
import { PropsParamsId } from "@/types/types";

export default function TablaKanban({ params }: PropsParamsId): JSX.Element {
  const { id } = params;
  const { tasks, moveTask, deleteTask, addTask } = useCustomKanban(parseInt(id))

  return (
    <section className="section-page-kanban">
      <TaskForm addTask={addTask} />
      <KanbanBoard tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} />
    </section>
  );
}
