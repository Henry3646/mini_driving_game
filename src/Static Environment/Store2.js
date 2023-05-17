import { useGLTF } from "@react-three/drei"

export function Store2({...props}) {
    // 3D model for Store by Emma-Lie Kamping
    // https://sketchfab.com/3d-models/low-poly-cafe-d8445f89454f49e388895fe806beca69
    const car = useGLTF("/mini_driving_game/models/store2.glb")
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            //rotation-z={Math.PI}
            scale={[0.06,0.06,0.06]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            />
        </group>
    )
}

useGLTF.preload("/models/store2.glb")