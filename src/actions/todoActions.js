export const addTodo = newTodoName => ({
  type: "ADD_TODO",
  newTodoName
});

export const setTodosFetched = todos => ({
  type: "SET_TODOS_FETCHED",
  todos
});

export const requestTodos = () => ({
  type: "REQUEST_TODOS"
});

export const failedTodosRequest = () => ({
  type: "FAILED_TODOS_REQUEST"
});
