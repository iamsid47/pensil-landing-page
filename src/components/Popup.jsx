import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

<Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
  <OrbitControls enableZoom={false} />
  <ambientLight intensity={0.5} />
  <directionalLight position={[-2, 5, 2]} intensity={0.5} />
  <Circle />
</Canvas>;
