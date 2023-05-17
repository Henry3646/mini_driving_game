import { useGLTF } from "@react-three/drei"

export function Building1({...props}) {
    // 3D model for Building by Ahmed Galeb
    // https://sketchfab.com/3d-models/low-poly-building-a7ea9379362244319e13dc8b22c460c6
    const car = useGLTF("/mini_driving_game/models/building1.glb")
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            rotation-z={Math.PI}
            scale={[8,8,8]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            />
        </group>
    )
}

useGLTF.preload("/models/building1.glb")