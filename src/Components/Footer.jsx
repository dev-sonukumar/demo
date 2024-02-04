import React from "react";
import Social from "../miniComponent/Social";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#2D2E32]  text-white h-[126px] flex justify-center items-center">
        <div className="container mx-auto xs:px-5 lg:px-0 px-5 md:flex justify-between items-center">
          <div className="left-part font-bold xs:text-center ">
            Copyright © 2024. All rights are reserved
          </div>
          <div>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
