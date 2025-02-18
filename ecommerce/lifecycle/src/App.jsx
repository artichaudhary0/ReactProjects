import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFetch from "../components/DataFetch";

/*
  useEffect : 
*/

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("v,kriyvgteryi");
  //   }, 3000);
  // }, []); // load

  // useEffect(() => {
  //   alert(count + 1);
  // }, [count]);

  return (
    <>
      <DataFetch />
    </>
  );
}

export default App;
