import { useGLTF } from "@react-three/drei"

export function Tree({...props}) {
    // 3D model for tree by sycoinc
    // https://sketchfab.com/3d-models/low-poly-tree-concept-e815f8acd6d34528a82feef38d5af880
    const { nodes, materials } = useGLTF("/mini_driving_game/models/tree.glb")
    // console.log(nodes)
    return (
        <group
            {...props}
            dispose={null}
            rotation-y={-Math.PI}
            rotation-x={Math.PI/2}
            scale={[0.08,0.08,0.08]}
        >
            <mesh
                geometry={nodes.Object_2.geometry}
                material={materials.initialShadingGroup} 
                
            />
        </group>
    )
}

useGLTF.preload("/models/tree.glb")