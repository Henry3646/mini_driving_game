import { useGLTF } from "@react-three/drei"

export function Car1({...props}) {
    // 3D model for Car by Kenji.png
    // https://sketchfab.com/3d-models/low-poly-car-d5dac095911f4ea3a88645fde9136a5e
    const car = useGLTF("/mini_driving_game/models/car1.glb")
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

useGLTF.preload("/models/car1.glb")