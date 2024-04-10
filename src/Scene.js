import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useState, useEffect } from "react"
import { Track } from './Static Environment/Track.js'
import { Ground } from "./Ground.js"
import { Car } from "./Car.js"
import { Tree } from "./Static Environment/Tree.js"
import { ColliderBox } from "./ColliderBox.js"
import { Car1 } from "./Static Environment/Car1.js"
import { Car2 } from "./Static Environment/Car2.js"
import { Car3 } from "./Static Environment/Car3.js"
import { GasStation } from "./Static Environment/GasStation.js"
import { Store1 } from "./Static Environment/Store1.js"
import { Fountain } from "./Static Environment/Fountain.js"
import { Store2 } from "./Static Environment/Store2.js"
import { Building1 } from "./Static Environment/Building1.js"
import { Building2 } from "./Static Environment/Building2.js"
import { Building3 } from "./Static Environment/Building3.js"

export function Scene() {
    const [thirdPerson, setThirdPerson] = useState(false)
    const [cameraPosition, setcameraPosition] = useState([350, 300, -300])

    useEffect(() => {
        function keydownHandler(e) {
            if(e.key === "t") {
                if(thirdPerson) setcameraPosition([300, 250, -250 + Math.random() * 0.01])
                setThirdPerson(!thirdPerson)
            }
        }

        window.addEventListener("keydown", keydownHandler)
        return () => {
            window.removeEventListener("keydown", keydownHandler)
        };
    }, [thirdPerson]);
    return (
        <Suspense fallback={null}>
            <Environment
                files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
                background={"both"}
            />

            <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
            {!thirdPerson && (
            <OrbitControls target={[100, 20, 100]} />
            )}

            <Track />
            <Ground />

            {/* TREES AND COLLIDER BOXES */}
            <Car thirdPerson={thirdPerson}/>
            <Tree position={[55,-1,62]} />
            <ColliderBox position={[18,0,75.5]} scale={[5,50,5]} />

            <Tree position={[130,-1,0]} />
            <ColliderBox position={[-7.5,0,13.5]} scale={[5,50,5]} />

            <Tree position={[30,-1,0]} />
            <ColliderBox position={[-137,0,13.5]} scale={[5,50,5]} />

            <Tree position={[324,-1,78]} />
            <ColliderBox position={[93.5,0,13.5]} scale={[5,50,5]} />

            <Tree position={[-100,-1,0]} />
            <ColliderBox position={[287,0,92.5]} scale={[5,50,5]} />

            <Tree position={[-85,-1,332]} />
            <ColliderBox position={[204,0,197.5]} scale={[5,50,5]} />

            <Tree position={[120,-1,350]} />
            <ColliderBox position={[308,0,353.5]} scale={[5,50,5]} />

            <Tree position={[240,-1,184]} />
            <ColliderBox position={[83.5,0,363.5]} scale={[5,50,5]} />

            <Tree position={[345,-1,340]} />
            <ColliderBox position={[-77,0,199.5]} scale={[5,50,5]} />

            <Tree position={[-40,-1,186]} />
            <ColliderBox position={[-122,0,345.5]} scale={[5,50,5]} />


            {/* STATIC ENVIRONMENT AND COLLIDER BOXES */}
            <Car1 position={[320,6,234]}/>
            <ColliderBox position={[320,0,234]} scale={[10,15,22]} />

            <Car2 position={[155,0,480]}/>
            <ColliderBox position={[155,0,480]} scale={[12,15,22]} />

            <Car3 position={[-210,0,265]} />
            <ColliderBox position={[-210,0,265]} scale={[24,15,12]} />

            <GasStation position={[350,-1,250]} />
            <ColliderBox position={[409,-1,248.4]} scale={[45,50,75]} />
            <ColliderBox position={[363,-1,229.5]} scale={[5,55,22]} />
            <ColliderBox position={[363,-1,272.5]} scale={[5,55,22]} />
            <ColliderBox position={[331,-1,229.5]} scale={[5,55,22]} />
            <ColliderBox position={[331,-1,272.5]} scale={[5,55,22]} />
            <ColliderBox position={[292.9,-1,249.5]} scale={[5,45,2]} />


            <Fountain position={[50,5,205]}/>
            <ColliderBox position={[50,5,205]} scale={[25,20,45]} />
            <ColliderBox position={[50,5,205]} scale={[45,20,25]} />


            <Store1 position={[185,0,490]}/>
            <ColliderBox position={[185,0,490]} scale={[42,40,31]}/>

            <Store2 position={[50,-1,280]}/>
            <ColliderBox position={[48.5,0,287]} scale={[27.5,70,23]} />

            <Building1 position={[-70,0,350]}/>
            <ColliderBox position={[-71,0,341]} scale={[30,90,29]} />
            <ColliderBox position={[-71,0,361]} scale={[23,30,25]} />
            <ColliderBox position={[-52,0,341.5]} scale={[10,10,10]} />

            <Building2 position={[-210,-0.5,300]}/>
            <ColliderBox position={[-208,-0.5,299]} scale={[30,100,27]} />
            <ColliderBox position={[-207,-0.5,318]} scale={[15,45,10]} />
            <ColliderBox position={[-211,-0.5,281]} scale={[20,30,10]} />

            <Building3 position={[-200,-2,150]} />
            <ColliderBox position={[-200,0,150]} scale={[28,70,28]} />

            

            


        </Suspense>

    )
}