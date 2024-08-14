import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Single = ({ image, name, description, price, location }) => {
  return (
    <div className="flex items-center justify-center lg:h-full lg:width-full my-2 flex-col">
      <div className=" flex items-start justify-center flex-col p-3 rounded-md w-full lg:w-1/2">
        <div>
          <img className="cover h-auto lg:h-80 m-2" src={image} alt="Bike image" />
        </div>  
        <div className="font-serif text-sm">
          <p className="font-bold m-3">
            Name :{" "}
            <span className="text-gray-500 lg:text-sm text-xs">{name}</span>{" "}
          </p>
          <p className="font-bold m-3">
            Description :{" "}
            <span className="text-gray-500 lg:text-sm text-xs text-">
              {description}
            </span>{" "}
          </p>
          <p className="font-bold m-3">
            Price per day :{" "}
            <span className="text-gray-500 lg:text-sm text-xs">{price}</span>
          </p>
          <p className="font-bold m-3">
            Meeting Location :
            <span className="text-slate-400 lg:text-sm text-xs">
              {location}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          
          <NavLink to="/send-booking-request/101" target="__self"> <Button text={"Send Booking Request "}/></NavLink> 
        </div>
      </div>
    </div>
  );
};

export default Single;
