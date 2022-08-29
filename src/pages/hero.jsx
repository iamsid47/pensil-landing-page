import Circle from "../components/Circle2.jsx";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Hero() {
  return (
    <div className="main-container py-2">
      <div className="nav bg-white px-2 py-2">
        <div className="flex place-content-between mx-4">
        <img
            class="w-10 h-10 relative rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNEGd_0C7SMlckxJD2HCR5vBWwGlBOSWrlD83IUBYUA&s"
            alt="Profile"
          />
          <span className="text-4xl hidden md:block">Pencil</span>
          <button className="leding-10">Login</button>
        </div>
      </div>
      {/** Hero Section______________________________________ */}
      
      <div className="grid grid-cols-1 md:grid-cols-5 bg-white w-full">
        <div className="grid px-4 py-4">
          <ul className="px-4 py-2">
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">Dashboard</li>
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">Explore</li>
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">Events</li>
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">Group Chat</li>
          </ul>
          <hr />
          <ul className="px-4 py-2">
            <li >Apps</li>
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">Calender</li>
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">Kanban</li>
          </ul>
          <hr />
          <ul className="px-4 py-2">
            <li >Direct Message</li>
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">Anderson</li>
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">Benjamin</li>
            <li className="my-1 py-1 px-1 rounded-md font-semibold w-52 hover:bg-cyan-400">George</li>
          </ul>
        </div>
        <div className="bg-black col-span-3">
          abcd
        </div>
        <div className="bg-white">
        <div className="relative h-56">
          <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={0.5} />
            <Circle />
          </Canvas>
          </div>
          <div className="px-4 py-4 ">
            <div className="px-4 py-4 bg-[#a5a5a5] rounded-md shadow-lg">
              <div>
                Trending Post
              </div>
            </div>
          </div> 
        </div>
      </div>
      
    </div>
  );
}

export default Hero;

/* _______ 3D CIRCLE _________ 
<div className="relative ">
<Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
  <OrbitControls enableZoom={false} />
  <ambientLight intensity={0.5} />
  <directionalLight position={[-2, 5, 2]} intensity={0.5} />
  <Circle />
</Canvas>
</div> */