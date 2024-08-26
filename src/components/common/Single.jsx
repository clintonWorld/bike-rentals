import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Single = ({ name, description, price, location, picture }) => {
  return (
    <div className="flex items-center justify-center lg:h-full lg:width-full my-2 flex-col">
      <div className=" flex items-start justify-center flex-col p-3 rounded-md w-full lg:w-1/2">
        <div>
          <img
            className="cover h-auto lg:h-80 m-2"
            src={picture}
            alt="Bike image"
          />
        </div>
        <div className="font-serif text-sm">
          <p className="font-bold m-3 text-xl">
            Name :{" "}
            <span className="text-gray-900  text-lg font-light">
              {name}
            </span>{" "}
          </p>
          <p className="font-bold m-3 text-xl ">
            Description :{" "}
            <span className="text-gray-900  text-lg font-light">
              {description}
            </span>{" "}
          </p>
          <p className="font-bold m-3 text-xl">
            Price per day :{" "}
            <span className="text-gray-900  text-lg font-light">
              {price}
            </span>
          </p>
          <p className="font-bold m-3 text-xl">
            Meeting Location :
            <span className="text-slate-900  text-lg font-light">
              {location}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <NavLink to="/send-booking-request/101">
            {" "}
            <Button text={"Send Booking Request "} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Single;
