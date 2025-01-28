import React, { useState } from "react";
import { Task } from "./data";
import TaskItem from "./TaskItem";
import { tasks as initialTasks } from "./data";
import logo from "../capgemini.gif";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState<string>("");

  const toggleTaskCompletion = (id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (): void => {
    if (newTask.trim() === "") return;
    const newTaskObject: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTask("");
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "500px",
        margin: "20px auto",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Task Manager
      </h1>

      <div
        style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
      >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
          style={{
            flex: "1",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginRight: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 15px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#45a049")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4CAF50")
          }
        >
          Add
        </button>
      </div>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            flex: "1",
            padding: "10px",
            margin: "0 5px",
            backgroundColor: "#2196F3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#1976D2")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#2196F3")
          }
        >
          All
        </button>
        <button
          style={{
            flex: "1",
            padding: "10px",
            margin: "0 5px",
            backgroundColor: "#FF9800",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#F57C00")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF9800")
          }
        >
          Completed
        </button>
        <button
          style={{
            flex: "1",
            padding: "10px",
            margin: "0 5px",
            backgroundColor: "#F44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#D32F2F")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#F44336")
          }
        >
          Pending
        </button>
      </div>

      <ul style={{ padding: "0" }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
