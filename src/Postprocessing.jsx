import { Bloom, ChromaticAberration, DepthOfField, EffectComposer, Noise } from "@react-three/postprocessing";

export const Postprocessing = () => (
	<EffectComposer>
		<ChromaticAberration offset={[ 0.01, 0 ]} />
		<Noise opacity={ -10 } />
		<Bloom intensity={ 0.25 } />
		<DepthOfField
			focusDistance={ 1.005 }
			bokehScale={ 10 }
		/>
	</EffectComposer>
);
