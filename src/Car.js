import { useBox, useRaycastVehicle } from "@react-three/cannon"
import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Quaternion, Vector3 } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useControls } from "./useControls"
import { useWheels } from "./useWheels"
import { WheelDebug } from "./WheelDebug"

export function Car({ thirdPerson }) {
    // 3D Model for Car by yokatann
    // https://sketchfab.com/3d-models/low-poly-porsche-911-rwb-0e40ec88a8cb459aacec6e76daa593b6
    let mesh = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/models/car.glb"
    ).scene

    const position = [-35, 10, 0]
    const width = 8
    const height = 2
    const front = 8
    const wheelRadius = 2

    const chassisBodyArgs = [width, height, front*2]
    const [chassisBody, chassisApi] = useBox(
        () => ({
            args: chassisBodyArgs,
            mass: 15,
            position,
        }),
        useRef(null)
    )

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius)
    const [vehicle, vehicleApi] = useRaycastVehicle(
        () => ({
            chassisBody,
            wheelInfos,
            wheels,
        }),
        useRef(null)
    )

    useControls(vehicleApi, chassisApi)

    useFrame((state) => {
        if(!thirdPerson) return;

        let position = new Vector3(0,0,0)
        position.setFromMatrixPosition(chassisBody.current.matrixWorld)

        let quaternion = new Quaternion(0,0,0,0)
        quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld)

        let wDir = new Vector3(0,-0.3,1)
        wDir.applyQuaternion(quaternion)
        wDir.normalize()

        let cameraPosition = position.clone().add(
            wDir.clone().multiplyScalar(-75).add(
                new Vector3(0,0.5,0)
            )
        )

        state.camera.position.copy(cameraPosition)
        state.camera.lookAt(position)
    })

    useEffect(() => {
        mesh.scale.set(8,8,8)
        mesh.children[0].position.set(0,0.01,0)
    }, [mesh])

    return (
        <group ref={vehicle} name="vehicle">
        <group ref={chassisBody} name="chassisBody">
         <primitive object={mesh} rotation-y={Math.PI / 2} position={[0,-3.5,-2]}/>
        </group>

        {/* <mesh ref={chassisBody}>
            <meshBasicMaterial transparent={true} opacity={0.3} />
            <boxGeometry args={chassisBodyArgs} />
        </mesh> */}

        <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
        <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
        <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
        <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />

        </group>
    )

}