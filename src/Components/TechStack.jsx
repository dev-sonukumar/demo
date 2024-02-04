import React from "react";

const TechStack = () => {
  return (
    <div className="max-w-full py-12 flex items-center justify-center bg-[var(--bg1)]">
      <div className="container mx-auto xs:px-5 lg:px-0">
        <h1 className="text-2xl font-bold text-start">Tech Stack</h1>
        <div className="frontend flex flex-wrap gap-3 mt-8">
          {/* <h3 className="text-[14px] font-bold text-start">Front-End</h3> */}
          <button className="btn">HTML 5</button>
          <button className="btn">CSS 3</button>
          <button className="btn bg-[var(--matBlacklight)]">JavaScript</button>
          <button className="btn">ReactJS</button>
        </div>
        <div className="frameword flex flex-wrap gap-3 mt-5">
          {/* <h3 className="text-[14px] font-bold text-start">Framework</h3> */}
          <button className="btn bg-[var(--matBlacklight)]">Tailwind</button>
          <button className="btn">Bootstrap</button>
          <button className="btn">Redux</button>
        </div>
        <div className="otherTech flex flex-wrap gap-3 mt-5 my-auto">
          {/* <h3 className="text-[16px] font-bold text-start">Other Tech</h3> */}
          <button className="btn">SQL</button>
          <button className="btn bg-[var(--matBlacklight)]">MongoDB</button>
          <button className="btn">Manual Testing</button>
          <button className="btn">Automation Testing</button>
          <button className="btn">Selenium</button>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
