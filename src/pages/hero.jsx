import Circle from "../components/Circle2.jsx";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Hero() {
  return (
    <div className="main-container bg-black">
      <div className="h-screen" >
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 0] }} resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={0.5} />
          <Circle />
        </Canvas>
      </div>
      
    </div>
  );
}

export default Hero;
