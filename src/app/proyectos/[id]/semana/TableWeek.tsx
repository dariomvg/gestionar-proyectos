"use client";
import { daysOfWeek } from "@/libs/dataPageWeek";
import { useCustomTable } from "@/hooks/useCustomTable";
import { PropsTableWeek } from "@/types/types.table";

export const TableWeek = ({ days, handleDeleteWeek, saveWeek, id }: PropsTableWeek) => {
  const {tasks, handleInputChange} = useCustomTable(id); 

  return (
    <section className="container-table-week">
      <table className="table-week">
        <thead>
          <tr>
            <th>Días</th>
            <th>Hacer</th>
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.slice(0, days).map((day) => (
            <tr key={day}>
              <td className="day">{day}</td>
              <td>
                <input 
                type="text"
                  name={day}
                  value={tasks[day] || ""}
                  onChange={(e) => handleInputChange(e)}
                  className="textarea-table" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container-btns-week">
        <button onClick={() => handleDeleteWeek()} className="btn-week delete-week">Reiniciar semana</button>
        <button onClick={() => saveWeek(tasks)} className="btn-week save-dates">Guardar cambios</button>
      </div>
    </section>
  );
};
