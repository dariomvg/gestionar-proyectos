"use client";
import { PropsTaskForm } from '@/types/types.kanban';
import { FormEvent, useState } from 'react';

const TaskForm = ({ addTask }: PropsTaskForm) => {
  const [taskContent, setTaskContent] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskContent) return;
    addTask(taskContent);
    setTaskContent('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-kanban'>
      <input
        type="text"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        className='input-kanban'
        placeholder="Agregar nueva tarea..."
      />
      <button type="submit" className='btn-kanban'>Agregar</button>
    </form>
  );
};

export default TaskForm;
