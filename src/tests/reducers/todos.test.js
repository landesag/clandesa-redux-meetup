import reducer from "../../reducers/todos";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      currentTodos: [],
      fetching: false,
      requestFailed: false
    });
  });
  it("should add a todo to the currentTodos with ADD_TODO", () => {
    expect(
      reducer(
        {
          currentTodos: [],
          fetching: false,
          requestFailed: false
        },
        {
          type: "ADD_TODO",
          newTodoName: "Hola mundo!"
        }
      )
    ).toEqual({
      currentTodos: [
        {
          name: "Hola mundo!"
        }
      ],
      fetching: false,
      requestFailed: false
    });
  });
  it("should set the todos with SET_TODOS_FETCHED", () => {
    expect(
      reducer(
        {
          currentTodos: [],
          fetching: true,
          requestFailed: false
        },
        {
          type: "SET_TODOS_FETCHED",
          todos: [{ name: "Hola mundo!" }]
        }
      )
    ).toEqual({
      currentTodos: [{ name: "Hola mundo!" }],
      fetching: false,
      requestFailed: false
    });
  });
  it("should change fetching to true with REQUEST_TODOS", () => {
    expect(
      reducer(
        {
          currentTodos: [],
          fetching: false,
          requestFailed: false
        },
        {
          type: "REQUEST_TODOS"
        }
      )
    ).toEqual({
      currentTodos: [],
      fetching: true,
      requestFailed: false
    });
  });
  it("should change fetching to false and requestFailed to true with FAILED_TODOS_REQUEST", () => {
    expect(
      reducer(
        {
          currentTodos: [],
          fetching: true,
          requestFailed: false
        },
        {
          type: "FAILED_TODOS_REQUEST"
        }
      )
    ).toEqual({
      currentTodos: [],
      fetching: false,
      requestFailed: true
    });
  });
});
