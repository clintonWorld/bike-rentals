import React from "react";

const Maps = (props) => {
  return (
    <div className="flex items-center justify-center  flex-col">
      <h1 className="text-2xl font-serif font-bold m-4">
        Find{" "}
        <span className="text-red-500 text-2xl font-serif font-bold"> Us</span>
      </h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.752037096372!2d85.3159457253221!3d27.66314247620793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d41edbb1ab%3A0x8dd6d2fc131e244f!2sMahalaxmisthan%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1716482362973!5m2!1sen!2snp"  height="450"     allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Maps;
