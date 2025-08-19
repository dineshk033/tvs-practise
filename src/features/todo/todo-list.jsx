import React, { useState } from "react";
function TodoItem(props) {
  return (
    <div className="d-flex g-4">
      <input
        defaultChecked={props.completed}
        type="checkbox"
        onChange={(e) => props.handleChange(e, props.id)}
      />
      <label className="ms-3">{props.todo}</label>
    </div>
  );
}

export default function TodoList({ list, handleChange }) {
  const [isHover, setIsHover] = useState(null);
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
          <TodoItem {...item} handleChange={handleChange} />
        </li>
      ))}
    </ul>
  );
}
