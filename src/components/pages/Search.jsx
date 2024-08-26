import React, { useContext, useState } from "react";
import ListingCard from "../common/ListingCard";
import Navbar from "../common/Navbar";
import { FilterContext } from "../FilterContext/FilterContext";
import { bikes } from "../../dummyData";
import BikesNotFound from "../common/BikesNotFound";

const Search = () => {
  const { search } = useContext(FilterContext);

  const lowerSearch = String(search).toLowerCase();

  const searchIncludeArray = bikes.filter((elem, index) => {
    let bikeName = String(elem.title).toLowerCase();
    return bikeName.includes(lowerSearch.toLowerCase());
  });

  return (
    <div>
      <Navbar />
      {searchIncludeArray.length > 0 ? (
        searchIncludeArray.map((val, index) => {
          return (
            <ListingCard
              key={index}
              image={val.imageUrl}
              title={val.title}
              description={val.description}
              price={val.price}
              location={val.location}
              id={val.id}
            />
          );
        })
      ) : (
        <BikesNotFound />
      )}
    </div>
  );
};

export default Search;


