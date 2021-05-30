const todos = (state = [], action) => {
  let newTodos;

  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          deleted: false,
        },
      ];

    case "DELETE_TODO":
      newTodos = [...state];
      newTodos = newTodos.map((todo) =>
        todo.id === action.id ? { ...todo, deleted: !todo.deleted } : todo
      );
      return newTodos;

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
