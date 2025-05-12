import React from "react";
import NavBar from "../Components/NavBar";

function About() {
  return (
    <>
    <div className="bg-[#353643]  font-montserrat  h-max">
        <NavBar />
        <div className="md:flex md:h-max lg:relative md:fixed">
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
            <img
              className=" md:justify-self-end  md:w-100 lg:w-100  md:mt-60 "
              src={"./src/assets/portrait4.png"}
            ></img>
          </div>
        </div>
      </div>
      </>
  );
}

export default About;

/* <div className="bg-[#353643]  font-montserrat">
        <NavBar />
        <div className="md:flex md:h-min md:relative lg:relative">
          <div className=" p-5 ">
            <div className="text-white text-xl">
              <div className=" font-extrablack text-5xl pb-8 pt-8 text-[#D45769] ">
                About
              </div>
              <div className="leading-8 text-4xl ">
                Sarah Kane is product designer with many hobbies. She enjoys
                deep conversations, pottery, history, coding (including this
                website), photography, pickleball, sewing and travel. She lives
                in Seattle...in the Rainier Valley.
                <div className="mt-10 flex gap-6">
                  <span className=" text-sm text-[#D45769]">email:</span>{" "}
                  <span className=" text-sm text-white">
                    sarah-kane@outlook.com
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className=" text-sm flex text-[#D45769]">
                    linkedin:
                  </span>
                  <span
                    href="http://www.linkedin.com/in/sarah-e-kane"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-sm underline decoration-solid text-white hover:text-heroPink"
                  >
                    www.linkedin.com/in/sarah-e-kane
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img
            className=" md:absolute lg:absolute bottom-0 right-0  md:justify-self-end md:w-xs "
            src={"./src/assets/portrait4.png"}
          ></img>
        </div>
      </div> */
