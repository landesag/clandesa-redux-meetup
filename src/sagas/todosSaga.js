import { effects } from "redux-saga";
import { getTodosFromApi } from "../services/todosService";
import * as todoActions from "../actions/todoActions";

export function* fetchTodos(action) {
  try {
    const todosFromApi = yield effects.call(getTodosFromApi);
    const todos = todosFromApi.map(todoFromApi => {
      return { name: todoFromApi.title };
    });
    yield effects.put(todoActions.setTodosFetched(todos));
  } catch (e) {
    yield effects.put(todoActions.failedTodosRequest());
  }
}

function* todosSaga() {
  yield effects.takeEvery("REQUEST_TODOS", fetchTodos);
}

export default todosSaga;
