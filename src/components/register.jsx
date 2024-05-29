import React from "react";
import Input from "./input";

function Register() {
  return (
    <form className="form">
      <Input type="Username" placeholder="Username" />
      <Input type="Username" placeholder="Password" />
      <Input type="Username" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}
export default Register;
