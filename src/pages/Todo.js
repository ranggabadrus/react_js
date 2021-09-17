import React from "react";

export default function Todo(props) {
  const { todo, handleHapus } = props;
  return (
    <div>
      {todo.map((e, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "400px",
            }}
          >
            <div>{e}</div>
            <button onClick={() => handleHapus(e)}>hapus</button>
            <button>edit</button>
          </div>
        );
      })}
    </div>
  );
}
