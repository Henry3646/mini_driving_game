import { useBox } from "@react-three/cannon";

const debug = false

export function ColliderBox({position, scale, rotation}) {
    useBox(() => ({
        args: scale,
        position,
        type: "Static"
    }))

    return (debug && (
        <mesh position={position} rotation-y={rotation}>
            <boxGeometry args={scale} />
            <meshBasicMaterial transparent={true} opacity={0.4} />
        </mesh>
    ))
}