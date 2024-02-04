import React from "react";
import SocialMedia from "../miniComponent/SocialMedia";

const About = () => {
  return (
    <div className="max-w-full py-12 flex flex-wrap bg-[var(--bg2)]">
      <div className="container mx-auto xs:px-5 md:px-0 my-5 flex xs:flex-col md:flex-row items-center justify-center ">
        {/* ----- left part ----  */}
        <div className="rounded md:w-6/12 xs:mb-11 md:mb-0 xs:hidden md:inline">
          <div className="">
            <img
              src="../images/aboutme.jpg"
              alt="About-Image"
              className="rounded-3xl md:w-[400px] md:h-[400px] "
            />
          </div>
        </div>

        {/* ----- Right part ----  */}
        <div className="md:w-6/12 ">
          <h3 className="font-bold text-2xl mb-2">About me.</h3>
          <h2 className="font-bold text-[14px] mb-3 text-[#f44236]">
            A dedicated Front-end Web Developer
          </h2>
          <p className="text-zinc-500">
            Motivated front-end web developer with a Post-Graduation degree in
            Computer Application. Proficient in HTML5, CSS3, Tailwind, and
            JavaScript. Skilled in React.js, and Redux Toolkit, Seeking
            opportunities to contribute to front-end projects and deliver
            impactful solutions with a passion for coding and quick learning
            ability.
          </p>
          <div className="mt-5">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
