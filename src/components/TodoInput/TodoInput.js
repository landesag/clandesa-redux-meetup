import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "material-ui-next/TextField";
import Button from "material-ui-next/Button";
import { bindActionCreators } from "redux";
import { addTodo, requestTodos } from "../../actions/todoActions";
import axios from "axios";

export class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.setNewTodoText = this.setNewTodoText.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.getTodo = this.getTodo.bind(this);
  }
  state = {
    newTodoText: ""
  };
  setNewTodoText(event) {
    this.setState({
      newTodoText: event.target.value
    });
  }
  addTodo() {
    this.props.addTodo(this.state.newTodoText);

    this.setState({
      newTodoText: ""
    });
  }
  async getTodo() {
    const todosFromApi = (await axios(
      "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=1"
    )).data;
    this.props.addTodo(todosFromApi[0].title);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <TextField
          type="text"
          label="New TODO text"
          style={{
            marginBottom: "20px",
            width: "300px",
            alignSelf: "center"
          }}
          value={this.state.newTodoText}
          onChange={this.setNewTodoText}
        />
        <Button
          style={{
            width: "300px",
            alignSelf: "center"
          }}
          variant="raised"
          color="primary"
          onClick={this.addTodo}
        >
          Add TODO
        </Button>
        <Button
          style={{
            width: "300px",
            marginTop: "20px",
            alignSelf: "center"
          }}
          variant="raised"
          color="primary"
          onClick={this.getTodo}
        >
          Get TODO
        </Button>
        <Button
          style={{
            width: "300px",
            marginTop: "20px",
            alignSelf: "center"
          }}
          variant="raised"
          color="primary"
          onClick={this.props.requestTodos}
        >
          Get SAMPLE TODOS
        </Button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  requestTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  requestTodos: bindActionCreators(requestTodos, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
