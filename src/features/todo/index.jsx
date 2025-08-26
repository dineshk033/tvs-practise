import { useReducer, useRef, useState } from "react";
import TodoList from "./todo-list";
import { TODO_INITIALSTATE, todoReducer } from "./todo-reducer";
import useFilterTodo from "./useFilterTodo";
import useTodoAction from "./useTodoAction";

export default function TodoApp() {
  const [toggle, setToggle] = useState(false);
  const [state, dispatch] = useReducer(todoReducer, TODO_INITIALSTATE);
  const [pending, completed] = useFilterTodo(state);
  const [addTask, removeTask, toggleTask] = useTodoAction(dispatch);
  const inputRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    addTask(inputRef.current.value);
    // dispatch({ type: "ADD_TODO", payload: inputRef.current.value });
    inputRef.current.value = "";
  };
  // console.log(pending);
  return (
    <div className="container">
      <h1>Todo Application</h1>
      <div className="row ">
        <button
          className="btn btn-info mb-4"
          onClick={() => setToggle((prev) => !prev)}
        >
          Refresh or re render
        </button>
        <form className="col-12 d-flex mb-4" onSubmit={handleAdd}>
          <input
            className="form-control"
            ref={inputRef}
            type="text"
            name="task"
          />
          <button
            type="submit"
            style={{ width: "150px" }}
            className="btn btn-success ms-3"
          >
            Add task
          </button>
        </form>
        <div className="col-6">
          <h4>Pending Todo</h4>
          <hr />
          <TodoList
            list={pending}
            handleChange={(id) => toggleTask(id)}
            handleDelete={(id) => removeTask(id)}
          />
        </div>
        <div className="col-6">
          <h4>Completed History</h4>
          <hr />
          <TodoList
            list={completed}
            handleChange={(id) => toggleTask(id)}
            handleDelete={(id) => removeTask(id)}
          />
        </div>
      </div>
    </div>
  );
}
