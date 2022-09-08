import React from "react";

function Navigation() {
  return (
    <div>
      <section
        className="relative block w-full py-6 leading-10 text-center text-indigo-900 bg-black"
        data-tails-scripts="//unpkg.com/alpinejs"
      >
        <div className="w-full px-6 mx-auto leading-10 text-center lg:px-8 max-w-7xl">
          <div className="box-border flex flex-wrap items-center justify-between -mx-4 text-indigo-900">
            <div className="relative z-10 flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left">
              <a
                href="/"
                className="box-border inline-block text-2xl font-medium leading-tight text-left text-white no-underline bg-transparent cursor-pointer focus:no-underline"
              >
                Pencil
              </a>
            </div>

            <div className="absolute left-0 z-0 justify-center hidden w-full px-4 -ml-5 space-x-4 font-medium leading-10 md:flex lg:-ml-0 lg:space-x-6 md:flex-grow-0 md:text-left lg:text-center">
              <a
                href="/login"
                x-data="{ hover: false }"
                className="relative inline-block px-0.5 text-base font-medium leading-tight text-gray-200 uppercase transition duration-150 ease hover:text-white"
              >
                <span className="block">Login</span>
              </a>
              <a
                href="#_"
                x-data="{ hover: false }"
                className="relative inline-block px-0.5 text-base font-medium leading-tight text-gray-200 uppercase transition duration-150 ease hover:text-white"
              >
                <span className="block">Plans</span>
              </a>
              <a
                href="#_"
                x-data="{ hover: false }"
                className="relative inline-block px-0.5 text-base font-medium leading-tight text-gray-200 uppercase transition duration-150 ease hover:text-white"
              >
                <span className="block">Features</span>
              </a>
              <a
                href="#_"
                x-data="{ hover: false }"
                className="relative inline-block px-0.5 text-base font-medium leading-tight text-gray-200 uppercase transition duration-150 ease hover:text-white"
              >
                <span className="block">About</span>
              </a>
            </div>
            <div className="relative items-center hidden px-4 mt-2 space-x-5 font-medium leading-10 md:flex md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
              <a
                href="/settings"
                x-data="{ hover: false }"
                className="relative inline-block px-0.5 text-base font-medium leading-tight text-gray-200 uppercase transition duration-150 ease hover:text-white"
              >
                <span className="block">Account</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                  <span className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-black"></span>
                  <svg
                    className="w-auto h-full text-blue-600 fill-current"
                    viewBox="0 0 84 6"
                    xmlns="http://www.w3.org/2000/svg"
                    data-primary="blue-600"
                  >
                    <g stroke="none" stroke-width="1" fill-rule="evenodd">
                      <g transform="translate(-8)" fill-rule="nonzero">
                        <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
              <a
                href="/form"
                className="inline-flex uppercase items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-600 rounded-md shadow-sm focus:ring-offset-gray-900 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                data-rounded="rounded-md"
                data-primary="blue-600"
              >
                Settings
              </a>
            </div>
            <div className="flex items-center justify-center h-full mr-5 text-white md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navigation;