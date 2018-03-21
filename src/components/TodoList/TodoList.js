import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Paper from "material-ui-next/Paper";
import Typography from "material-ui-next/Typography";
import * as _ from "lodash";
import { getVisibleTodos } from "../../selectors/todosSelector";

import Todo from "../Todo";

class TodoList extends React.Component {
  render() {
    let todos = this.props.todos;
    if (_.isEmpty(todos)) {
      return (
        <Paper style={{ padding: "10px", textAlign: "center" }} elevation={4}>
          <Typography variant="headline" gutterBottom>
            NO TODOS
          </Typography>
        </Paper>
      );
    }
    const todosItems = todos.map((todo, i) => <Todo key={i} todo={todo} />);
    return <div>{todosItems}</div>;
  }
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.currentTodos)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
