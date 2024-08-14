import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Booking from "../uncommon/Booking";
/*
Name
Address:
Age: 
renting duration
your prefered location
Your Renting rate
Amount you need to pay
check box with terms and conditions
extra qns
*/

const BookingRequest = (props) => {
  return (
    <div>
      <Navbar />
      <Booking />
      <Footer/>
    </div>
  );
};

export default BookingRequest;
