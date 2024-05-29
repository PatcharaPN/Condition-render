import React from "react";
import Form from "./Form";
import Register from "./register";
import HelloUser from "./isLoggedin";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/* {userIsRegistered ? <HelloUser /> : <Register />} */}
      {userIsRegistered && <Register />}
    </div>
  );
}

export default App;
