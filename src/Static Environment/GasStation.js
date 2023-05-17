import { useGLTF } from "@react-three/drei"

export function GasStation({...props}) {
    // 3D model for Gas Station by Virginia Vidonis
    // https://sketchfab.com/3d-models/low-poly-gas-station-e2d22c2e3a2c455ba1ed9de93da809b3
    const car = useGLTF("/models/gas_station.glb")
    // console.log(car)
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            rotation-z={Math.PI}
            scale={[4.5,4.5,4.5]}
        >
            <primitive 
            object={car.scene} 
            rotation-x={Math.PI / 2}
            />
        </group>
    )
}

useGLTF.preload("/models/gas_station.glb")