import React, { useContext } from "react";
import Button from "./Button";
import { FilterContext } from "../FilterContext/FilterContext";

const Earn = ({ title, description, image }) => {
  const { dispatch } = useContext(FilterContext);

  const showModal = () => {
    dispatch({ type: "SHOW_SIGN_UP" });
  };
  return (
    <div className="w-full font-serif">
      <div className="p-4 text-center">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <div className="w-full flex items-center justify-center">
          <p className="text-xl mb-4 text-left w-[90%] sm:w-6/12">{description}</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <img src={image} alt="placeholder" className="h-96" />
        </div>
        <Button text={"Start Earning"} onClick={showModal}/>
      </div>
    </div>
  );
};

export default Earn;
