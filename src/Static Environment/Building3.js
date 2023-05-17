import { useGLTF } from "@react-three/drei"

export function Building3({...props}) {
    // 3D model for Building by Nithin.Steven
    // https://sketchfab.com/3d-models/low-poly-building-24879058349d41d5b494946da558baaa
    const car = useGLTF("/mini_driving_game/models/building3.glb")
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            rotation-z={-Math.PI/2}
            scale={[3.2,3.2,3.2]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            />
        </group>
    )
}

useGLTF.preload("/models/building3.glb")