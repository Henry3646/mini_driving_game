const debug = false;

export const WheelDebug = ({ radius, wheelRef }) => {
  return debug && (
    <group ref={wheelRef}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[radius, radius, .015, 160]} />
        <meshNormalMaterial transparent={true} opacity={1} />
      </mesh>
    </group>
  );
};