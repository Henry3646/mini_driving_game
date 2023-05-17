import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute } from "three";
import { TextureLoader } from "three";

export function Ground() {
    const [ref] = usePlane(
        () => ({
            type: 'Static',
            rotation: [-Math.PI / 2, 0, 0]
        }),
        useRef(null)
    )
    const gridMap = useLoader(
        TextureLoader,
        process.env.PUBLIC_URL + "/textures/grid.png"
    )


    const alphaMap = useLoader(
        TextureLoader,
        process.env.PUBLIC_URL + "/textures/alpha-map.png"
    )

    useEffect(() => {
        gridMap.anisotropy = 16
    }, [gridMap])

    const meshRef = useRef(null)
    const meshRef2 = useRef(null)

    useEffect(() => {
        let uvs = meshRef.current.geometry.attributes.uv.array
        meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2))

        let uvs2 = meshRef2.current.geometry.attributes.uv.array
        meshRef2.current.geometry.setAttribute("uv2", new BufferAttribute(uvs2, 2))
    }, [])

    return (
        <>
            <mesh
            ref={meshRef2}
            position={[45,-0.1,170]}
            rotation-x={-Math.PI * 0.5}
            >
                <planeGeometry args={[1500,1500]} />
                <meshBasicMaterial 
                opacity={0.4}
                alphaMap={gridMap}
                transparent={false}
                color={[0.05,0.2,0.08]}
                />
            </mesh>
            <mesh
            ref={meshRef}
            position={[45, -4, 170]}
            rotation-x={-Math.PI * 0.5}
            rotation-z={0}
            >
                <circleGeometry args={[550,50]}/>
                <MeshReflectorMaterial
                    alphaMap={alphaMap}
                    transparent={true}
                    color={[0.5,1,0.25]}
                    envMapIntensity={0.35}
                    metalness={0.5}
                    roughness={0.6}

                    dithering={true}
                    blur={[5000, 1000]}
                    mixBlur={1}
                    mixStrength={1.5}
                    mixContrast={0.75}
                    resolution={1000}
                    mirror={1}
                    depthScale={0}
                    minDepthThreshold={0.9}
                    maxDepthThreshold={1}
                    depthToBlurRatioBias={0.25}
                    debug={0}
                    reflectorOffset={-0.05}

                />
            </mesh>
        </>
    )
}