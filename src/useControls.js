import { useEffect, useState } from "react";

export const useControls = (vehicleApi, chassisApi) => {
    let [controls, setControls] = useState({

    })

    useEffect(() => {
        const keyDownPressHandler = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: true
            }))
        }

        const keyUpPressHandler = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: false
            }))
        }

        window.addEventListener("keydown", keyDownPressHandler)
        window.addEventListener("keyup", keyUpPressHandler )
        return () => {
            window.removeEventListener("keydown", keyDownPressHandler)
            window.removeEventListener("keyup", keyUpPressHandler)
        }
    }, [])

    useEffect(() => {
        if(controls.w) {
            vehicleApi.applyEngineForce(-450,0)
            vehicleApi.applyEngineForce(-450,1)
        } else if (controls.s){
            vehicleApi.applyEngineForce(350,0)
            vehicleApi.applyEngineForce(350,1)
            vehicleApi.applyEngineForce(350,2)
            vehicleApi.applyEngineForce(350,3)
        } else {
            vehicleApi.applyEngineForce(0,0)
            vehicleApi.applyEngineForce(0,1)
            vehicleApi.applyEngineForce(0,3)
            vehicleApi.applyEngineForce(0,2)
        }

        if(controls.a){
            vehicleApi.setSteeringValue(0.35, 0)
            vehicleApi.setSteeringValue(0.35, 1)
            vehicleApi.setSteeringValue(-0.0, 2)
            vehicleApi.setSteeringValue(-0.0, 3)
        } else if (controls.d){
            vehicleApi.setSteeringValue(-0.35, 0)
            vehicleApi.setSteeringValue(-0.35, 1)
            vehicleApi.setSteeringValue(0.0, 2)
            vehicleApi.setSteeringValue(0.0, 3)
        } else {
            for (let i = 0; i < 4; i++){
                vehicleApi.setSteeringValue(0, i)
            }
        }

        if (controls.r) {
            chassisApi.position.set(-35, 10, 0);
            chassisApi.velocity.set(0, 0, 0);
            chassisApi.angularVelocity.set(0, 0, 0);
            chassisApi.rotation.set(0, 0, 0);
          }
    }, [controls, vehicleApi, chassisApi])

    return controls
};