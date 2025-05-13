import "./App.css";
import NavBar from "./Components/NavBar";
import portrait3 from "src/assets/portrait3"

import { Outlet, NavLink, Link } from "react-router";

function OpenStudy({ link, text }) {
  return (
    <NavLink
      className={`border-2 border-white rounded-full text-center px-3 py-2 bg-white text-"${text}" hover:bg-slate-100`}
      to={link}
    >
      {"Open Case Study"}
    </NavLink>
  );
}


function App() {
  return (
    <>
      <div className="bg-[#353643] font-montserrat overflow-hidden ">
        <NavBar />
        <div className="bg-[#353643]">
          <div className="md:flex">
            <div className=" p-5 ">
              <div className="text-white text-3xl">
                <div className=" font-extrablack text-5xl pb-8 pt-8 text-[#D45769] md:text-8xl  ">
                  Sarah Kane
                </div>
                <div className=" text-2xl  leading-12 md:text-4xl lg:text-4xl">
                  I am a product designer with a background in front-end
                  engineering. My work ethos can be expressed in{" "}
                  <span className="">
                    two phrases, design with care, build with integrity.
                  </span>
                  Check out my work below. Enjoy!
                </div>
              </div>
            </div>
            <img
              className=" md:justify-self-end  md:w-100 lg:w-100  md:mt-40"
              src={portrait3}
            ></img>
          </div>
          <div className=" md:flex justify-around bg-[#D45769]  overflow-hidden relative block z-20 font-montserrat ">
            <img
              className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5"
              width={500}
              height={500}
              src={"/src/assets/aprender-screens.svg"}
              alt="Aprender Screens"
            ></img>
            <div className="  font-semibold md:pt-40 text-white md:pl-10 p-8">
              <div className="lg:pt-10 md:text-7xl lg:text-8xl text-7xl text-left pb-8 ">
                Aprender
              </div>
              <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 text-left ">
                <span className="font-bold">Role:</span> UX/UI Designer,
                Interaction Designer, UX Researcher
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 text-left ">
                <span className="font-bold">Key skills:</span> Figma, Design
                Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 mt-5  text-left">
                <span className="font-bold"> Type of project:</span> Personal,
                Concept
              </p>
              <div className="py-10">
                <NavLink
                  className={`border-2 border-white rounded-full text-center px-3 py-2 bg-white text-[#D45769] hover:bg-slate-100`}
                  to="aprender"
                >
                  {"Open Case Study"}
                </NavLink>
              </div>
            </div>
          </div>

          <div className=" md:flex justify-around bg-[#730220] w-auto overflow-hidden relative block z-20">
            <img
              className="md:pt-32 mt-10 lg:mt-6 lg:mb-6 p-5  lg:hidden md:hidden"
              width={500}
              height={500}
              src={"/src/assets/state-fair-images.svg"}
              alt="Aprender Screens"
            ></img>
            <div className="  font-semibold md:pt-40 text-white md:pl-10 p-8">
              <div className="lg:pt-10 md:text-7xl lg:text-8xl text-7xl text-left pb-8 ">
                State Fair
              </div>
              <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
                <span className="font-bold">Role:</span> UX/UI Designer,
                Interaction Designer, UX Researcher
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 ">
                <span className="font-bold">Key skills:</span> Figma, Design
                Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 mt-5 ">
                <span className="font-bold"> Type of project:</span> Personal,
                Concept
              </p>
              <div className="mt-24"> </div>
              <div className="py-10">
                <NavLink
                  className={`border-2 border-white rounded-full text-center px-3 py-2 bg-white text-[#730220] hover:bg-slate-100`}
                  to="state-fair"
                >
                  {"Open Case Study"}
                </NavLink>
              </div>
            </div>
            <img
              className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5  lg:block md:block"
              width={500}
              height={500}
              src={"/src/assets/state-fair-images.svg"}
              alt="Aprender Screens"
            ></img>
          </div>
          {/* <div className="md:flex  ">
            <img
              className="p-5"
              width={500}
              height={500}
              src={"/src/assets/aprender-screens.svg"}
              alt="Aprender Screens"
            ></img>
            <div className="p-5 text-xl text-white">
              <div className=" text-7xl font-bold pb-4 ">SOMO</div>
              <p className=" py-2 ">
                <span className="font-bold">Role:</span> UX/UI Designer,
                Interaction Designer, UX Researcher
              </p>
              <p className="py-2">
                <span className="font-bold">Key skills:</span> Figma, Design
                Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
              </p>
              <p className="py-2 ">
                <span className="font-bold"> Type of project:</span> Personal,
                Concept
              </p>
              <div className="py-10">
                <NavLink
                  className={`border-2 border-white rounded-full text-center px-3 py-2 bg-white text-[#353643] hover:bg-slate-100`}
                  to="/somo"
                >
                  {"Open Case Study"}
                </NavLink>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
