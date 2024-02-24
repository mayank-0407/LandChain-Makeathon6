import React from "react";
import LoginPage from "./LoginPage";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" h-20 bg-slate-300 w-screen flex flex-col opacity-95">
      <div className=" h-1/6 bg-slate-800 "></div>

      <ul className="h-5/6 flex flex-row justify-center space-x-16  items-center  ">
        <li className="border border-slate-300 h-1/2 border-r-slate-950 hover:text-amber-600 hover:border-amber-600">
          LOgo
        </li>
        <li className="border border-slate-300 h-1/2 border-r-slate-950  hover:text-amber-600 hover:border-amber-600">
          Home
        </li>
        <li className="border border-slate-300 h-1/2 border-r-slate-950  hover:text-amber-600 hover:border-amber-600">
          Services
        </li>
        <li className="border border-slate-300 h-1/2 border-r-slate-950  hover:text-amber-600 hover:border-amber-600">
          Property
        </li>
        <li className="border border-slate-300 w-1/12 bg-slate-800 text-white    h-1/2 rounded-lg p-1 hover:text-amber-100 hover:border-amber-900 ">
          <NavLink to={"/login"}>Login/Signup</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
