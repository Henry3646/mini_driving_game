import { useGLTF } from "@react-three/drei"

export function Car2({...props}) {
    // 3D model for Car by Lawrence Pompey
    // https://sketchfab.com/3d-models/low-poly-car-3bee85b8530046e5bb11a57965129187
    const car = useGLTF("/mini_driving_game/models/car2.glb")
    // console.log(car)
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            scale={[5.0,5.0,5.0]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            />
        </group>
    )
}

useGLTF.preload("/models/car2.glb")