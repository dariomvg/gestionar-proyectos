"use client";
import { PropsTableWeek } from "@/types/types.week";

export const TableWeek = ({
  week,
  deleteWeek,
  saveWeek,
  handleInputChange,
}: PropsTableWeek) => {
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
          {week.map(({day, content, id}) => (
            <tr key={id}>
              <td className="day">{day}</td>
              <td>
                <input
                  type="text"
                  name={day}
                  value={content}
                  onChange={(e) => handleInputChange(e.target.value, id)}
                  className="textarea-table"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container-btns-week">
        <button onClick={deleteWeek} className="btn-week delete-week">
          Reiniciar semana
        </button>
        <button onClick={saveWeek} className="btn-week save-dates">
          Guardar cambios
        </button>
      </div>
    </section>
  );
};
