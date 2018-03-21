import React from "react";
import { connect } from "react-redux";
import Divider from "material-ui-next/Divider";
import { CircularProgress } from "material-ui-next/Progress";

import TodoList from "../TodoList";
import TodoInput from "../TodoInput";
import ErrorBoundary from "../ErrorBoundary";

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodoName) {
    this.props.addTodo(newTodoName);
  }
  render() {
    if (this.props.fetching) {
      return <CircularProgress />;
    }
    return (
      <div>
        <ErrorBoundary>
          <TodoList />
        </ErrorBoundary>
        <Divider style={{ marginTop: "20px", marginBottom: "10px" }} />
        <TodoInput />
        <Divider style={{ marginTop: "30px" }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.todos.fetching
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
