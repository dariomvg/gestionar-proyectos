import { PropsKanbanBoard } from "@/types/types.kanban";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";

const KanbanBoard = ({ tasks, moveTask, deleteTask }: PropsKanbanBoard) => {

  const columns = {
    tareas: {
      title: "Tareas",
      tasks: tasks.filter((task) => task.column === "tareas"),
    },
    progreso: {
      title: "En progreso",
      tasks: tasks.filter((task) => task.column === "progreso"),
    },
    terminadas: {
      title: "Terminadas",
      tasks: tasks.filter((task) => task.column === "terminadas"),
    },
  };

  function handleDragEnd(event) {
    const { active, over } = event; 
    if (over && active.id !== over.id) {
      const activeTask = tasks.find((task) => task.id === active.id); 
      if (activeTask) {
        moveTask(activeTask.id, over.id); 
      }
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        {Object.keys(columns).map((columnId) => ( 
          <Column
            key={columnId}
            id={columnId} 
            title={columns[columnId].title}
            tasks={columns[columnId].tasks}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
