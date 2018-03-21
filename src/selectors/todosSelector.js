import * as _ from "lodash";
import { createSelector } from "reselect";

const getTodos = state => state.todos.currentTodos;

let getNotEmptyTodos = currentTodos => {
  console.log("Selector llamado");
  return _.filter(currentTodos, todo => {
    if (!_.isEmpty(todo.name)) return todo;
  });
};

export const getVisibleTodos = createSelector([getTodos], getNotEmptyTodos);
