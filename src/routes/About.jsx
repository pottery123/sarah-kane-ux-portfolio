import React from "react";
import NavBar from "../Components/NavBar";

function About() {
  return (
    <>
    <div className="bg-[#353643]  font-montserrat  h-max md:h-screen md:overflow-hidden">
        <NavBar />
        <div className="md:flex lg:relative  md:relative md:h-screen ">
        <div className="md:flex">
            <div className=" p-5 ">
              <div className="text-white text-3xl">
                <div className=" font-extrablack text-5xl pb-8 pt-8 text-[#D45769] md:text-8xl  ">
                  About
                </div>
                <div className=" text-2xl  leading-12 md:text-4xl lg:text-4xl">
                Sarah Kane is product designer with many hobbies. She enjoys
                deep conversations, pottery, history, coding (including this
                website), photography, pickleball, sewing and travel. She lives
                in Seattle...in the Rainier Valley.
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <img
              className=" md:justify-self-end  md:w-100 lg:w-100  md:mt-60 md:absolute bottom-0 md:right-0 "
              src={"portrait4.png"}
            ></img>
      </div>
      </>
  );
}

export default About;

