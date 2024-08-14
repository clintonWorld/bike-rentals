import React, { useContext, useEffect, useState } from "react";
import ListingCard from "../common/ListingCard";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { bikes } from "../../dummyData";
import RevealOnScroll from "../animation/RevealOnScroll";
import Filter from "../common/Filter";
import { FilterContext } from "../FilterContext/FilterContext";
import BikesNotFound from "../common/BikesNotFound";

const Listings = (props) => {
  const { price, location , dispatch } = useContext(FilterContext);
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const newArray = bikes.filter((val) => {
      let expression = price * 2;
      let lowerVal = val.location.toLowerCase();
      let stateLocation = location.toLowerCase();

      if (price == "" && location == "") {
        return true;
      } else if (price != "" && location != "") {
        return (
          val.price >= price &&
          val.price <= expression &&
          lowerVal === stateLocation
        );
      } else {
        return (
          (val.price >= price && val.price <= expression) ||
          lowerVal === stateLocation
        );
      }
    });

    setNewArray(newArray);
    dispatch({type:"ADD_ARRAY" , payload:newArray})
  }, [price, location]);

  const changeTheLocation = (id) => {
    window.location.replace();
  };

  return (
    <div>
      <Navbar />
      <RevealOnScroll>
        <Filter />

        {newArray.length > 0 ? (
          newArray.map((val, index) => {
            return (
              <ListingCard
                onClick={changeTheLocation}
                className="my-3"
                key={index}
                image={val.imageUrl}
                title={val.title}
                description={val.description}
                price={val.price}
                location={val.location}
                id={index}
              />
            );
          })
        ) : (
          <BikesNotFound />
        )}
      </RevealOnScroll>
      <Footer />
    </div>
  );
};

export default Listings;
