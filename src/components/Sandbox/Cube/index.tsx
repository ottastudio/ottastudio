import { Canvas, useFrame } from "react-three-fiber";
import { useRef } from "react";

const Box: React.FC<{ position: any }> = ({ position }) => {
  const mesh = useRef<any | undefined | null>(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <mesh ref={mesh} position={position} scale={[1, 1, 1]}>
      <torusBufferGeometry attach="geometry" args={[1.5, 0.25, 100, 200]} />
      <meshPhysicalMaterial attach="material" color="coral" />
    </mesh>
  );
};

const Cube: React.FC<{}> = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Cube;
