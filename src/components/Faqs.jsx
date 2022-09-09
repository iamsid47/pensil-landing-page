import React from "react";
import { useState } from "react";

function Faqs() {
  return (
    <>
      <section
        className="py-10 bg-gray-50"
        data-tails-scripts="//unpkg.com/alpinejs"
      >
        <div className="max-w-4xl px-8 mx-auto lg:px-16">
          <h2 className="mb-2 text-xl font-bold text-center md:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="relative mt-12 space-y-5">
            <div
              x-data="{ show: false }"
              className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white"
            >
              <h4 className="flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-7 py-7 hover:text-gray-800">
                <span>Where do I go to upgrade my account?</span>
                <svg
                  className="w-6 h-6 transition-all duration-200 ease-out transform rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </h4>
              <p className="pt-0 -mt-2 text-gray-400 sm:text-lg py-7 px-7 ansClassName">
                You can upgrade your account by visiting the billing page.
              </p>
            </div>

            <div
              x-data="{ show: false }"
              className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white"
            >
              <h4 className="flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-7 py-7 hover:text-gray-800">
                <span>How do I use the community to market my project?</span>
                <svg
                  className="w-6 h-6 transition-all duration-200 ease-out transform rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </h4>
              <p className="pt-0 -mt-2 text-gray-400 sm:text-lg py-7 px-7">
                Marketing your project is very simple. You can use the trending
                page as a starting point, or you can directly message people in
                the community!
              </p>
            </div>

            <div
              x-data="{ show: false }"
              className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white"
            >
              <h4 className="flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-7 py-7 hover:text-gray-800">
                <span>How long will I have access to the community?</span>
                <svg
                  className="w-6 h-6 transition-all duration-200 ease-out transform rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </h4>
              <p className="pt-0 -mt-2 text-gray-400 sm:text-lg py-7 px-7">
                You will have unlimited access to the community once you
                complete the billing procedure; however, if you want to be able
                to post in the Trending section, you need to contact the adming.
              </p>
            </div>

            <div
              x-data="{ show: false }"
              className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white"
            >
              <h4 className="flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-7 py-7 hover:text-gray-800">
                <span>What if I need help with something?</span>
                <svg
                  className="w-6 h-6 transition-all duration-200 ease-out transform rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </h4>
              <p className="pt-0 -mt-2 text-gray-400 sm:text-lg py-7 px-7">
                If you need assistance the community you can contact support or
                you can visit our help section.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
