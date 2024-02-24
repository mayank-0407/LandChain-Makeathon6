import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import cardsData from "./cardData.json";
import Header from "../../Components/Header";

function Market() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="h-screen">
      <Header />
      <div
        className="w-screen h-96 rounded flex flex-row items-center justify-center opacity-90"
        style={{
        //   backgroundImage: linear-gradient(to ,bottom, rgba(0, 0, 0, 0), rgb(255, 255,255,0)), url("https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <input
          type="text"
          className="h-10 w-1/3 rounded-l-xl border-2 shadow-xl"
          placeholder="Search for property by Location ,owner Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="h-10 w-10 flex justify-center items-center bg-slate-800 rounded-r-xl cursor-pointer">
          <IoSearchSharp className="text-white" />
        </div>
      </div>
      <ul>
        {cardsData.lands
          .filter(
            (land) =>
              land.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              land.location.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((land, index) => (
            <li
              className="flex flex-row m-10 rounded-3xl border-2 h-2/6 searchable-item"
              key={index}
            >
              <div className="border-2 w-1/4 rounded-l-3xl">
                <img
                  src={land.imageUrl}
                  alt="no image"
                  className="h-full w-full object-cover rounded-l-3xl"
                />
              </div>
              <div className="h-full w-full flex flex-col backdrop-brightness-90  ">
                <div className="w-3/4 rounded-sm">
                  <p className="px-4 pt-4 text-2xl font-bold">
                    Name of owner :: {land.name}
                  </p>
                  <p className="pl-4">Type: {land.type}</p>
                  <div className="flex flex-row">
                    <p className="pl-4">Area: {land.area},</p>
                    <div className="flex flex-row items-center">
                      <MdLocationPin className="ml-1" />
                      <p>Location: {land.location}</p>
                    </div>
                  </div>
                </div>
                <div className="h-full  m-10 flex justify-between ">
                  <p>Current prize:{land.currentRate}</p>
                  <button className="h-10 w-1/12 text-1/12 bg-slate-800 text-slate-100 p-2 rounded-xl shadow">
                    Contact
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Market;