import React, { useContext } from "react";
import { AppContext } from "../App";

const Login = () => {
  const { loggedUser, blogs } = useContext(AppContext);
  return (
    <div>
      <h1>{loggedUser.name}</h1>
    </div>
  );
};

export default Login;
