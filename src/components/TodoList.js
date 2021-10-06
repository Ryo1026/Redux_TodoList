import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
