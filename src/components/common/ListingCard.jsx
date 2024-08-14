import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const ListingCard = ({
  image,
  title,
  description,
  price,
  location,
  id,
}) => {
  return (
    <div>
      <div className="my-10 max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl font-serif  ">
        <div className="md:flex w-full">
          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-cover md:w-48"
              src={image}
              alt="Card image"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-smt text-2xl text-black font-semibold">
              {title}
            </div>
            <p className="mt-2 text-gray-500">{description}</p>
            <p className="mt-4 text-xl font-bold text-gray-900">
              Location : <span className="mt-2 text-gray-500">{location}</span>{" "}
            </p>
            <div className="mt-4 text-xl font-bold text-gray-900">
              Rent price : {price}
            </div>
            <div className="my-2">
              <NavLink to={`/single-listing/${id}`}>
                <Button text="View Details" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
