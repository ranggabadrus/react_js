import { Button } from "@mui/material";
import { useState } from "react";
import "./Home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";

export default function Home() {
  const [data, setData] = useState("");

  let location = useLocation();

  console.log("params ", location);

  return (
    <div className="">
      <div
        className="text-red-500 lg:text-blue-500"
        style={{
          backgroundColor: "yellow",
        }}
      >
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
      <Button color="error" variant="contained">
        Contained
      </Button>
      <div
        className="bg-yellow-500 px-13 py-5 my-12 rounded-3xl hover:bg-blue-500 hover:text-red-500
      cursor-move"
      >
        CONTAINED
      </div>
    </div>
  );
}
