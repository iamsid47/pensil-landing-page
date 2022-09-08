import React, { Component } from "react";
import Banner from "./Banner";
import Team from "./Team";

function Dashboard() {
  return (
    <div>
      <Banner />
      
      <div className="pt-2 mt-10">
        <h1 className="text-3xl px-4 font-medium pb-4">Quick Updates</h1>
      </div>
      <div className="p-2 w-full  bg-white rounded-lg border shadow-md sm:py-4 px-8 ">
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://lh3.googleusercontent.com/ogw/AOh-ky3_zPGs4GXqxQC2V7yitZMXJ-Z4CHFJ50ybJsp8wA=s32-c-mo"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[18px] text-gray-900 truncate font-semibold">
                    Welcome to emoji Get Started
                  </p>
                  <p className="font-regular mt-1">
                    Saakshi Raut posted in{" "}
                    <span className="text-blue-700">
                      {" "}
                      Introduction - Get Started
                    </span>
                  </p>
                  <p className="text-[12px] text-gray-500 truncate ">
                    10 Sept, 2022
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://lh3.googleusercontent.com/ogw/AOh-ky3_zPGs4GXqxQC2V7yitZMXJ-Z4CHFJ50ybJsp8wA=s32-c-mo"
                    alt="Bonnie image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[18px]  text-gray-900 truncate  font-semibold">
                    Saakshi Raut
                  </p>
                  <p className="font-regular mt-1">
                    Saakshi Raut posted in{" "}
                    <span className="text-blue-700">
                      {" "}
                      Introduction - Announcement
                    </span>{" "}
                  </p>
                  <p className="text-[12px] text-gray-500 truncate ">
                    9 Sept, 2022
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://lh3.googleusercontent.com/ogw/AOh-ky3_zPGs4GXqxQC2V7yitZMXJ-Z4CHFJ50ybJsp8wA=s32-c-mo"
                    alt="Michael image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[18px]  text-gray-900 truncate  font-semibold">
                    Saakshi Raut
                  </p>
                  <p className="font-regular mt-1">
                    Saakshi Raut posted in{" "}
                    <span className="text-blue-700">
                      {" "}
                      Introduction - Go Live
                    </span>{" "}
                  </p>
                  <p className="text-[12px] text-gray-500 truncate ">
                    8 Sept, 2022
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Team />
    </div>
  );
}

export default Dashboard;
