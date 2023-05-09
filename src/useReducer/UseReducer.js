import { useReducer } from "react";
// The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
// The useReducer Hook returns the current stateand a dispatchmethod.
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
function UseReducer() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
      dispatch({ type: "COMPLETE", id: todo.id });
      console.log(todos);
    };
  
    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
              {console.log(todo.complete)}
            </label>
          </div>
        ))}
      </>
    );
}

export default UseReducer