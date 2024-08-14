import React, { useEffect, useState, useContext } from "react";
import "./Button";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../FilterContext/FilterContext";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [stickNav, setStickyNav] = useState(false);
  const [scroll, setScroll] = useState(0);
  const { dispatch } = useContext(FilterContext);
  const [ham, setHam] = useState(false);

  const user = true;
  const accountType = true;

  window.addEventListener("scroll", (e) => {
    setScroll(window.scrollY);
  });

  useEffect(
    (e) => {
      const changeInput = () => {
        if (scroll > 180) {
          setStickyNav(true);
        } else {
          setStickyNav(false);
        }
      };
      changeInput();
    },
    [scroll]
  );

  const MakePopUpSignUp = (e) => {
    dispatch({ type: "SHOW_SIGN_UP" });
  };

  const sNav =
    "bg-slate-100 p-4 shadow-xl font-serif sticky top-0 font-2xl transition-transform duration-300 ease-in-out";
  const hNav =
    "bg-slate-100 p-4 shadow-xl font-serif font-2xl transition-duration-300 ease-in-out";

  return (
    <nav
      className={
        "bg-slate-100 p-3 shadow-xl font-serif sticky top-0 font-2xl transition-transform duration-300 ease-in-out"
      }
    >
      <div className={``}>
        <div
          className={`flex justify-between items-center mx-7  ${
            ham ? "flex flex-col items-start" : "flex-row"
          }`}
        >
          <div className="">
            <h1 className="text-3xl font-sans font-bold">
              Bike
              <span className="text-red-500 text-3xl font-sans font-bold">
                Rentals
              </span>
            </h1>
          </div>

          <div
            className={`relative lg:flex  space-x-4 ${
              ham ? "flex flex-col my-4 mx-0  " : "hidden"
            }`}
          >
            <NavLink
              to="/"
              className="mx-4 text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
            >
              Home
            </NavLink>

            <NavLink
              to="/how-it-works"
              className="text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
            >
              How it Works
            </NavLink>
            <NavLink
              to="/listings"
              className="text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
            >
              Listings
            </NavLink>

            {user && (
              <NavLink
                to="/listings"
                className="text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
              >
                Messages
              </NavLink>
            )}

            {user && (
              <NavLink
                to="/listings"
                className="text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
              >
                Saved Bikes
              </NavLink>
            )}

            {user && accountType && (
              <NavLink
                to="/listings"
                className="text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
              >
                Requests
              </NavLink>
            )}

            {user && accountType && (
              <NavLink
                to="/listings"
                className="text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
              >
                New post
              </NavLink>
            )}

            {user && (
              <NavLink
                to="/listings"
                className="text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
              >
                Sent Requests
              </NavLink>
            )}

            {user && accountType && (
              <NavLink
                to="/listings"
                className="text-black hover:border-b-2 border-red-500 sm:border-b-0 text-xl"
              >
                Your Posts
              </NavLink>
            )}
          </div>

          <div>
            <i
              onClick={() => setHam(true)}
              className={`fa-solid fa-bars text-2xl cursor-pointer lg:hidden absolute right-10 top-4 ${
                ham ? "hidden" : "block"
              } `}
            ></i>
          </div>

          <div>
            <i
              onClick={() => setHam(false)}
              className={`fa-solid fa-xmark text-3xl cursor-pointer lg:hidden absolute right-10 top-4 ${
                ham ? "block" : "hidden"
              }`}
            ></i>
          </div>

          <div
            className={` ${
              ham ? "flex " : "hidden"
            } lg:flex flex-col sm:flex-row items-center sm:justify-end sm:items-center sm:space-x-4`}
          >
            {showInput ? null : (
              <div className="flex flex-col sm:flex-row sm:space-x-2">
                <NavLink
                  href="#login"
                  className="text-black sm:border-b-0 text-xl my-2"
                >
                  <Button text={"Log in"} />
                </NavLink>
              </div>
            )}

            <div className="flex items-center space-x-2">
              {showInput ? (
                <div>
                  <input
                    type="text"
                    placeholder="Search for bikes..."
                    className="px-3 py-1 rounded-l-sm border-none focus:outline-none text-sm w-full"
                  />
                </div>
              ) : null}
              <div>
                <Button
                  text={"Search"}
                  onClick={() => setShowInput(!showInput)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
