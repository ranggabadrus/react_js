import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState("");

  return (
    <div className="center">
      <div className="">
        <div>{data}</div>
        <div>Home</div>
      </div>
      <input
        type="email"
        onChange={(e) => {
          console.log("e ", e);
          setData(e.target.value);
        }}
        value={data}
        placeholder="Email"
      />
      <button>Button Submit</button>
      <div className="button">Div Submit</div>
    </div>
  );
}
