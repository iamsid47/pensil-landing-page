import React from "react";

function EventCards() {
  return (
    <>
      <section className="w-full sm:p-8">
        <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2 md:gap-8">
          <div
            className="overflow-hidden text-center bg-black rounded-xl my-5 lg:my-2"
            data-rounded=""
            data-rounded-max="rounded-full"
          >
            <div className="px-5 py-20 md:px-5 md:py-5">
              <div className="w-auto h-10 mx-auto mt-8 mb-7">
                <h1 className="text-3xl text-white uppercase leading-tight font-extrabold">
                  #LATEST
                </h1>
              </div>
              <p className="text-xl text-gray-100">
                Upcoming Coding Event <br /> @ 7:00 PM IST
              </p>
              <div className="flex flex-col items-center justify-center my-7 sm:flex-row sm:space-x-5">
                <a
                  href="#_"
                  className="flex items-center w-auto mx-auto text-xl leading-tight text-center text-blue-500 hover:underline sm:mx-0"
                  data-primary="blue-500"
                >
                  <span>Try it free</span>
                  <svg
                    className="w-4 transform -rotate-45 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#_"
                  className="flex items-center w-auto mx-auto text-xl leading-tight text-center text-blue-500 hover:underline sm:mx-0"
                  data-primary="blue-500"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://source.unsplash.com/random/1280x720/?coding" />
          </div>

          <div
            className="relative overflow-hidden text-center bg-gray-100 rounded-xl my-5 lg:my-2"
            data-rounded=""
            data-rounded-max="rounded-full"
          >
            <div className="relative z-20 px-5 py-10 sm:py-20 md:px-5 md:py-5 h-72 md:h-auto">
              <div className="w-auto mx-auto mt-8 transform -translate-x-3 h-9 mb-7" />
              <p className="text-xl text-gray-100">
                Get 3% Daily Cash back on purchases from <br />
                Apple when you use Apple Card.
              </p>
              <div className="flex flex-col items-center justify-center my-7 sm:flex-row sm:space-x-5">
                <a
                  href="#_"
                  className="flex items-center w-auto mx-auto text-xl leading-tight text-center text-blue-500 hover:underline sm:mx-0"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <img
              src="https://source.unsplash.com/random/1280x720/?aesthetic-dark"
              className="relative inset-0 object-cover w-full h-full lg:mt-0 -mt-72 lg:absolute"
            />
          </div>

          <div
            className="overflow-hidden text-center bg-rose-100 rounded-xl my-5 lg:my-2"
            data-rounded=""
            data-rounded-max="rounded-full"
          >
            <div className="px-5 py-20 md:px-5 md:py-5">
              <img
                src="https://cdn.devdojo.com/images/april2021/apple-arcade-logo.png"
                className="w-auto h-10 mx-auto mt-8 mb-7"
              />
              <p className="text-xl text-gray-800">
                Save Water and Clean The Environment Group Gathering
              </p>
              <div className="flex flex-col items-center justify-center my-7 sm:flex-row sm:space-x-5">
                <a
                  href="#_"
                  className="flex items-center w-auto mx-auto text-xl leading-tight text-center text-blue-500 hover:underline sm:mx-0"
                  data-primary="blue-500"
                >
                  <span>Try it free</span>
                  <svg
                    className="w-4 transform -rotate-45 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#_"
                  className="flex items-center w-auto mx-auto text-xl leading-tight text-center text-blue-500 hover:underline sm:mx-0"
                  data-primary="blue-500"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://source.unsplash.com/random/1280x720/?cool" />
          </div>

          <div
            className="relative overflow-hidden text-center bg-gray-100 rounded-xl my-5 lg:my-2"
            data-rounded=""
            data-rounded-max="rounded-full"
          >
            <div className="relative z-20 px-5 py-10 sm:py-20 md:px-5 md:py-5 h-72 md:h-auto">
              <img
                src="https://cdn.devdojo.com/images/april2021/apple-news-logo.png"
                className="w-auto mx-auto mt-8 mb-4 transform -translate-x-3 h-9"
              />
              <p className="text-xl text-white">
                Hundreds of magazines and <br />
                leading newspapers. One subscription.
              </p>
              <div className="flex flex-col items-center justify-center my-4 sm:flex-row sm:space-x-5">
                <a
                  href="#_"
                  className="items-center hidden w-auto mx-auto text-xl leading-tight text-center text-pink-100 sm:flex hover:underline sm:mx-0"
                >
                  <span>Try it free</span>
                  <svg
                    className="w-4 transform -rotate-45 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#_"
                  className="flex items-center w-auto mx-auto text-xl leading-tight text-center text-pink-100 hover:underline sm:mx-0"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <img
              src="https://cdn.devdojo.com/images/april2021/apple-news.jpg"
              className="relative inset-0 object-cover w-full h-full -mt-72 lg:mt-0 lg:absolute"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default EventCards;
