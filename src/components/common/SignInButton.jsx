import React from "react";

const SignInButton = ({ innerText, icons , onClick  , color , font , hover}) => {
  const icon = `fa-brands fa-${icons}`;
  const cName = `my-3 flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-medium text-${font} bg-${color} border rounded-md shadow-sm hover:bg-${hover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`
  return (
    <div>
      <button className= {cName}>
        <i className={icon}></i>
        <span>{innerText}</span>
      </button>
    </div>
  );
};

export default SignInButton;
