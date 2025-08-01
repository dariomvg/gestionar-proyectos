import { PropsCardList } from "@/types/types.todolist";

export const CardTodoList = ({
  item,
  deleteTask,
  completeTask,
}: PropsCardList) => {
  return (
    <div className={`card-todoList ${item.complete ? "complete-task" : ""}`}>
      <strong className="title-card-todoList">{item.task}</strong>
      <div className="container-btns">
        <button
          onClick={() => deleteTask(item.id)}
          className="btn-card-todoList delete">
          Eliminar
        </button>
        <button
          onClick={() => completeTask(!item.complete)}
          className="btn-card-todoList completed">
          {item.complete ? "Deshacer" : "Completado"}
        </button>
      </div>
    </div>
  );
};
