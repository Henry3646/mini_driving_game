import { useGLTF } from "@react-three/drei"

export function Building2({...props}) {
    // 3D model for Building by Ghowst
    // https://sketchfab.com/3d-models/house-building-low-poly-eb0379c41a994140ba02ae9373bf77a0
    const car = useGLTF("/models/building2.glb")
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            rotation-z={-Math.PI/2}
            scale={[4,4,4]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            />
        </group>
    )
}

useGLTF.preload("/models/building2.glb")