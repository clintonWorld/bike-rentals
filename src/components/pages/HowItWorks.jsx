import React, { useEffect } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import "../../app.css";
import SignUp from "../uncommon/SignUp";
import RevealOnScroll from "../animation/RevealOnScroll"

const HowItWorks = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heading = "text-4xl font-serif font-extrabold my-2";
  const list = "list-disc font-medium text-lg font-serif";
  return (
    <div>
      <Navbar />
    
<RevealOnScroll>

      <div className="p-6 w-full lg:w-full lg:flex lg:flex-col lg:justify-center items-center">
        <div className="lg:w-6/12"> 
          <div className="my-5">
            <h2 className={heading}>How the Platform Works for Rentees</h2>
            <ul className={list}>
              <li>
                Rentees (the end-customers of a bike rental platform) search for
                bikes in their specified regions
              </li>
              <li>
                They view the available listings and make a request to rent a
                bike
              </li>
              <li>
                Before booking, the rentees get the option to message the bike
                owner to clear any query(s)
              </li>
              <li>
                Rentees select a delivery method and pay the rental fee to the
                admin of the marketplace
              </li>
              <li>
                Rentees receive the bike and can use it for the rental duration
                as per the terms and conditions of the marketplace and bike
                owner
              </li>
            </ul>
          </div>

          <div>
            <h2 className={heading}>How the Platform Works for Owners</h2>
            <ul className={list}>
              <li>Bike owners sign up and create an account</li>
              <li>They upload detailed listings with images</li>
              <li>
                Rentees searching for bikes send a rental request to the owners
              </li>
              <li>
                Once the bike owner provides the bike to a rentee, the
                marketplace owner deducts his/her commission from the payment
                and transfer the rest to the bike owner as a rental fee
              </li>
              <li>
                The owners have the option to approve/reject any requests
                received.{" "}
              </li>
            </ul>
          </div>
        </div>
      </  div>

</RevealOnScroll>
      <Footer/>
    </div>
    
  );
};

export default HowItWorks;
