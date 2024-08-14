import React, { useContext } from "react";
import Button from "../common/Button";
import { FilterContext } from "../FilterContext/FilterContext";
import SignInButton from "../common/SignInButton";

const SignUp = (props) => {
  const { dispatch } = useContext(FilterContext);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all ease-out ">
      <div className="min-h-screen flex items-center justify-center lg:w-1/2">
        <div className="bg-white p-6 rounded-3xl shadow-md w-full max-w-md relative">
          <i
            onClick={() => dispatch({ type: "HIDE_MODAL" })}
            className="fa-solid fa-x absolute top-5 right-10 bolder text-red-500 cursor-pointer  text-2xl "
          ></i>
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up </h2>
          <form autoComplete="off" autoFocus>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <h2 className="font-bold my-1">Account Type</h2>
              <input
                type="radio"
                name="account"
                id="owner"
                className="mx-2"
                value={"owner"}
              />
              <label
                className="text-gray-700 text-sm  mb-2"
                htmlFor="owner"
              >
                Owner
              </label>
              <br />
              <input
                type="radio"
                name="account"
                id="rentee"
                className="mx-2"
                value={"rentee "}
              />
              <label
                className="text-gray-700 text-sm  mb-2"
                htmlFor="rentee"
              >
                Rentee
              </label>
            </div>

           <SignInButton innerText={"Sign up with Google"} icons = {"google"}/>
           <SignInButton innerText={"Sign up with Facebook"} icons = {"facebook"}/>
           <SignInButton innerText={"Create an Account"} color = {"red-500"} font = {"white"} hover={"red-300"}/>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
