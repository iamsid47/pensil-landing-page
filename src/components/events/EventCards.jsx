import React from "react";

function EventCards() {
  return (
    <>
      <section className="w-full sm:p-8">
        <div className="mt-10 mb-5 text-5xl font-bold">
          <span className="text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
            Latest Events
          </span>
        </div>
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
                  <span>Register Now</span>
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
              <p className="text-3xl text-gray-100">
                Class 9B Singing Competition! <br />
              </p>
              <div className="flex flex-col items-center justify-center my-7 sm:flex-row sm:space-x-5">
                <a
                  href="#_"
                  className="flex items-center w-auto mx-auto text-xl leading-tight text-center text-blue-500 hover:underline sm:mx-0"
                >
                  <span>Participate Now</span>
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
                src="https://source.unsplash.com/random/1280x720/?cool"
                className="rounded-lg"
              />
              <p className="text-xl text-gray-800 pt-14">
                Save Water and Clean The Environment Group Gathering
              </p>
              <div className="flex flex-col items-center justify-center my-7 sm:flex-row sm:space-x-5">
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
          </div>

          <div
            className="relative overflow-hidden text-center bg-gray-100 rounded-xl my-5 lg:my-2"
            data-rounded=""
            data-rounded-max="rounded-full"
          >
            <div className="relative z-20 px-5 py-10 sm:py-20 md:px-5 md:py-5 h-72 md:h-auto">
              <p className="text-4xl font-bold p-4 text-white mt-14">
                Join 100s of Entrepreneurs <br />
                in this virtual zoom event!
              </p>
              <div className="flex flex-col items-center justify-center my-4 sm:flex-row sm:space-x-5">
                <a
                  href="#_"
                  className="flex items-center w-auto mx-auto text-xl leading-tight text-center text-pink-100 hover:underline sm:mx-0"
                >
                  <span>Join Now</span>
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
              src="https://images.unsplash.com/photo-1554167725-89bf8ab26514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="relative inset-0 object-cover w-full h-full -mt-72 lg:mt-0 lg:absolute"
            />
          </div>
        </div>
        <div>
          <div className="p-6 mt-16 text-center">
            <h1 className="text-5xl">Previous Events</h1>
          </div>
          <div>
            <section class="w-full bg-white">
              <div class="max-w-3xl pb-4 mx-auto lg:py-4">
                <div class="pb-8 border-b md:px-8 md:pb-12 lg:pb-16 border-gray-150 dark:border-gray-750 sm:text-center">
                  <a href="#_" class="block mb-10">
                    <img
                      src="https://images.unsplash.com/photo-1516737488405-7b6d6868fad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      class="object-cover object-center w-full md:rounded-2xl shadow-lg h-72"
                    />
                  </a>

                  <div class="w-full px-6 md:px-0">
                    <h2 class="mt-4 mb-5">
                      <a
                        href="#_"
                        class="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl"
                      >
                        Dance Competition
                      </a>
                    </h2>

                    <p class="mt-5 mb-2 text-xs text-gray-500 md:text-sm">
                      May 11, 2021 · Duration: 7 Days
                    </p>
                    <p class="text-base text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold leading-tight bg-clip-text lg:text-lg">
                      <span>Winner - Adam Smith</span>
                    </p>
                  </div>
                </div>

                <div class="pb-8 border-b md:px-4 md:pb-12 lg:pb-16 border-gray-150 dark:border-gray-750 sm:text-center">
                  <a href="#_" class="block mt-0 mb-10 md:mt-14">
                    <img
                      src="https://images.unsplash.com/photo-1515490480959-ce9152f7ea2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      class="object-cover object-center w-full md:rounded-2xl shadow-lg h-72"
                    />
                  </a>

                  <div class="w-full px-6 md:px-0">
                    <h2 class="mt-4 mb-5">
                      <a
                        href="#_"
                        class="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl"
                      >
                        Traffic Rules - Master Class
                      </a>
                    </h2>
                    <p class="mt-5 mb-2 text-xs text-gray-500 md:text-sm">
                      May 02, 2021 · Duration: 1 Day
                    </p>
                    <p class="text-base text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold leading-tight bg-clip-text lg:text-lg">
                      <span>Winner - Will George</span>
                    </p>
                  </div>
                </div>

                <div class="md:px-4 sm:text-center">
                  <a href="#_" class="block mt-0 mb-10 md:mt-14">
                    <img
                      src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      class="object-cover object-center w-full md:rounded-2xl shadow-lg h-72"
                    />
                  </a>

                  <div class="w-full px-6 md:px-0">
                    <h2 class="mt-4 mb-5">
                      <a
                        href="#_"
                        class="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl"
                      >
                        Designing for Your Future
                      </a>
                    </h2>

                    <p class="mt-5 mb-2 text-xs text-gray-500 md:text-sm">
                      June 12, 2021 · Duration: 4 Days
                    </p>
                    <p class="text-base text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold leading-tight bg-clip-text lg:text-lg">
                      <span>Winner - Steve Adams</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventCards;
