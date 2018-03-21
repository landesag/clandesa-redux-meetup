import { effects } from "redux-saga";
import todosSaga, { fetchTodos } from "../../sagas/todosSaga";
import { getTodosFromApi } from "../../services/todosService";
import { setTodosFetched } from "../../actions/todoActions";

describe("Sequenced Saga", () => {
  it("should take fetch request", () => {
    const saga = todosSaga();
    let output = null;
    output = saga.next().value;

    let expected = effects.takeEvery("REQUEST_TODOS", fetchTodos);
    expect(output).toEqual(expected);
  });

  it("should take fetch request", () => {
    const saga = fetchTodos();
    let output = null;
    output = saga.next().value;

    expect(output).toEqual(effects.call(getTodosFromApi));

    output = saga.next([
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ]).value;
    expect(output).toEqual(
      effects.put(
        setTodosFetched([
          {
            name:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
          },
          { name: "qui est esse" }
        ])
      )
    );
  });
});
