import React from "react";
import { useState } from "react";

const Sidebar = ({ Children }) => {
  const [showli, setListVisible] = useState(false);
  const [showli2, setListVisible2] = useState(false);
  const [showli3, setListVisible3] = useState(false);
  const [showli4, setListVisible4] = useState(false);

  return (
    <div className="hidden lg:block">
      <div className="lg:grid px-2 py-1 md:block sticky top-20">
        <ul className="px-4 py-2">
          <li className="font-semibold text-[14px] text-gray-500">MAIN</li>
          <a href="/">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
              🚀 Dashboard
            </li>
          </a>
          <a href="/explore">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
              ⭐ Explore
            </li>
          </a>
          <a href="/events">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
              🌃 Events
            </li>
          </a>
          <a href="/dm">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
              📎 Direct Message
            </li>
          </a>
        </ul>
        <hr />
        <ul className="px-4 py-4">
          <li className="font-semibold text-[14px] text-gray-500">APPS</li>
          <a href="/Calendar">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
              📅 Calender
            </li>
          </a>
          <a href="/KanbanBoard">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
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
                className="font-semibold flex items-center text-sm px-2 py-1 hover:bg-gray-100 lg:w-52 rounded-lg"
                onClick={() => setListVisible(!showli)}
              >
                • Getting Started
              </button>
              {showli ? (
                <>
                  <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
                    Intros
                  </li>
                </>
              ) : null}
            </li>
            <li>
              <button
                className="font-semibold flex items-center text-sm px-2 py-1 hover:bg-gray-100 lg:w-52 rounded-lg"
                onClick={() => setListVisible2(!showli2)}
              >
                • Announcement
              </button>
              {showli2 ? (
                <>
                  <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
                    Hello World
                  </li>
                  <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
                    Coding Competition
                  </li>
                </>
              ) : null}
            </li>
            <li>
              <button
                className="font-semibold flex items-center text-sm px-2 py-1 hover:bg-gray-100 lg:w-52 rounded-lg"
                onClick={() => setListVisible3(!showli3)}
              >
                • Class 9 B
              </button>
              {showli3 ? (
                <>
                  <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
                    Assignments
                  </li>
                  <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
                    Examns
                  </li>
                </>
              ) : null}
            </li>
            <li>
              <button
                className="font-semibold flex items-center text-sm px-2 py-1 hover:bg-gray-100 lg:w-52 rounded-lg"
                onClick={() => setListVisible4(!showli4)}
              >
                • Party Group
              </button>
              {showli4 ? (
                <>
                  <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
                    Music
                  </li>
                  <li className="my-1 py-1 px-4 text-[14px] rounded-md font-semibold lg:w-52 hover:bg-blue-500 hover:text-gray-100">
                    Movies
                  </li>
                </>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
