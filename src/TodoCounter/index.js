import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <>
      {completedTodos === totalTodos ? (
        <h1>Terminaste todas tus tareas 🎉</h1>
      ) : (
        <h1>
          Haz completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODOS
        </h1>
      )}
    </>
  );
}

export { TodoCounter };
