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
                  src="https://cdn.devdojo.com/images/may2021/blogimg1.jpg"
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
                  <span>Description Here</span>
                </p>
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-5 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://cdn.devdojo.com/images/may2021/blogimg2.jpg"
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
                  <span>Hello World</span>
                </p>
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-5 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://cdn.devdojo.com/images/may2021/blogimg3.jpg"
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
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-6 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://cdn.devdojo.com/images/may2021/blogimg4.jpg"
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
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-5 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://cdn.devdojo.com/images/may2021/blogimg5.jpg"
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
              </div>
            </div>

            <div className="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-7 hover:scale-105">
              <a href="#_" className="block h-64 overflow-hidden">
                <img
                  src="https://cdn.devdojo.com/images/may2021/blogimg6.jpg"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreGroups;
