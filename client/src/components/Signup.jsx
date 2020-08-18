import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Signup = (props) => {
  const initialUser = {
    username: "",
    password: "",
    department: "",
  };
  const [user, setUser] = useState(initialUser);

  const handleChanges = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/auth/register", user)
      .then((response) => {
        console.log(response);
        // props.history.push("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setUser(initialUser);
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the Login route
  return (
    <>
      <h1>Register</h1>
      <p>Please register to continue</p>
      <form onSubmit={registerUser}>
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
        <label htmlFor="department">Department:</label>
        <input
          id="department"
          name="department"
          type="text"
          value={user.department}
          onChange={handleChanges}
        />
        <button>Sign up</button>
      </form>
    </>
  );
};

export default Signup;
