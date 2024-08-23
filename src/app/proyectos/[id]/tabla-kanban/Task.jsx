import { useDraggable } from "@dnd-kit/core";

const Task = ({ id, content, deleteTask }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id,
    });

  const styleTask = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  return (
    <div className="container-task-kanban">
      <div ref={setNodeRef} style={styleTask} {...listeners} {...attributes} className="task-kanban">
        <p className="title-task-kanban">{content}</p>
      </div>
      <button onClick={() => deleteTask(id)} className="btn-delete-kanban">
        Eliminar
      </button>
    </div>
  );
};

export default Task;
