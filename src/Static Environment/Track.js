import { useLoader} from '@react-three/fiber'
import { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Track() {
    // 3D model for Track by me :)

    const ref = useRef(null)
    
    const result2 = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/models/H-track.glb"
    )


    let geometry2 = result2.scene

    return (
        <mesh position={[290,30.9,395]} scale={[15,110,12]} >
            <primitive 
                ref={ref}
                object={geometry2} 
            />
            <meshBasicMaterial
                toneMapped={false}
            />

        </mesh>
    )
}