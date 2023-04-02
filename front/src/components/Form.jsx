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
    if (!errors.username && !errors.password) {
      props.login(userData);
    }
  }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.login(userData);
  // }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
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
      {errors.username && <p>{errors.username}</p>}
      <br />
      <label htmlFor="password"></label>
      <input
        id="password"
        name="password"
        placeholder="Ingrese su contraseña..."
        type="password"
        value={userData.password}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
            {errors.password && <p>{errors.password}</p>}
      <br />
      <button type="submit" onClick={handleSubmit}>Iniciar Sesión</button>
    </div>
  );
}