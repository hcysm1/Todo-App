import { connect } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../store/actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../store/actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos.filter((t) => !t.deleted);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed && !t.deleted);
    case VisibilityFilters.SHOW_PENDING:
      return todos.filter((t) => !t.completed && !t.deleted);
    case VisibilityFilters.SHOW_DELETED:
      return todos.filter((t) => t.deleted);
    default:
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  editTodo: (id) => dispatch(editTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
