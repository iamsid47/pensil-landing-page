import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
 
function Navbar() {
  const [menu, showMenu]= useState(false);
  return (
    <>
      <div className="nav bg-white px-2 py-2 border ">
        
        <div className="flex place-content-between  mx-4">
        <button className="block md:hidden items-center" onClick={()=>showMenu(!menu)}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        {menu ? (<div className="absolute top-0"><Sidebar /></div>):null}
          <span className="flex image w-full md:w-auto  justify-center md:block md:w-none md:justify-start">
            <img
              className="w-8 h-8 relative rounded-full "
              src="https://lh3.googleusercontent.com/ogw/AOh-ky3_zPGs4GXqxQC2V7yitZMXJ-Z4CHFJ50ybJsp8wA=s32-c-mo"
              alt="Profile"
            />
          </span>
          <span className="text-[18px] hidden md:block ">Pencil</span>
          <button className="leding-10 text-[14px]">Login</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
