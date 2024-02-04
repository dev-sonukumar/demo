import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
// import { TbBrandNextjs } from "react-icons/Tb";
// import { SiJavascript } from "react-icons/Si";

const Tech = () => {
  return (
    <div>
      <div className="flex items-center lg:mt-[20px] xs:my-5 xs:text-center lg:text-start xs:justify-around lg:justify-normal">
        <h2 className="font-semibold md:text-[21px] xs:text-[16px] items-center text-center">
          Tech Stack <span className="md:pl-1">|</span>
        </h2>
        <div className="xs:text-[22px] lg:text-[24px] flex justify-center items-center gap-5 md:ml-10 xs:ml-4 ">
          <FaHtml5 className=" text-[#FF5733] hover:animate-ping inline text-center" />
          <FaCss3Alt className="text-[#264de4] hover:animate-ping " />
          {/* <SiJavascript className="text-[#f0db4f] bg-black hover:animate-ping " /> */}
          <FaReact className="text-[#61DBFB] hover:animate-ping " />
          {/* <TbBrandNextjs className="text-[#61DBFB] hover:animate-ping " /> */}
        </div>
      </div>
    </div>
  );
};

export default Tech;
