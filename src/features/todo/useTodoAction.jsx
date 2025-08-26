function useTodoAction(dispatch) {
  ///create an action creator
  const addTask = (id) => dispatch({ type: "ADD_TODO", payload: id });
  const removeTask = (id) => dispatch({ type: "REMOVE_TODO", payload: id });
  const toggeTask = (id) => dispatch({ type: "TOGGLE_TASK", payload: id });
  return [addTask, removeTask, toggeTask];
}

export default useTodoAction;
