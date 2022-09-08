import React from "react";
import { useState } from "react";

const Sidebar = ({ Children }) => {
  const [open, setOpen] = useState(true);
  const [showli, setListVisible] = useState(false);
  const [showli2, setListVisible2] = useState(false);
  const [showli3, setListVisible3] = useState(false);
  const [showli4, setListVisible4] = useState(false);

  return (
    <div className="hidden md:block">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`cursor-pointer duration-500 w-7 ${
            open && "rotate-[360deg]"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>

        <div className="lg:grid px-2 py-1 md:block sticky top-20">
          <ul className="px-4 py-2">
            <li className="font-semibold text-[14px] text-gray-500">MAIN</li>
            <a href="/">
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                🚀 Dashboard
              </li>
            </a>
            <a href="/explore">
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                ⭐ Explore
              </li>
            </a>
            <a href="/events">
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                🌃 Events
              </li>
            </a>
            <a href="/dm">
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                📎 Direct Message
              </li>
            </a>
          </ul>
          <hr />
          <ul className="px-4 py-4">
            <li className="font-semibold text-[14px] text-gray-500">APPS</li>
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
              📅 Calender
            </li>
            <a href="/KanbanBoard">
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                ✅ Kanban
              </li>
            </a>
          </ul>
          <hr />
          <div className="px-4 py-4">
            <button className=" text-left font-semibold text-[14px] text-gray-500">
              GROUPS
            </button>

            <ul>
              <li>
                <button
                  className="font-semibold flex items-center text-sm px-2 py-1 hover:bg-gray-100 w-52 rounded-lg"
                  onClick={() => setListVisible(!showli)}
                >
                  • Getting Started
                </button>
                {showli ? (
                  <>
                    <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                      Intros
                    </li>
                  </>
                ) : null}
              </li>
              <li>
                <button
                  className="font-semibold flex items-center text-sm px-2 py-1 hover:bg-gray-100 w-52 rounded-lg"
                  onClick={() => setListVisible2(!showli2)}
                >
                  • Announcement
                </button>
                {showli2 ? (
                  <>
                    <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                      Hello World
                    </li>
                    <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                      Coding Competition
                    </li>
                  </>
                ) : null}
              </li>
              <li>
                <button
                  className="font-semibold flex items-center text-sm px-2 py-1 hover:bg-gray-100 w-52 rounded-lg"
                  onClick={() => setListVisible3(!showli3)}
                >
                  • Class 9 B
                </button>
                {showli3 ? (
                  <>
                    <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                      Assignments
                    </li>
                    <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                      Examns
                    </li>
                  </>
                ) : null}
              </li>
              <li>
                <button
                  className="font-semibold flex items-center text-sm px-2 py-1 hover:bg-gray-100 w-52 rounded-lg"
                  onClick={() => setListVisible4(!showli4)}
                >
                  • Party Group
                </button>
                {showli4 ? (
                  <>
                    <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                      Music
                    </li>
                    <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                      Movies
                    </li>
                  </>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
