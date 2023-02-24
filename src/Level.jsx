import { useGLTF } from "@react-three/drei";

import level_glb from "./assets/level.glb";

export const Level = () => (
	<primitive
		object={ useGLTF(level_glb).scene }
		scale={ 10 }
	/>
);
