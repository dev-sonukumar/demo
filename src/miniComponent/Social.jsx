import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className=" text-white xs:mt-5 md:mt-0">
      <div className="flex gap-5 text-[25px] justify-center items-center">
        <a
          href="https://www.linkedin.com/in/sonukumar-singh/"
          target="_blank"
          className="text-white "
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/me-Sonukumar"
          target="_blank"
          className="text-white "
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Social;
