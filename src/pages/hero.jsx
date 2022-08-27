import Circle from "../components/Circle2.jsx";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Hero() {
  return (
    <div className="main-container bg-gradient-to-r from-[#1c022a] to-[#020726]">
      <div className="nav bg-white">Navigation</div>
      {/* _______ 3D CIRCLE _________ */}
      <div className="relative h-screen">
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={0.5} />
          <Circle />
        </Canvas>
      </div>
      {/** Hero Section______________________________________ */}
      <div className="hero-section w-full absolute  top-72 md:top-96  text-white">
        <div className=" grid w-full content-center justify-items-center text-white ">
          <p className="relative font-mont text-[112px] text-[#f5f5f57d] leading-3">2022</p>
          <p className="absolute font-oswald text-[42px] text-white leading-6">------ HAPPY HAPPY ------</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
