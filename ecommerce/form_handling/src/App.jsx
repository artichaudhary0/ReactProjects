import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import FormController from "./components/FormController";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormController />
    </>
  );
}

export default App;
