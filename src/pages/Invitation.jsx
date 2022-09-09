import React from "react";

function Invitation() {
  return (
    <>
      <section class=" px-4 py-16">
        <div class=" mx-auto">
          <div class="flex flex-col items-center md:flex-row">
            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
              <p
                class="font-medium text-blue-500 uppercase"
                data-primary="blue-500"
              >
                Grow Your Community!
              </p>
              <h2 class="text-4xl font-extrabold leading-tight">
                Invite your clubmates and hangout on Pensil!
              </h2>
            </div>

            <div class="w-full mt-16 md:mt-0 md:w-3/5">
              <div
                class="relative z-10 h-auto px-10 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl"
                data-rounded="rounded-lg"
                data-rounded-max="rounded-full"
              >
                <h3 class="mb-6 text-xl font-medium text-center">
                  Here's your customized invite link!
                </h3>
                <label
                  type="text"
                  name="text"
                  class="block w-full border-gray-300 my-5 text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text focus:border-blue-600 peer border rounded-md px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600 focus:ring-opacity-0 caret-blue-600"
                >
                  https://invite.pensil.in/wRlks
                </label>
                <div class="block">
                  <button
                    class="w-full px-3 py-4 font-medium text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg"
                    data-primary="blue-600"
                    data-rounded="rounded-lg"
                    onClick={() => alert("Link Copied!")}
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Invitation;
