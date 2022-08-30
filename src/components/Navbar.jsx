import React from 'react';

function Navbar() {
    return ( <>
     <div className="nav bg-white px-2 py-2 border">
        <div className="flex place-content-between mx-4">
          <img
            className="w-7 h-7 relative rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNEGd_0C7SMlckxJD2HCR5vBWwGlBOSWrlD83IUBYUA&s"
            alt="Profile"
          />
          <span className="text-[18px] hidden md:block ">Pencil</span>
          <button className="leding-10 text-[14px]">Login</button>
        </div>
      </div>
    </> );
}

export default Navbar;