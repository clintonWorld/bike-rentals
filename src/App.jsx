import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import HowItWorks from "./components/pages/HowItWorks";
import Listings from "./components/pages/Listings";
import SignUp from "./components/uncommon/SignUp";
import { useContext } from "react";
import { FilterContext } from "./components/FilterContext/FilterContext";
import SingleListing from "./components/pages/SingleListing";
import BookingRequest from "./components/pages/BookingRequest";
import "./index.css";

import Owner from "./components/pages/Owner";
import Search from "./components/pages/Search";

function App() {
  document.title = "Bike Rentals";

  const { modal } = useContext(FilterContext);


  return (
    <>
      {modal && <SignUp />}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/single-listing/:id" element={<SingleListing />} />
          <Route path="/send-booking-request/:bikepostid" element={<BookingRequest />} />
          <Route path="/bike-proposals/:ownerPostId" element={<Owner />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/search/:bikeName" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

