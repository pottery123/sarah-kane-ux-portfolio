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
              <a download href="./src/assets/sarah_kane_resume copy.pdf" className="text-heroPink text-base">
            <div className="flex gap-3 mb-5">
            <span>Download Resume Here </span>{" "}
             <span>
              <img alt="download icon" src={"./src/assets/download-icon.svg"} />
            </span> 
            </div>
          </a>
          <div className=" md:justify-items-center lg:justify-items-center">
              <img
              className=" md:justify-self-end  "
              src={"./src/assets/resume_one.png"}
            >
            </img>
            <img
              className=" md:justify-self-end  pt-5 "
              src={"./src/assets/resume_two.png"}
            >
            </img>
            <img
              className=" md:justify-self-end  pt-5 "
              src={"./src/assets/resume_three.png"}
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

// const Resume = () => {
//   return (
//     <>

//       {/* <div className=" bg-[#353643]  ">
//         <NavBar />
//         <div className="font-bold text-[#D45769]  font-montserrat  ">
//           Resume
//         </div>
//         <object
//           data="/src/assets/sarah_kane_resume copy.pdf"
//           width="50%"
//           height="80%"
//           type="application/pdf"
//           className="p-10 m-auto"
//         >
//           <p>
//             Your browser doesn’t support PDFs. Please download the PDF to view
//             it: <a href="/your-pdf-url.pdf">Download PDF</a>.
//           </p>
//         </object>
//       </div> */}
//     </>
//   );
// };

export default Resume;
