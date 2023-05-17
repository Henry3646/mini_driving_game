import { useGLTF } from "@react-three/drei"

export function Store1({...props}) {
    // 3D model for Store by Nikolanchino
    // https://sketchfab.com/3d-models/small-store-bafd069c767246718041d062f99e6ae3
    const car = useGLTF("/models/store1.glb")
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            //rotation-z={Math.PI}
            scale={[0.55,0.55,0.55]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            />
        </group>
    )
}

useGLTF.preload("/models/store1.glb")