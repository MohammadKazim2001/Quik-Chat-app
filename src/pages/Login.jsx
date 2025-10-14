import React, { useState } from "react";
import assets from "../assets/assets";

function Login() {
  const [currState, setCurrState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmited, setIsDataSubmited] = useState(true);

  return (
    <div className="min-h-screen bg-cover flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/* left side  */}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />
      {/* right side  */}
      <form className="border-2 bg-fwhite/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          <img src={assets.arrow_icon} alt="" className="w-5 cursor-pointer" />
        </h2>

        {currState === "Sign Up" && isDataSubmited && (
          <>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Password"
              required
            />
          </>
        )}

        {!isDataSubmited && (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Password"
              required
            />
          </>
        )}

        {currState === "Sign Up" && isDataSubmited && (
          <textarea
            name=""
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="provide a short bio..."
            required
          ></textarea>
        )}

        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
        >
          {currState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        {/* {currState === "Sign Up" && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy</p>
          </div>
        )} */}

        <div className="flex flex-col gap-2">
          {currState === "Sign Up" ? (
            <p
              onClick={() => {
                setCurrState("Login");
                setIsDataSubmited(false);
              }}
              className="text-sm text-gray-600"
            >
              Already have an account?
              <span className="font-medium text-violet-500 cursor-pointer">
                Login
              </span>
            </p>
          ) : (
            <p
              onClick={() => {
                setCurrState("Sign Up");
                setIsDataSubmited(true);
              }}
              className="text-sm text-gray-600"
            >
              Create an account
              <span className="font-medium text-violet-500 cursor-pointer">
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
