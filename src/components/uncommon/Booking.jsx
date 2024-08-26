import React, { useState } from "react";
import SignInButton from "../common/SignInButton";

const Booking = (props) => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    phoneNum: "",
    yourRate: "",
    location: "",
    rentDuration: "",
    address: "",
  });

  const clickHandler = (e) => {
    e.preventDefault();
    alert(formDetails);
  };

  const handleFormChange = (e) => {
    setFormDetails((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
  };

  const showAlert  = (e)=>{
    e.preventDefault() ;
    alert("This optin will be available soon! : ) ")
  }
  return (
    <div className="lg:h-screen md:h-screen h-auto p-5 bg-slate-100 lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center">
      <div className="bg-white h-auto rounded-md p-4 lg:w-1/2 md:w-auto">
        <h1 className="font-bold my-3 text-2xl text-center font-serif">
          Enter your details
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center justify-around md:flex-row md:items-center md:justify-around">
          <img
            className="mb-10 h-96 lg:mx-8 shadow-md md:mx-4"
            src="https://i.pinimg.com/736x/fd/45/d4/fd45d48875aad7e556f8fb23b19d9eed.jpg"
            alt="heor section"
          />
          <form autoComplete="off" onSubmit={showAlert}>
            <label htmlFor="name" className="text-xl mt-4">
              Full Name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              className="my-2 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formDetails.name}
              onChange={handleFormChange}
            />

            <label htmlFor="phoneNumber" className="text-xl">
              Phone Number
            </label>
            <input
              required
              id="phoneNum"
              name="phoneNum"
              type="number"
              className="my-2 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formDetails.phoneNum}
              onChange={handleFormChange}
              maxLength={10}
            />

            <label htmlFor="phoneNumber" className="text-xl">
              Photo (Your actual photo)
            </label>
            <input
              required
              id="photo"
              name="photo"
              type="file"
              className="my-2 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formDetails.photo}
              onChange={handleFormChange}
              maxLength={10}
            />

            <label htmlFor="address" className="text-xl mt-4">
              Address
            </label>
            <input
              required
              id="address"
              name="address"
              type="text"
              className="my-2 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formDetails.address}
              onChange={handleFormChange}
            />

            <label htmlFor="yourRate" className="text-xl">
              Rate (Your prefered Per Day)
            </label>
            <input
              required
              id=" yourRate"
              name="yourRate"
              type="number"
              className="my-2 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formDetails.yourRate}
              onChange={handleFormChange}
            />

            <label htmlFor="location" className="text-xl">
              Meeting Location{" "}
              <span className="text-sm"> (Specify your nearest location)</span>
            </label>
            <br />
            <select
              required
              className="focus:outline-none focus:shadow-outline my-3 text-xl h-auto w-full p-2 border rounded-lg "
              name="location"
              id="location"
            >
              <option
                className="m-3 text-xl h-32 p-3 rounded-md"
                value="Maharajgung"
              >
                Maharajgunj
              </option>
              <option
                className="m-3 text-xl h-32 p-3 rounded-md"
                value="Gaushala"
              >
                Gaushala
              </option>
              <option
                className="m-3 text-xl h-32 p-3 rounded-md"
                value="Chabahil"
              >
                Chabahil
              </option>
            </select>

            <label htmlFor="rentDuration" className="text-xl">
              Renting Duration <span className="text-sm">(In days)</span>
            </label>
            <input
              required
              id=" rentDuration"
              name="rentDuration"
              type="text"
              className="my-2 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formDetails.rentDuration}
              onChange={handleFormChange}
            />

            <SignInButton
              type="submit"
              onClick={clickHandler}
              innerText={"Send Booking Request"}
              color={"red-500"}
              font={"white"}
              hover={"red-300"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
