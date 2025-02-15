import { useState } from "react";

const LoginForm = ({ onSubmit, credential }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all details");
      return;
    }

    if (
      credential &&
      formData.email == credential.email &&
      formData.password == credential.password
    ) {
      onSubmit(credential);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "90%", padding: "10px", margin: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "90%", padding: "10px", margin: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
