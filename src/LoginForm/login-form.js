import React, { useState } from "react";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function getTypeValue(event) {
    // console.log("userName", event.target.value);
    setUserName(event.target.value);
  }
  function getTypepassword(event) {
    // console.log("password", event.target.value);
    setPassword(event.target.value);
  }
  function submitClick() {
    console.log("User Name: ", userName);
    console.log("Password: ", password);
  }

  return (
    <>
      <div className="border w-25 mt-5 m-auto p-3 ">
        <h2 className="text-black text-center fst-italic">Instagram</h2> <br></br>
        <div className="mt-3">
          <labal> Phone Number, User Name, or email</labal>
          <br></br>
          <input type="text" className="w-100 border border-secondary-subtle rounded-1 " onChange={getTypeValue} />
          <br></br>
        </div>
        <div className="mt-3 ">
          <label> Password </label>
          <br></br>
          <input type="password" className="w-100 border border-secondary-subtle rounded-1"  onChange={getTypepassword} />
          <br></br>
        </div>
        <div className="mt-3">
          <button onClick={submitClick} className="btn btn-primary w-100  ">
            {" "}
            Log in{" "}
          </button>
          <br></br>
          </div>
          <p className="text-black text-center font-monospace pt-4"> Forgot password?</p>
       
      </div>

      <div className="border w-25 mt-3 m-auto p-3 ">
        <p className="text-center fw-bold"> Don't have an account? <span className="text-primary "> Sign up </span></p>
      </div>

      <div className=" w-25 mt-3 m-auto p-3">
        <h1> Behind work </h1>
        <h2>  User Name : {userName}</h2>
        <h3> Password : {password} </h3>
      </div>
    </>
  );
}
export default LoginForm;
