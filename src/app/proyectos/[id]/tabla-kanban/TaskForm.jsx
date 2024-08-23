"use client";
import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskContent, setTaskContent] = useState('');

  const handleSubmit = (e) => {
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
        placeholder="Add new task"
      />
      <button type="submit" className='btn-kanban'>Add Task</button>
    </form>
  );
};

export default TaskForm;
