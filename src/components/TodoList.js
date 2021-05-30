import React from "react";
import PropTypes from "prop-types";
import Todo from "../components/Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => (
  <ul style={{ paddingLeft: "10px", paddingRight: "10px" }}>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onClickEdit={() => editTodo(todo.id)}
        onClickRemove={() => deleteTodo(todo.id)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
