import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Postprocessing } from "./Postprocessing.jsx";
import { Level } from "./Level.jsx";
import { Camera } from "./Camera.jsx";

export function Game() {

	const [ moving, setMoving ] = useState( false );

	return (
		<Suspense fallback={ <div>loading</div> }>
			<Canvas
				dpr={ 0.6 / window.devicePixelRatio }
				onPointerDown={ () => setMoving(true) }
			>
				<Postprocessing />
				<fog
					attach="fog"
					far={ 3 }
					color="snow"
				/>
				<ambientLight color="plum" />
				<Level />
				<Camera moving={ moving } />
			</Canvas>
		</Suspense>
	);

}
