import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";

const Column = ({ id, title, tasks, deleteTask }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="column-kanban"> 
      <h2>{title}</h2>
      {tasks.map((task) => (  
        <Task key={task.id} id={task.id} content={task.content} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default Column;
