import React, { useState } from "react";
function TodoItem(props) {
  return (
    <div className="row g-4 align-items-center">
      <div className="col-10">
        <input
          defaultChecked={props.completed}
          type="checkbox"
          onChange={() => props.handleChange(props.id)}
        />
        <label className="ms-3">{props.todo}</label>
      </div>
      <div className="col-2">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => props.handleDelete(props.id)}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default function TodoList({ list, handleChange, handleDelete }) {
  const [isHover, setIsHover] = useState(null);
  console.log("child");
  return (
    <ul className="list-group">
      {list.map((item) => (
        <li
          className={`list-group-item cursor-pointer ${
            isHover === item.id ? "text-primary" : "text-dark"
          }`}
          key={item.id}
          onMouseEnter={() => setIsHover(item.id)}
          onMouseLeave={() => setIsHover(null)}
        >
          {/* stateless or presenter or dummy component */}
          <TodoItem
            {...item}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
}
