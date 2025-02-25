import React, { useState } from "react";

interface TaskFormProps {
  onAdd: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;

