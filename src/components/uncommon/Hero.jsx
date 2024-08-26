import React, { useContext } from "react";
import Button from "../common/Button";
import { ReactTyped } from "react-typed";
import { FilterContext } from "../FilterContext/FilterContext";

const Hero = () => {
  const { dispatch } = useContext(FilterContext);

  const showModal = () => {
    dispatch({ type: "SHOW_SIGN_UP" });
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 font-serif m-10 h-full">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <ReactTyped
            className="text-3xl sm:text-3xl font-bold text-black-900"
            loop
            backSpeed={80}
            typeSpeed={50}
            strings={[
              "Find Your Dream Bike.",
              "Ride It !",
              "It's easy , fast and secure.",
            ]}
          />
          <p className="text-xl sm:text-xl text-gray-900 mt-2">
            Cross the limits. Without taking care of wallet.
          </p>
          <div className="my-2">
            <Button text={"Get Started"} onClick={showModal} />
          </div>
        </div>
        <div className="lg:w-1/2 lg:mr-8">
          <img
            className="mx-auto lg:mx-0 h-full sm:h-auto"
            src="herobg.png"
            alt="Ride with ease"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
