import { Outlet, NavLink, Link } from "react-router";

function NavBar() {
  return (
    <div className=" p-5 md:p-10 lg:p-10 text-2xl font-montserrat  text-white  bg-[url('./assets/accent-half-moon.svg')]  bg-contain bg-no-repeat  flex justify-between ">
      <NavLink to={"/"}>
        <span className="text-[#D45769]">S</span>Kane
      </NavLink>
      <div className="flex gap-4 ">
        <NavLink to={"/resume"}>Resume</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
