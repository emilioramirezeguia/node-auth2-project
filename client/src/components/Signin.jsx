import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Signin = (props) => {
  const initialUser = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialUser);

  const handleChanges = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/auth/login", user)
      .then((response) => {
        console.log(response);
        // localStorage.setItem("token", response.data.payload);
        // props.history.push("/users");
      })
      .catch((error) => {
        console.log(error);
      });
    setUser(initialUser);
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the Users route
  return (
    <>
      <h1>Login</h1>
      <p>Please login to continue</p>
      <form onSubmit={loginUser}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={user.username}
          onChange={handleChanges}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="text"
          value={user.password}
          onChange={handleChanges}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Signin;
