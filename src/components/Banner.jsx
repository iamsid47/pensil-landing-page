import React from "react";

function Banner() {
  let cname = sessionStorage.getItem("cname");
  return (
    <div className="grid shadow-xl h-52 border bg-gradient-to-br from-purple-800 via-violet-900 to-purple-800 text-white my-2 content-end rounded-xl">
      <span className="text-4xl font-bold px-5 py-6 overflow-hidden">
        {cname}
      </span>
    </div>
  );
}

export default Banner;
