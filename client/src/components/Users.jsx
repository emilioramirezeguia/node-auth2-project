import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Users = (props) => {
  const [users, setUser] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the Login route
  return (
    <>
      <h1>Users</h1>
    </>
  );
};

export default Users;
