import { useState } from "react";
import "./App.css";
import UserName from "./components/UserName";
import UserInfo from "./components/UserInfo";

function App() {
  // const [name, setName] = useState("Arti");

  // const handleName = () => {
  //   setName("Singh");
  // };

  // const userData = [
  //   { name: "Arti", qualification: "Btech" },
  //   { name: "Singh", qualification: "Btech" },
  //   { name: "Chaudhary", qualification: "Btech" },
  // ];

  return (
    <>
      <UserInfo name="dfuo;ghu" />

      {/* <UserName name={name} />
      <button onClick={handleName}>Change Name</button> */}
      {/* {userData.map((data, index) => (
        <UserName name={data.name} qualification={data.qualification} />
      ))} */}

      {/* <ToDoApp /> */}
    </>
  );
}

export default App;
