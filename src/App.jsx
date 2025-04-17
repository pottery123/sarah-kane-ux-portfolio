import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, NavLink, Link } from "react-router";

function Header() {
  return (

    <div className=" font-quicksand p-10 text-xl text-white  bg-[url('./assets/accent-half-moon.svg')]  bg-contain bg-no-repeat  flex justify-between p-5 max-w-7xl mx-auto h-25">
      <div><span className='text-[#D45769]'>S</span>Kane</div>
      <div className='flex gap-4 '>
        <div>Resume</div>
        <div>About</div>
      </div>
    </div>

  );
}

function OpenStudy({ link, text }) {

  return (
    <NavLink
      className={`border-2 border-white rounded-full text-center px-3 py-2 bg-white text-${text} hover:bg-slate-100`}
      to={link}
    >
      {"Open Case Study"}
    </NavLink>
  );
}



function App() {
  return (
    <>
      <div className='bg-[#353643]'>
        <Header />
        <div className='bg-[#353643] mt-20'>
          <div className="flex">
            <div>
              <div className="text-white text-3xl">
                <div className="ml-10 font-bold text-[#D45769] text-9xl text-left font-quicksand">Sarah Kane</div>
                <div className=" text-left mt-10 ml-10 font-quicksand leading-12">
                  I am a product designer with a background in front-end engineering.
                  My work ethos can be expressed in <span className=''>two phrases, design with care,
                    build with integrity.
                  </span>
                  Check out my work below. Enjoy!
                </div>
              </div>
            </div>
            <img
              className="h-[26rem] mt-30"
              src={"./src/assets/portrait3.png"}
            >
            </img>
          </div>
          <div className=" md:flex justify-around bg-[#D45769] w-auto overflow-hidden relative block z-20 font-quicksand ">
            <img
              className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5"
              width={500}
              height={500}
              src={"/src/assets/aprender-screens.svg"}
              alt="Aprender Screens"
            ></img>
            <div className=" font-Quicksand font-semibold md:pt-52 text-white md:pl-10 p-8">
              <div className="lg:pt-18 md:text-seven lg:text-eight text-8xl text-left ">
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
              <div className="mt-24">
                <OpenStudy link={"aprender"} text={'aprenderPink'} />
               
              </div>
            </div>
          </div>
          <div className=" md:flex justify-around bg-[#730220] w-auto overflow-hidden relative block z-20">
            <div className=" font-Quicksand font-semibold md:pt-52 text-white md:pl-10 p-8">
              <div className="lg:pt-18 md:text-eight lg:text-eight text-six ">
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
              <div className="mt-24">
                <OpenStudy link={"/state-fair"} text={'aprenderPink'} />
              </div>
            </div>
            <img
              className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5 hidden lg:block md:block"
              width={500}
              height={500}
              src={"/src/assets/state-fair-images.svg"}
              alt="Aprender Screens"
            ></img>
          </div>
          <div className=" md:flex justify-around bg-[#212153] w-auto overflow-hidden relative block z-20 ">
            <img
              className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5"
              width={500}
              height={500}
              src={"/src/assets/aprender-screens.svg"}
              alt="Aprender Screens"
            ></img>
            <div className=" font-poppins font-semibold md:pt-52 text-white md:pl-10 p-8">
              <div className="lg:pt-18 md:text-eight text-seven ">SOMO</div>
              <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
                <span className="font-bold">Role:</span> UX/UI Designer,
                Interaction Designer, UX Researcher
              </p>
              <p className="text-four font-normal tracking-wide sm:mr-10 ">
                <span className="font-bold">Key skills:</span> Figma, Design
                Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
              </p>
              <div className="mt-24">
                <OpenStudy link={"/somo"} text={'aprenderPink'} />
              </div>
            </div>
          </div>
        </div>

        {/* <Header />

        <Outlet />
        <Link to="/Aprender">Aprender</Link>
        <Link to="/Somo">Somo</Link>
        <Link to="/StateFair">StateFair</Link> */}
      
      </div>

    </>
  )
}

export default App
