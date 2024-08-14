import React, { useState } from "react";

const Button = ({onClick , text}) => {
    
  return (
    <button   onClick = {onClick} className="text-white text-lg px-3 py-1 rounded-md bg-red-500 hover:bg-white transition duration-500 ease-in-out hover:border-solid border-2 border-red-500  hover:text-black">
     {text}
    </button >
  );
};

export default Button;
