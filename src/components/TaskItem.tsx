import React from "react";

interface TaskItemProps {
  task: { id: number; text: string; completed: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Pendiente" : "Hecho"}
      </button>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </div>
  );
};

export default TaskItem;
