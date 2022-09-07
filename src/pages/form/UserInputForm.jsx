import React from "react";

function UserInputForm() {
  return (
    <>
      <div class="py-10 bg-white md:py-16">
        <div class="px-10 mx-auto max-w-7xl md:px-16">
          <div class="max-w-3xl mx-auto mb-10 md:mb-16">
            <p class="text-xs font-bold text-blue-500 uppercase">
              By Pensil ❤️
            </p>
            <h2 class="mt-1 text-2xl font-bold text-left text-gray-800 lg:text-3xl md:mt-2">
              Start Your Own Community!
            </h2>
            <p class="max-w-screen-md mx-auto mt-4 text-left text-gray-500 md:text-lg md:mt-6">
              Fill out some simple questions below and get started with your
              brand new community! If you need some help, you can contact us{" "}
              <a
                href="mailto:saakshiraut28@gmail.com"
                class="font-medium text-blue-500 underline"
              >
                here
              </a>
              !
            </p>
          </div>
          <form class="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Community Name
              </label>
              <input
                name="community-name"
                placeholder="Awesome Coders"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <div>
              <label
                for="first-name"
                class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Community Logo
              </label>
              <input
                name="community-logo"
                placeholder="Community Logo"
                type="file"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <div>
              <label
                for="first-name"
                class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                First name
              </label>
              <input
                name="first-name"
                placeholder="Jon"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                for="last-name"
                class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Last name
              </label>
              <input
                name="last-name"
                placeholder="Snow"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="company"
                class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Company Name
              </label>
              <input
                name="company"
                placeholder="Sample Company. Co"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Email
              </label>
              <input
                name="email"
                placeholder="dudethisiscool23@gmail.com"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="Community-Tagline"
                class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Community Tagline
              </label>
              <input
                name="Community-Tagline"
                placeholder="Rising Coders Of Today!"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div class="col-span-1">
              <label
                for="Profile Image"
                class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Profile Image
              </label>
              <input
                name="Profile Image"
                type="file"
                class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              ></input>
            </div>
            <div className="col-span-2">
              <button className="px-6 py-2 mt-2 shadow-lg hover:bg-blue-700 bg-blue-500 rounded-xl text-white">
                Submit
              </button>
            </div>
          </form>
          <p class="max-w-3xl mx-auto mt-5 text-xs text-gray-400">
            Please allow up to 24-48 hour response during the weekdays.
          </p>
        </div>
      </div>
    </>
  );
}

export default UserInputForm;
