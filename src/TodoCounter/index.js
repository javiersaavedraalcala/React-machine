import "./TodoCounter.css";

function TodoCounter(props) {
  return (
    <>
      {props.completed === props.total ? (
        <h1>Terminaste todas tus tareas 🎉</h1>
      ) : (
        <h1>
          Haz completado <span>{props.completed}</span> de{" "}
          <span>{props.total}</span> TODOS
        </h1>
      )}
    </>
  );
}

export { TodoCounter };
