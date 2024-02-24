import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import cardData from "../../Components/cardData.json";
import Header from "../../Components/Header";
import { BiCategory } from "react-icons/bi";

function Dashboard() {
	return (
		<div className="h-full flex items-center flex-col justify-start bg-cover">
			<Header />
			<div
				className="flex w-full h-96 bg-slate-700 object-fill bg-cover justify-center items-end"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(255, 255, 255)), url("https://images.unsplash.com/photo-1591389703635-e15a07b842d7?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
				}}
			>
				<p className=" absolute top-48 bg-center text-white text-5xl pb-4 font-bold drop-shadow-xl">
					Land Chain...
				</p>

				<div className="flex flex-col p-5 w-full items-center justify-center">
					<div className="flex flex-row mb-6 w-full justify-center items-center">
						<div className="h-12 w-12 flex ml-5 justify-center items-center bg-slate-800 rounded-xl cursor-pointer shadow-xl">
							<BiCategory className="text-white" />
						</div>
						<input
							type="text"
							className="h-12 ml-2 pl-4 w-full rounded-l-xl border-2 border-r-0 shadow-xl"
							placeholder="Search for property by Location ,owner Name"
						/>
						<div className="h-12 p-2 flex mr-5 justify-center items-center bg-slate-800 rounded-r-xl cursor-pointer text-white shadow-xl">
							Search
							<IoSearchSharp className="text-white" />
						</div>
					</div>

					<ul className="flex flex-row justify-center">
						<li></li>
						<button className="p-4 px-36 mr-8 rounded-md bg-slate-600 text-white">
							ews
						</button>
						<button className="p-4 px-36 mr-8 rounded-md bg-slate-600 text-white">
							ews
						</button>
						<button className="p-4 px-36 mr-8 rounded-md bg-slate-600 text-white">
							ews
						</button>
						<button className="p-4 px-36 rounded-md bg-slate-600 text-white">
							ews
						</button>
					</ul>
				</div>
			</div>

			<p className="text-xl mt-8 m-4 font-bold">My Lands</p>

			{cardData.lands.map((land, index) => (
				<div
					key={index}
					className="flex flex-col w-2/3 h-72 bg-slate-700 rounded-lg m-4 object-fill bg-cover  justify-between shadow-2xl"
					style={{
						backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgb(255, 255, 255)), url(${land.imageUrl})`,
					}}
				>
					<div>
						<p className="px-4 pt-4 text-2xl font-bold">{land.name}</p>
						<p className="pl-4 ">{land.type}</p>
						<div className="flex flex-row">
							<p className="pl-4 ">Area,</p>
							<div className="flex flex-row items-center">
								<MdLocationPin className="ml-1" />
								<p>{land.location}</p>
							</div>
						</div>
					</div>
					<p className="p-4 text-lg font-bold">
						Current Rate: ₹{land.currentRate}/-
					</p>
				</div>
			))}
		</div>
	);
}

export default Dashboard;
