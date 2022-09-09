import React from "react";

function Testimonial() {
  return (
    <>
      <section className="flex items-center justify-center w-full px-8 py-10 bg-white border-t border-gray-200 md:py-16 lg:py-20 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
              <p
                className="mb-5 text-sm font-medium tracking-tight text-indigo-500 uppercase sm:text-base"
                data-primary="indigo-500"
              >
                Our customers love our product
              </p>
              <h2 className="text-5xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none md:text-6xl">
                Testimonials
              </h2>
              <p className="my-6 text-xl font-medium text-gray-500">
                Don't just take our word for it, read from our extensive list of
                member testimonials.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
              <div className="w-full xl:w-1/2 xl:pr-8">
                <blockquote
                  className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:shadow ease"
                  data-rounded="rounded-lg"
                  data-rounded-max="rounded-full"
                >
                  <div className="flex flex-col pr-8">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                        data-primary="indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                      </svg>
                      <p className="mt-2 text-base text-gray-600">
                        I'm loving these groups! Very nice people and lots of
                        fun.
                      </p>
                    </div>

                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                      Sandra Walton{" "}
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        - Student
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </blockquote>
                <blockquote
                  className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:shadow ease xl:mb-0"
                  data-rounded="rounded-lg"
                  data-rounded-max="rounded-full"
                >
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                        data-primary="indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                      </svg>
                      <p className="mt-2 text-base text-gray-600">
                        Really loving the community! A lot to learn from here
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                      Kenny Jones{" "}
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        - Class 9 B
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </blockquote>
              </div>
              <div className="w-full xl:w-1/2 xl:pl-8">
                <blockquote
                  className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:shadow ease"
                  data-rounded="rounded-lg"
                  data-rounded-max="rounded-full"
                >
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                        data-primary="indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                      </svg>
                      <p className="mt-2 text-base text-gray-600">
                        Extremely helpful in every single project we have done!
                      </p>
                    </div>

                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                      Mike Smith
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        - Developer
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    alt=""
                  />
                </blockquote>
                <blockquote
                  className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:shadow ease"
                  data-rounded="rounded-lg"
                  data-rounded-max="rounded-full"
                >
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                        data-primary="indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                      </svg>
                      <p className="mt-2 text-base text-gray-600">
                        Finally a quick and easy way to release my projects to
                        the community!
                      </p>
                    </div>

                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                      Molly Sanchez{" "}
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        - Geek
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                  />
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
