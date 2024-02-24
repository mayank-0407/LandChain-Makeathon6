import React from "react";
import { MdLocationPin } from "react-icons/md";
import cardData from "../../Components/cardData.json";
import Header from "../../Components/Header";
import YouTube from "react-youtube";


function Dashboard() {
	return (
		<div className="h-full flex items-center flex-col justify-start bg-cover">
			<Header />
			<div className="flex w-full h-96 bg-slate-700 object-fill bg-cover justify-start items-end">
				<YouTube
					videoId="NGFFNsxQ-Mg / CJ15 ZY1Z M2GH" 
					className="w-full h-full object-cover absolute top-0 left-0"
					opts={{
						playerVars: {
							autoplay: 1,
							loop: 1,
							controls: 0,
							showinfo: 0,
							mute: 1,
							playlist: "NGFFNsxQ-Mg",
						},
					}}
				/>

				<div className="flex-col p-5 w-full">
					<p className="text-2xl pb-4 font-bold">Services</p>
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