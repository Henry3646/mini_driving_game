import { useGLTF } from "@react-three/drei"

export function Car3({...props}) {
    // 3D model for Car by by Creative Mango
    // https://sketchfab.com/3d-models/low-poly-car-93971323324243468f24d7da9d18f617
    const car = useGLTF("/mini_driving_game/models/car3.glb")
    // console.log(car2)
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            rotation-z={Math.PI/2}
            scale={[0.028,0.028,0.028]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            rotation-y={Math.PI}
            />
        </group>
    )
}

useGLTF.preload("/models/car3.glb")