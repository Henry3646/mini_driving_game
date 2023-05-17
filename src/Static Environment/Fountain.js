import { useGLTF } from "@react-three/drei"

export function Fountain({...props}) {
    // 3D model for Fountain by MichaelCamiloSaari
    // https://sketchfab.com/3d-models/low-poly-fountain-9964b5a56c364b31b4415b0ddcf60da2
    const car = useGLTF("/models/fountain.glb")
    // console.log(car)
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            rotation-z={Math.PI}
            scale={[16,16,16]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            />
        </group>
    )
}

useGLTF.preload("/models/fountain.glb")