import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Booking from "../uncommon/Booking";


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
