import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../FilterContext/FilterContext";

const Filter = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [all, setAll] = useState("");

  const { dispatch } = useContext(FilterContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAllChange = (e) => {
    setAll(e.target.value);
    setPrice("");
    dispatch({ type: "UPDATE_PRICE", payload: "" });
    setLocation("");
    dispatch({ type: "UPDATE_LOCATION", payload: "" });
  };

  const changeHandler = (e) => {
    setAll("");
    setPrice(e.target.value);
    dispatch({ type: "UPDATE_PRICE", payload: e.target.value });
  };

  const handleChange = (e) => {
    setAll("");
    setLocation(e.target.value);
    dispatch({ type: "UPDATE_LOCATION", payload: e.target.value });
  };

  return (
    <>
      <div
        className={`font-serif fixed inset-y-0  left-0 bg-white lg:bg-inherit w-50 lg:h-80 lg:w-80 p-4 lg:mt-32 lg:ml-10 overflow-y-auto transform ${
          isMobile && !showFilters ? "-translate-x-full" : "translate-x-0"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div>
          <form action="">
            <div>
              <input
                type="radio"
                id="all"
                name="all"
                value={"all"}
                checked={all === "all"}
                onChange={handleAllChange}
              />
              <label className="text-xl" htmlFor="all">
                All
              </label>
              <h1 className="text-xl my-1">Price </h1>
              <input
                className="mx-2"
                type="radio"
                id="5000"
                name="price"
                value={"5000"}
                checked={price === "5000"}
                onChange={changeHandler}
              />
              <label htmlFor="5000" className="text-xl">
                5000 - 10000
              </label>
              <br />
              <input
                className="mx-2"
                type="radio"
                id="10000"
                name="price"
                value={"10000"}
                checked={price === "10000"}
                onChange={changeHandler}
              />
              <label htmlFor="10000" className="text-xl">
                10000-20000
              </label>
              <br />
              <input
                className="mx-2"
                type="radio"
                id="20000"
                name="price"
                value={"20000"}
                checked={price === "20000"}
                onChange={changeHandler}
              />
              <label htmlFor="20000" className="text-xl">
                20000-30000
              </label>
              <br />
              <input
                className="mx-2"
                type="radio"
                id="30000"
                name="price"
                value={"30000"}
                checked={price === "30000"}
                onChange={changeHandler}
              />
              <label htmlFor="30000" className="text-xl">
                30000-40000
              </label>
            </div>

            <div>
              <h1 className="text-xl my-2 ">Location</h1>
              <input
                type="radio"
                name="location"
                id="kathmandu"
                className="mx-2"
                value={"kathmandu"}
                checked={location === "kathmandu"}
                onChange={handleChange}
              />
              <label className="text-xl" htmlFor="kathmandu">
                Kathmandu
              </label>
              <br />
              <input
                type="radio"
                name="location"
                id="pokhara"
                className="mx-2"
                value={"pokhara"}
                checked={location === "pokhara"}
                onChange={handleChange}
              />
              <label className="text-xl" htmlFor="pokhara">
                Pokhara
              </label>
              <br />
              <input
                type="radio"
                name="location"
                id="itahari"
                className="mx-2"
                value={"itahari"}
                checked={location === "itahari"}
                onChange={handleChange}
              />
              <label className="text-xl" htmlFor="itahari">
                Itahari
              </label>
              <br />
              <input
                type="radio"
                name="location"
                id="lalitpur"
                className="mx-2"
                checked={location === "lalitpur"}
                value={"lalitpur"}
                onChange={handleChange}
              />

              <label className="text-xl" htmlFor="lalitpur">
                Lalitpur
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 ml-1/4 lg:ml-1/3 p-4">
        {isMobile && (
          <button
            className="fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded z-30"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="fa-solid fa-sliders"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default Filter;
