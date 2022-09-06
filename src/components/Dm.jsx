import React, { Component } from "react";

function Dm() {
  
  return (
    <div className="">
      <div className="">
        <div className="flex space-x-4 p-4 bg-white rounded-lg border shadow-md sm:p-8 ">
          <div className=" w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 ">
                Chats
              </h5>
            </div>
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNEGd_0C7SMlckxJD2HCR5vBWwGlBOSWrlD83IUBYUA&s"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        email@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNEGd_0C7SMlckxJD2HCR5vBWwGlBOSWrlD83IUBYUA&s"
                        alt="Bonnie image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Bonnie Green
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        email@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNEGd_0C7SMlckxJD2HCR5vBWwGlBOSWrlD83IUBYUA&s"
                        alt="Michael image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Michael Gough
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        email@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNEGd_0C7SMlckxJD2HCR5vBWwGlBOSWrlD83IUBYUA&s"
                        alt="Thomas image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Thomes Lean
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        email@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid w-full max-w-md h-[350px] bg-gray-200 border content-between  items-stretch rounded-md">
          <div className="flex justify-start items-start  self-start">
            <div className="flex w-full items-center px-2 space-y-2 border-b-2 border-gray-300 bg-white rounded-md">
              <div className="flex-shrink-0 ">
                <img
                  className="w-8 h-8 rounded-full mx-2 my-3"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNEGd_0C7SMlckxJD2HCR5vBWwGlBOSWrlD83IUBYUA&s"
                  alt="Michael image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Michael Gough
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  Active
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full ">
          <div className="flex w-full self-end">
                    <input
                      type="text"
                      id="voice-search"
                      className="relative border border-gray-300 text-black rounded-md  block w-full p-1"
                      placeholder="Type.."
                      required
                    />
                    <button
                      type="button"
                      className="flex   items-center px-1"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-500  "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dm;
