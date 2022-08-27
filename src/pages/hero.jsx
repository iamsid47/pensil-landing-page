
import Circle from '../components/Circle2.jsx';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function Hero(){
  return (
    <div className="main-container bg-black">
     <div>
     <Canvas className="">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={0.5} />
            <Circle />
          </Canvas>
     </div>
      <div>Hello</div>
    </div>
  );
}

export default Hero;
