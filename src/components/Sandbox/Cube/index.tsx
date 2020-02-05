import { Canvas, useFrame } from "react-three-fiber";
import { useRef } from "react";

const Box: React.FC<{ position: any; scale: number; color: string }> = ({
  position,
  scale,
  color
}) => {
  const mesh = useRef<any | undefined | null>(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <mesh ref={mesh} position={position} scale={[scale, scale, scale]}>
      <torusBufferGeometry attach="geometry" args={[1, 0.2, 50, 200]} />
      <meshPhysicalMaterial
        reflectivity={0.5}
        attach="material"
        color={color}
      />
    </mesh>
  );
};

type CanvassStyle = {
  height: string | number;
  position: "fixed" | "relative" | "absolute";
};

const Cube: React.FC<{
  scale?: number;
  color?: string;
  ambient?: number;
  style?: CanvassStyle;
}> = ({
  scale = 1,
  color = "coral",
  ambient = 0.8,
  style = { height: "100vh", position: "fixed", top: 0, left: 0 }
}) => {
  return (
    <Canvas style={style}>
      <ambientLight intensity={ambient} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} scale={scale} color={color} />
    </Canvas>
  );
};

export default Cube;
