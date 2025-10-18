import React from 'react';

const Task = (props) => {
  // Optional: color-code the priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <p style={{ color: getPriorityColor(props.priority), fontWeight: "bold" }}>
        Priority: {props.priority}
      </p>
    </div>
  );
};

export default Task;
