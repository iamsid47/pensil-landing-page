import React from 'react';



const Sidebar = ({Children}) => {

    return <div>
        <div className="grid px-2 py-4" >

          <ul className="px-4 py-2">
          <a href="/"><li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Dashboard</li></a>
            <a href="/explore"><li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Explore</li></a>
            <a href="/events"><li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Events</li></a>
            <a href="/dm"><li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Direct Message</li></a>
          </ul>
          <hr />
          <ul className="px-4 py-4">
            <li className="font-semibold text-[14px]">APPS</li>
            <li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Calender</li>
            <li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Kanban</li>
          </ul>
          <hr />
          <ul className="px-4 py-4">
            <li className="font-semibold text-[14px]">GROUPS</li>
            <li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Gaming</li>
            <li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Python</li>
            <li className="my-1 py-1 px-1 text-[14px] rounded-md font-semibold w-52 hover:bg-cyan-400">Java</li>
        </ul>
        </div>
    </div>
}

export default Sidebar;