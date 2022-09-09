import React from "react";

function ExploreGroups() {
  return (
    <>
      <section className="w-full pt-4 bg-white">
        <div className="px-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6">
            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-7 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="object-cover w-full h-full"
                />
              </a>
              <div className="p-5 pb-6">
                <h2 className="mb-2">
                  <a
                    href="/extracting-tailwindcss-from-html"
                    className="text-2xl font-bold leading-tight tracking-tight"
                  >
                    Gym & Workout
                  </a>
                </h2>

                <p className="text-gray-700">
                  <span>
                    Start working out with your friends and track real-time
                    progress!{" "}
                    <span className="text-red-500">#fitness_for_life</span>
                  </span>
                </p>
                <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg mt-5 hover:text-white transition duration-300 py-3 px-5">
                  Join Group
                </button>
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-5 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="object-cover w-full h-full"
                />
              </a>
              <div className="p-5 pb-6">
                <h2 className="mb-2">
                  <a
                    href="/extracting-tailwindcss-from-html"
                    className="text-2xl font-bold leading-tight tracking-tight"
                  >
                    Computers
                  </a>
                </h2>

                <p className="text-gray-700">
                  <span className="text-red-500">#Hello_World</span> With
                  programmers on your side, you can build anything!
                </p>
                <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg mt-5 hover:text-white transition duration-300 py-3 px-5">
                  Join Group
                </button>
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-5 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562195168-c82fea0f0953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  className="object-cover w-full h-full"
                />
              </a>
              <div className="p-5 pb-6">
                <h2 className="mb-2">
                  <a
                    href="/extracting-tailwindcss-from-html"
                    className="text-2xl font-bold leading-tight tracking-tight"
                  >
                    Travel
                  </a>
                </h2>

                <p className="text-gray-700">
                  <span>This is so much awesome!</span>
                </p>
                <button className="text-white bg-red-500 hover:bg-red-600 rounded-lg mt-5 hover:text-white transition duration-300 py-3 px-5">
                  Request Access
                </button>
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-6">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
                  className="object-cover w-full h-full"
                />
              </a>
              <div className="p-5 pb-6">
                <h2 className="mb-2">
                  <a
                    href="/extracting-tailwindcss-from-html"
                    className="text-2xl font-bold leading-tight tracking-tight"
                  >
                    Dog Lovers
                  </a>
                </h2>

                <p className="text-gray-700">
                  <span>Find best dog breeds for you!</span>
                </p>
                <button className="text-white bg-gray-500 rounded-lg mt-5 hover:text-white transition duration-300 py-3 px-5">
                  Closed
                </button>
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-5 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
                  className="object-cover w-full h-full"
                />
              </a>
              <div className="p-5 pb-6">
                <h2 className="mb-2">
                  <a
                    href="/extracting-tailwindcss-from-html"
                    className="text-2xl font-bold leading-tight tracking-tight"
                  >
                    Food ❤️
                  </a>
                </h2>

                <p className="text-gray-700">
                  <span>Food that'll you'll love soo much!.</span>
                </p>
                <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg mt-5 hover:text-white transition duration-300 py-3 px-5">
                  Join Group
                </button>
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-7 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  className="object-cover w-full h-full"
                />
              </a>
              <div className="p-5 pb-6">
                <h2 className="mb-2">
                  <a
                    href="/extracting-tailwindcss-from-html"
                    className="text-2xl font-bold leading-tight tracking-tight"
                  >
                    Cars
                  </a>
                </h2>

                <p className="text-gray-700">
                  <span>See the exotic cars here!</span>
                </p>
                <button className="text-white bg-red-500 hover:bg-red-600 rounded-lg mt-5 hover:text-white transition duration-300 py-3 px-5">
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreGroups;
