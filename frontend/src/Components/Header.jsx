import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
			<div className=" h-20 bg-slate-300 w-screen flex-row opacity-95">
				<div className=" h-1/6 bg-slate-800 "></div>

				<div className="p-4 flex flex-row justify-end items-center">
					<ul className="h-5/6 pr-20 flex flex-row justify-center space-x-8  items-center">
						<li className="border pr-8 border-slate-300 h-1/2 border-r-slate-950 hover:text-blue-600 hover:border-r-blue-600">
							<button>Logo</button>
						</li>
						<li className="border pr-8 border-slate-300 h-1/2 border-r-slate-950  hover:text-blue-600 hover:border-r-blue-600">
							<NavLink to={"/dashboard"}> 
								<button>Home</button>
							</NavLink>
						</li>
						<li className="border pr-8 border-slate-300 h-1/2 border-r-slate-950  hover:text-blue-600 hover:border-r-blue-600">
							<button>Services</button>
						</li>
						<li className="border  border-slate-300 h-1/2  hover:text-blue-600">
							<button>Property</button>
						</li>
					</ul>

					<div className="border  ml-80 border-slate-300  bg-slate-800 text-white text-sm rounded-lg p-2 hover:text-amber-100 hover:border-amber-900 ">
						<NavLink to={"/login"}>Login</NavLink>
					</div>
				</div>
			</div>
		);
}

export default Header;
