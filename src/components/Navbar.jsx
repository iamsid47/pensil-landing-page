import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [menu, showMenu] = useState(false);
  const clogo = sessionStorage.getItem("logo");
  return (
    <>
      <div className="sticky bg-white px-2 py-2 border">
        <div className="flex justify-between  mx-4">
          <button
            className="block md:hidden items-center"
            onClick={() => showMenu(!menu)}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          {menu ? (
            <div className="absolute top-0">
              <Sidebar />
            </div>
          ) : null}
          <span className="flex w-full md:w-auto  justify-center md:block md:w-none md:justify-start items-center">
            <img
              className="w-10 h-10 relative rounded-full "
              src={clogo}
              alt="Profile"
            />
          </span>
          <span className="text-[18px] hidden md:block py-3">Pencil</span>
          <div>
            <button className="leding-10 text-[14px] mr-4 py-3">Login</button>
            <button className="leding-10 text-[14px] py-3">Settings</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
