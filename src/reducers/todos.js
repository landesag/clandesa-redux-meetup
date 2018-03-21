const initialState = {
  currentTodos: [],
  fetching: false,
  requestFailed: false
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        currentTodos: [...state.currentTodos, { name: action.newTodoName }]
      };
    case "REQUEST_TODOS":
      return {
        ...state,
        fetching: true
      };
    case "SET_TODOS_FETCHED":
      return {
        currentTodos: action.todos,
        fetching: false,
        requestFailed: false
      };
    case "FAILED_TODOS_REQUEST":
      return {
        ...state,
        requestFailed: true,
        fetching: false
      };
    default:
      return state;
  }
};

export default todos;
