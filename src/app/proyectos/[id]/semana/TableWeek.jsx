"use client";
import { daysOfWeek } from "@/libs/dataPageWeek";
import { useCustomTable } from "@/hooks/useCustomTable";

export const TableWeek = ({ days, handleDeleteWeek, saveWeek, id }) => {
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
                <textarea rows={4} type="text"
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
        <button onClick={() => handleDeleteWeek()} className="btn-week delete-week">Eliminar semana</button>
        <button onClick={() => saveWeek(tasks)} className="btn-week save-dates">Guardar cambios</button>
      </div>
    </section>
  );
};
