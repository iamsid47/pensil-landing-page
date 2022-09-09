import React from "react";

function Banner({ Org }) {
  return Org.map((organization) => (
    <div className="grid shadow-xl h-52 border bg-gradient-to-br from-purple-800 via-violet-900 to-purple-800 text-white my-2 content-end rounded-xl">
      <span className="text-4xl font-bold px-5 py-6 overflow-hidden">
        {organization.tagline}
      </span>
    </div>
  ));
}

export default Banner;
