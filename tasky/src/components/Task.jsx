import React from 'react';

const Task = (props) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "#ff4d4d";
      case "Medium": return "#ffa500";
      case "Low": return "#66cc66";
      default: return "#ccc";
    }
  };

  return (
    <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : getPriorityColor(props.priority) }}>
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <p style={{ color: "white", fontWeight: "bold" }}>Priority: {props.priority}</p>
      <button onClick={props.markDone} className="doneButton">Done</button>
      <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
