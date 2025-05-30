import React from 'react';

function ToDoList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "gray" : "black",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span className="text" style={{ flex: 1 }}>{task.text}</span>
          <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
            style={{ marginLeft: '10px' }}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToDoList;
