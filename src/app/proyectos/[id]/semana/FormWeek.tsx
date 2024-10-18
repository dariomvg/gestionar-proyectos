"use client";
import { days } from "@/libs/dataPageWeek";
import { FormEvent, useState } from "react";


export const FormWeek = ({handleCreateWeek}): JSX.Element => {
  const [selectedDay, setSelectedDay] = useState(0);

  const handleCheckboxChange = (value: number) => {
    selectedDay === value ? setSelectedDay(0) : setSelectedDay(value);
  };

  const submitWeek = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateWeek(selectedDay);
    setSelectedDay(0);
  };

  return (
    <form className="form-week" onSubmit={submitWeek}>
      <h3 className="title-form-week">
        Elige los días que trabajarás en el proyecto:
      </h3>
      {days.map((day) => (
        <div className="container-input-week" key={day}>
          <input
            type="checkbox"
            id={`${day}`}
            value={day}
            checked={selectedDay == day}
            onChange={() => handleCheckboxChange(day)}
          />
          <label htmlFor={`${day}`} className="label-input-week">
            {day} día{day > 1 && "s"}
          </label>
        </div>
      ))}
      <button type="submit" className="btn-week">
        Crear semana
      </button>
    </form>
  );
};
