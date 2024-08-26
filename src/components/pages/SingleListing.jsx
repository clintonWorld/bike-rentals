import React, { useContext } from "react";
import Navbar from "../common/Navbar";
import Single from "../common/Single";
import { bikes } from "../../dummyData";
import { useParams } from "react-router-dom";

import RevealOnScroll from "../animation/RevealOnScroll";

const SingleListing = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <RevealOnScroll>
        <Single
          name={bikes[id].title}
          description={bikes[id].description}
          price={bikes[id].price}
          location={bikes[id].location}
          picture={bikes[id].imageUrl}
        />
      </RevealOnScroll>
    </div>
  );
};

export default SingleListing;
