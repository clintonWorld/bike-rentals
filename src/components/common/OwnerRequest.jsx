import React from "react";
import SignInButton from "./SignInButton";

const OwnerRequest = ({
  fullName,
  contact,
  image,
  rentD,
  rentR,
  location,
  address,
}) => {
  return (
    <div className=" text-black flex items-center justify-center my-2">
      <div className="bg-white md:w-1/2 lg:w-96 m-5 rounded-md shadow-lg md:flex md:flex-col items-center">
        <h1 className="text-3xl font-extrabold  text-center mb-4">
          Proposal
        </h1>
        <div className="m-3 ">
          <span className="text-md font-bold ">Full Name : </span>{" "}
          <span className="font-medium text-md ">{fullName} </span>
        </div>

        <div className="m-3">
          <span className="text-md font-bold ">Contact : </span>{" "}
          <span className="font-medium text-md ">{contact}</span>
        </div>

        <div className="m-3">
          <span className="text-md font-bold ">Photo : </span>{" "}
          <img
            src={image}
            className="font-medium text-md  h-32 inline"
            alt="Profile of this person"
          />
        </div>

        <div className="m-3">
          <span className="text-md font-bold ">Address : </span>{" "}
          <span className="font-medium text-md ">{address}</span>
        </div>

        <div className="m-3">
          <span className="text-md font-bold ">Proposed Rate : </span>{" "}
          <span className="font-medium text-md ">Rs. {rentR}</span>
        </div>

        <div className="m-3">
          <span className="text-md font-bold ">
            Renting Duration :{" "}
          </span>{" "}
          <span className="font-medium text-md ">{rentD} days</span>
        </div>

        <div className="m-3">
          <span className="text-md font-bold ">
            Meeting Location :{" "}
          </span>{" "}
          <span className="font-medium text-md ">{location}</span>
        </div>

        <div className="m-3 ">
          <SignInButton
            innerText={"Accept proposal"}
            color={"blue-500"}
            font={"white"}
          />
          <SignInButton
            innerText={"Decline proposal"}
            color={"red-500"}
            font={"white"}
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerRequest;
