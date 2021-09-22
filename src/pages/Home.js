import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./Home.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getName, getUser } from "../redux/action/user";

export default function Home() {
  const [data, setData] = useState("");
  const navigation = useHistory();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {}, []);

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
      {user}
      <div
        className="bg-yellow-500 px-13 py-5 my-12 rounded-3xl hover:bg-blue-500 hover:text-red-500 cursor-move"
        onClick={async () => {
          // dispatch(getUser("eko"));
          let name = await dispatch(getName());
          console.log("response ", name);
          if (name.data === "Star Wars") {
            alert("Correct " + name.data);
          } else {
            alert("wrong name");
          }
        }}
      >
        About
      </div>
    </div>
  );
}
