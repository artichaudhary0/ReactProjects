import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const FormController = () => {
  const [isLogin, setisLogin] = useState(true);
  const [credentails, setCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    if (isLogin) {
      setUserData(data);
    } else {
      setCredentials({ email: data.email, password: data.password });
      setisLogin(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      {userData ? (
        <div>
          <h2>Welcome {userData.email}</h2>
        </div>
      ) : isLogin ? (
        <LoginForm
          onSubmit={handleFormSubmit}
          credential={credentails || { email: "", password: "" }}
        />
      ) : (
        <SignupForm onSubmit={handleFormSubmit} />
      )}

      {!userData && (
        <button
          style={{
            marginTop: "20px",
            textDecoration: "underline",
            background: "none",
            border: "none",
          }}
          onClick={() => setisLogin(!isLogin)}
        >
          Switch to {isLogin ? "Signup" : "Login"}
        </button>
      )}
    </div>
  );
};

export default FormController;
