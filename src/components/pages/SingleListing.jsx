import React, { useContext } from "react";
import Navbar from "../common/Navbar";
import Single from "../common/Single";
import { bikes } from "../../dummyData";
import { useParams } from "react-router-dom";
import { FilterContext } from "../FilterContext/FilterContext";
import RevealOnScroll from "../animation/RevealOnScroll";

const SingleListing = (props) => {
  const { id } = useParams();
  const { updatedArray } = useContext(FilterContext);

  return (
    <div>
      <Navbar />
      <RevealOnScroll>
        {updatedArray.length > 0 ? (
          <Single
            name={updatedArray[id].title}
            description={updatedArray[id].description}
            price={updatedArray[id].price}
            location={updatedArray[id].location}
            photo={updatedArray[id].imageURL}
          />
        ) : (
          <Single
            name={bikes[id].title}
            description={bikes[id].description}
            price={bikes[id].price}
            location={bikes[id].location}
            photo={bikes[id].imageURL}
          />
        )}
      </RevealOnScroll>
    </div>
  );
};

export default SingleListing;
