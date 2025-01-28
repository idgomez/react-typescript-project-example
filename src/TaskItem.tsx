import React from "react";
import { Task } from "./data";

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion }) => {
  return (
    <li
      onClick={() => toggleTaskCompletion(task.id)}
      style={{
        listStyle: "none",
        cursor: "pointer",
        margin: "10px 0",
        padding: "10px 15px",
        display: "flex",
        alignItems: "center",
        background: task.completed
          ? "linear-gradient(90deg, #d4f8e8, #aef5c7)"
          : "linear-gradient(90deg, #f5f5f5, #e0e0e0)",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s, transform 0.2s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = task.completed
          ? "linear-gradient(90deg, #c8f3dd, #a1f0ba)"
          : "linear-gradient(90deg, #ececec, #d6d6d6)";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = task.completed
          ? "linear-gradient(90deg, #d4f8e8, #aef5c7)"
          : "linear-gradient(90deg, #f5f5f5, #e0e0e0)";
        e.currentTarget.style.transform = "scale(1)";
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <span style={{ marginRight: "10px" }}>
        {task.completed ? "✅" : "⬜"}
      </span>
      {task.title}
    </li>
  );
};

export default TaskItem;
