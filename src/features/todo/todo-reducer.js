import { TODOLIST } from "../../mock/todo";

export const TODO_INITIALSTATE = TODOLIST.filter((item) => item.userId === 13);
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const temp = { id: Date.now(), todo: action.payload, completed: false };
      return [...state, temp];
    }
    case "TOGGLE_TASK":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    case "REMOVE_TODO":
      console.log(action.payload);
      return state.filter((item) => item.id != action.payload);
    default:
      return state;
  }
};
