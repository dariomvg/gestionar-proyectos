import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";
import { PropsColumnTypes } from "@/types/types.kanban";

const Column = ({ id, title, tasks, deleteTask }: PropsColumnTypes): JSX.Element => {
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
