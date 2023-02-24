import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { CameraShake } from "@react-three/drei";
import { Vector3 } from "three";

/*
	moving BOOLEAN
*/
export function Camera({ moving }) {

	const player = useRef();
	const [ vector ] = useState( new Vector3() );

	useFrame( function (_, delta) {

		if( moving ) {

			vector.setFromMatrixColumn( player.current.matrix, 0 );

			player.current.position.addScaledVector(
				vector.crossVectors( vector, player.current.up ),
				-delta
			);
		}
	} );

	return (
		<group
			ref={ player }
			rotation-y={ -90 * Math.PI / 180 }
			position={[ -125, 2.5, -25 ]}
		>
			<primitive
				object={ useThree().camera }
				position-z={ 0 }
			/>
			<CameraShake
				maxYaw={ 0.025 }
				maxPitch={ 0.025 }
				maxRoll={ 0 }
				yawFrequency={ 0.25 }
				pitchFrequency={ 0.25 }
			/>
		</group>
	);

}
