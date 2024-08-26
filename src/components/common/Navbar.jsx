import React, { useEffect, useState, useContext, useRef } from "react";
import "./Button";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../FilterContext/FilterContext";

const Navbar = () => {

  const { dispatch } = useContext(FilterContext);
  const [ham, setHam] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchBarRef = useRef(null);

  window.addEventListener("scroll", (e) => {
    setScroll(window.scrollY);
  });

  
  const MakePopUpSignUp = (e) => {
    dispatch({ type: "SHOW_SIGN_UP" });
  };

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    if (searchText === "") {
      alert("Please enter search value.");
    } else {
      dispatch({
        type: "UPDATE_SEARCH_TEXT",
        payload: searchText,
      });
    }
  };

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
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-md outline-2 border-slate-500 bg-slate-50 p-3">
                <input
                  type="text"
                  placeholder="Try searching Duke"
                  className="px-3 py-1  border-none focus:outline-none text-lg w-full bg-transparent"
                  onChange={searchHandler}
                  ref={searchBarRef}
                />
                <NavLink to={searchText != "" ? `/search/ ${searchText}` : "/"}>
                  <i
                    onClick={handleSearch}
                    className="fa-solid fa-magnifying-glass text-2xl font-bold cursor-pointer text-slate-300"
                  ></i>
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <NavLink>
                <Button text={"Sign up"} onClick={MakePopUpSignUp} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
