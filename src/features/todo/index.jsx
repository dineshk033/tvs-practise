import React, { useState } from "react";
import TodoList from "./todo-list";
import { TODOLIST } from "../../mock/todo";

export default function TodoApp() {
  const [dataSource, setDataSource] = useState(
    TODOLIST.filter((item) => item.userId === 13)
  );
  const handleChange = (event, id) => {
    const { checked } = event.target;
    // console.log(checked);
    const temp = dataSource.map((item) => {
      if (item.id === id) {
        item.completed = checked;
      }
      return item;
    });
    setDataSource(temp);
  };
  return (
    <div className="container">
      <h1>Todo Application</h1>
      <div className="row ">
        <div className="col-6">
          <h4>Pending Todo</h4>
          <hr />
          <TodoList
            list={dataSource.filter((item) => item.completed === false)}
            handleChange={handleChange}
          />
        </div>
        <div className="col-6">
          <h4>Completed History</h4>
          <hr />
          <TodoList
            list={dataSource.filter((item) => item.completed === true)}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
