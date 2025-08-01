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
          {week.map((item) => (
            <tr key={item.id}>
              <td className="day">{item.day}</td>
              <td>
                <input
                  type="text"
                  name={item.day}
                  value={item.content}
                  onChange={handleInputChange}
                  className="textarea-table"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container-btns-week">
        <button onClick={() => deleteWeek()} className="btn-week delete-week">
          Reiniciar semana
        </button>
        <button onClick={() => saveWeek()} className="btn-week save-dates">
          Guardar cambios
        </button>
      </div>
    </section>
  );
};
