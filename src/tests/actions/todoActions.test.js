import * as actions from "../../actions/todoActions";

describe("actions", () => {
  it("Create an action to add a todo given the name", () => {
    const newTodoName = "Finish docs";
    const expectedAction = {
      type: "ADD_TODO",
      newTodoName
    };
    expect(actions.addTodo(newTodoName)).toEqual(expectedAction);
  });

  it("Create an action to set the array of todos requested as the current todos", () => {
    const todos = [];
    const expectedAction = {
      type: "SET_TODOS_FETCHED",
      todos
    };
    expect(actions.setTodosFetched(todos)).toEqual(expectedAction);
  });

  it("Create an action to state that the request for todos has begun", () => {
    const expectedAction = {
      type: "REQUEST_TODOS"
    };
    expect(actions.requestTodos()).toEqual(expectedAction);
  });

  it("Create an action to state that the request for todos has failed", () => {
    const expectedAction = {
      type: "FAILED_TODOS_REQUEST"
    };
    expect(actions.failedTodosRequest()).toEqual(expectedAction);
  });
});
