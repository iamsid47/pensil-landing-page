import React from "react";
import { useState, useEffect } from "react";

const getDatafromLS = () => {
  const data = localStorage.getItem("Org");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Settings() {
  const [Org, setOrg] = useState(getDatafromLS());

  //User Input State
  const [communityName, setCommunityName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [communityLogo, setcommunityLogo] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState();
  const [tagline, setTagline] = useState("");

  // handle submission
  const handleOrgSubmit = (e) => {
    e.preventDefault();
    //create an obj
    let organization = {
      communityName,
      firstName,
      lastName,
      companyName,
      email,
      tagline,
      communityLogo,
      profilePic,
    };
    setOrg([organization]);
    setCommunityName("");
    setFirstName("");
    setLastName("");
    setCompanyName("");
    setEmail("");
    setTagline("");
    setcommunityLogo("");
    setprofilePic("");
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Org", JSON.stringify(Org));
  }, [Org]);

  return Org.map((organization) => (
    <>
      <section class="relative flex items-center justify-center w-full h-full bg-white">
        <div class="relative hidden w-1/4 h-full bg-center bg-cover lg:block"></div>
        <div
          class="absolute top-0 left-0 hidden w-1/4 h-full bg-center bg-cover lg:block"
          style={{
            backgroundImage: `url('https://cdn.devdojo.com/images/november2021/scenic.jpeg')`,
          }}
        >
          <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900"></div>
          <a
            href="/"
            class="absolute bottom-0 left-0 flex items-center w-auto m-5 font-medium text-white group"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            To The Dashboard
            <span class="absolute overflow-hidden left-0 block pl-5 h-0.5 w-full bottom-0 -mb-0.5">
              <span class="absolute rounded-full bg-white duration-200 ease-in-out transition-all h-0.5 w-0 group-hover:w-full"></span>
            </span>
          </a>
        </div>

        <div class="flex items-center justify-center w-full h-full px-8 py-32 lg:w-3/4 sm:px-0">
          <div class="w-full max-w-sm mx-auto">
            <div class="relative flex items-center mb-8">
              <a
                href="#_"
                class="inline-block px-3 p-1.5 text-left text-white bg-gray-800 rounded no-underline cursor-pointer focus:no-underline"
              >
                <span class="text-lg font-bold leading-tight">
                  {organization.companyName}
                </span>
              </a>
            </div>
            <h1 class="text-gray-600 font-medium text-2xl border-b border-gray-300 pb-2.5 mb-2.5">
              Edit Your Account Details
            </h1>
            <div class="relative flex flex-col-reverse mb-5">
              <label
                type="text"
                name="email"
                class="border-gray-300 focus:border-blue-600 peer border rounded-md px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600 focus:ring-opacity-0 caret-blue-600"
                placeholder="Email Address"
              >
                {organization.email}
              </label>
              <label
                for="email"
                class="mb-2 font-medium text-gray-500 peer-focus:text-blue-600"
              >
                Email
              </label>
            </div>

            <div class="relative flex flex-col-reverse mb-5">
              <label
                type="password"
                name="password"
                class="peer border-gray-300 focus:border-blue-600 border rounded-md px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600 focus:ring-opacity-0 caret-blue-600"
                placeholder="Password"
              >
                ********
              </label>
              <label
                for="password"
                class="mb-2 font-medium text-gray-500 peer-focus:text-blue-600"
              >
                Password
              </label>
            </div>

            <div class="flex items-center justify-between mb-5"></div>

            <div class="relative flex flex-col">
              <a
                href="#_"
                class="w-full rounded bg-blue-600 hover:opacity-90 text-white py-3.5 px-2 text-center font-medium"
              >
                Change Password
              </a>
              <a
                href="#_"
                class="w-full mt-5 flex items-center shadow justify-center rounded bg-white border border-gray-300 text-gray-600 py-3.5 px-2 text-center font-medium"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill-rule="nonzero" fill="none">
                    <path
                      d="M23.998 13.278a10.881 10.881 0 00-.252-2.52H12.414v4.576h6.653a6.034 6.034 0 01-2.466 4l-.024.15 3.582 2.836.248.025c2.275-2.149 3.591-5.31 3.591-9.067"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.585 24.828c3.303 0 6.078-1.1 8.105-2.998l-3.86-3.027a7.174 7.174 0 01-4.24 1.238c-3.173-.02-5.978-2.093-6.964-5.144l-.146.014-3.776 2.954-.049.137c2.07 4.19 6.301 6.83 10.93 6.826"
                      fill="#34A853"
                    />
                    <path
                      d="M4.966 14.986a8.672 8.672 0 01-.383-2.542 9.2 9.2 0 01.373-2.541l-.004-.168-3.604-3.114-.118.06a14.114 14.114 0 000 11.526l3.736-3.221"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.544 4.785a6.662 6.662 0 014.708 1.844l3.438-3.41A11.611 11.611 0 0012.54.002C7.933 0 3.72 2.637 1.655 6.825L5.593 9.93c.992-3.052 3.789-5.127 6.951-5.146"
                      fill="#EB4335"
                    />
                  </g>
                </svg>
                <span class="ml-2.5">Connect Your Google Account</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  ));
}

export default Settings;
