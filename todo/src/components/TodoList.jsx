import React from "react";
import "../styles/Todo.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <>
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
    </>
  );
}

export default TodoList;
