import React from "react";
import Tech from "../miniComponent/Tech";

const Hero = () => {
  return (
    <>
      <div className="max-w-full h-screen flex flex-wrap bg-[var(--bg2)] ">
        <div className="container mx-auto xs:px-5 lg:px-0 xs:mt-10 md:mt-0 lg:flex items-center justify-between gap-1 xs:flex xs:flex-col-reverse lg:flex-row  xs:text-center lg:text-start">
          <div className="lg:w-1/2">
            <h1 className="font-bold md:text-6xl inline xs:text-4xl text-center">
              Front-End Web Developer
            </h1>
            <img
              src="./images/hand.png"
              className="h-14 w-14 p-2 mx-2 mb-8 inline "
            />
            <p className="xs:text-[16px] xs:px-[10px] sm:text-[18px]">
              Hi, I'm Sonu Kumar. A passionate Front-end Web Developer.
            </p>
            <button className="my-6 md:font-bold rounded-[14px] p-3  bg-[var(--mainColorlight)] text-white hover:bg-[var(--mainColor)] ease-linear duration-300">
              Download CV
            </button>
            <Tech />
          </div>

          <div className="lg:w-1/2">
            <img
              src="./images/about-img.jpeg"
              alt=" profile"
              className="profile-img xs:h-[350px] xs:w-[350px] md:h-[450px] md:w-[450px]  lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
