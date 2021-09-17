import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function About() {
  const [todo, setTodo] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((e) => e.json())
      .then((e) => {
        const newArray = e.movies.map((e) => e.title);
        setTodo(newArray);
      });
  }, []);

  const handleSubmit = () => {
    const copyTodo = [...todo];
    setTodo([userInput, ...copyTodo]);
  };

  const handleHapus = (e) => {
    const copyTodo = [...todo];
    const deleteTodo = copyTodo.filter((x) => x !== e);
    setTodo(deleteTodo);
  };

  return (
    <div className="flex">
      <div style={{ fontSize: "50px", fontWeight: "bold" }}>Todo App</div>
      <input
        placeholder="Todo"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div
        style={{
          backgroundImage: "linear-gradient(red, yellow)",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <Todo todo={todo} handleHapus={(e) => handleHapus(e)} />
      </div>
    </div>
  );
}
