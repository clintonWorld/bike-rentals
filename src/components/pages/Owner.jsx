import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import OwnerRequest from "../common/OwnerRequest";
import {owner} from "../../dummyOwner"

const Owner = (props) => {


  return (
    <div>
      <Navbar />
      <div className="md:flex 1/2 items-center justify-center flex-wrap ">
        {
          owner.map((value , index)=>{
            return <OwnerRequest 
            key={index}
            fullName = {value.name}
            address= {value.address}
            contact= {value.contact}
            rentD= {value.rentD}
            location= {value.location}
            rentR = {value.rentR}
            image= {value.image}
            />
          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default Owner;
