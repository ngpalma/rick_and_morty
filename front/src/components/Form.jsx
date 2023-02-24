import React from "react";
import { validation } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login(userData);
  }

  return (
    <div>
      <label htmlFor="username"></label>
      <input
        id="username"
        name="username"
        placeholder="Ingrese su usuario..."
        type="text"
        value={userData.username}
        onChange={handleInputChange}
      />
      <p>{errors.username}</p>
      <br />
      <label htmlFor="password"></label>
      <input
        id="password"
        name="password"
        placeholder="Ingrese su contraseña..."
        type="password"
        value={userData.password}
        onChange={handleInputChange}
      />
      <p>{errors.password}</p>
      <br />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}
