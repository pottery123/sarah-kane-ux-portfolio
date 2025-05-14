import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";



function Resume() {
  return (
    <>
      <div className="bg-[#353643] h-screen font-montserrat">
        <NavBar />
        <div className="md:flex bg-[#353643]">
          <div className=" p-5 ">
            <div className="text-white text-2xl">
              <div className=" font-extrablack text-5xl pb-8 pt-8 text-[#D45769] ">
                Resume
              </div>
              <a download href="sarah_kane_resume copy.pdf" className="text-heroPink text-base">
            <div className="flex gap-3 mb-5">
            <span>Download Resume Here </span>{" "}
             <span>
              <img alt="download icon" src={"download-icon.svg"} />
            </span> 
            </div>
          </a>
          <div className=" md:justify-items-center lg:justify-items-center">
              <img
              className=" md:justify-self-end  "
              src={"resume_one.png"}
            >
            </img>
            <img
              className=" md:justify-self-end  pt-5 "
              src={"resume_two.png"}
            >
            </img>
            <img
              className=" md:justify-self-end  pt-5 "
              src={"resume_three.png"}
            >
            </img>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
