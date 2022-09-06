import React from "react";
import { useState } from "react";

const Sidebar = ({ Children }) => {
  const [show, setVisible] = useState(false);
  const [showli, setListVisible] = useState(false);
  const [showli2, setListVisible2] = useState(false);
  const [showli3, setListVisible3] = useState(false);
  const [showli4, setListVisible4] = useState(false);

  return (
    <div>
      <div className="grid px-2 py-4 md:block sticky top-20">
        <ul className="px-4 py-2">
          <li className="font-semibold text-[14px] text-gray-500">MAIN</li>
          <a href="/">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
              Dashboard
            </li>
          </a>
          <a href="/explore">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
              Explore
            </li>
          </a>
          <a href="/events">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
              Events
            </li>
          </a>
          <a href="/dm">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
              Direct Message
            </li>
          </a>
        </ul>
        <hr />
        <ul className="px-4 py-4">
          <li className="font-semibold text-[14px] text-gray-500">APPS</li>
          <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
            Calender
          </li>
          <a href="/kanban">
            <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
              Kanban
            </li>
          </a>
        </ul>
        <hr />
        <div className="px-4 py-4">
          <button
            className=" text-left font-semibold text-[14px] text-gray-500"
            onClick={() => setVisible(!show)}
          >
            GROUPS
          </button>
          {show ? (
            <ul>
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                <button onClick={() => setListVisible(!showli)}>
                  Get Started
                </button>
                {showli ? (
                  <>
                    <li>Introduction</li>
                    <li>Introduction</li>
                  </>
                ) : null}
              </li>
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                <button onClick={() => setListVisible2(!showli2)}>
                  Announcement
                </button>
                {showli2 ? (
                  <>
                    <li>Introduction</li>
                    <li>Introduction</li>
                  </>
                ) : null}
              </li>
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                <button onClick={() => setListVisible3(!showli3)}>
                  Announcement
                </button>
                {showli3 ? (
                  <>
                    <li>Introduction</li>
                    <li>Introduction</li>
                  </>
                ) : null}
              </li>
              <li className="my-1 py-1 px-2 text-[14px] rounded-md font-semibold w-52 hover:bg-blue-500 hover:text-gray-100">
                <button onClick={() => setListVisible4(!showli4)}>
                  Announcement
                </button>
                {showli4 ? (
                  <>
                    <li>Introduction</li>
                    <li>Introduction</li>
                  </>
                ) : null}
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
