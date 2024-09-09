import {
  ProductCard,
  ProductCardTitle,
  ProductCardPanel,
  ProductCardCanvas,
} from "@zephyr3D/react";
import { NikeAirJordan } from "@/components/NikeAirJordan";
import {
  CircularParticleWave,
  CustomWaveFunction,
  SimpleParticleWave,
} from "./code-examples/particle-wave-examples";
import CodeBlock from "../code-block";
import ParticleMeshExample from "./code-examples/particle-mesh-examples";
import MorphParticleMeshesExamples from "./code-examples/morph-particle-mesh-examples";
import BlobExample from "./code-examples/blob-examples";
import PropsTable from "../props-table";

export const mdxComponents = {
  ProductCard,
  ProductCardTitle,
  ProductCardPanel,
  ProductCardCanvas,
  NikeAirJordan,
  SimpleParticleWave,
  CircularParticleWave,
  CustomWaveFunction,
  ParticleMeshExample,
  MorphParticleMeshesExamples,
  BlobExample,
  PropsTable,
  pre: ({ ...props }) => <CodeBlock {...props}></CodeBlock>,
};
