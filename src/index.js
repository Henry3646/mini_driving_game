import "./index.css"
import { createRoot } from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import { Scene } from "./Scene.js"
import { Physics } from "@react-three/cannon"

createRoot(document.getElementById("root")).render(
  <>
  <Canvas>
    <Physics
      broadphase="SAP"
      gravity={[0,-60,0]}
    >

      <Scene />
    </Physics>
  </Canvas>
  <div className="controls">
    <span>W - Accelerate</span>
    <span>A - Steer Left</span>
    <span>D - Steer Right</span>
    <span>S - Decelerate / Reverse</span>
    <span>T - Change Camera View</span>
    <span>R - Reset Car Position</span>
  </div>
  </>
)