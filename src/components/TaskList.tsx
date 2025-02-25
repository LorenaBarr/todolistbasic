import React from "react";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TaskList;
