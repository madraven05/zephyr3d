import ComponentCard, { componentCard } from "@/components/component-card";
import { GuitarSG } from "@/components/guitar-sg";
import { MusicBlobExample } from "@/components/mdx-components/code-examples/blob-examples";
import { NikeAirJordan } from "@/components/NikeAirJordan";
import { WolfHP } from "@/components/wolf-hp";
import {
  Card,
  CardPanel,
  CardTitle,
  CardCanvas,
  ParticleMesh,
  ParticlesWave,
  ParticlesWaveModel,
  MorphParticleMeshes,
  Blob,
  MusicBlob,
} from "@zephyr3D/react";
import React, { useState } from "react";



const ComponentsPage = () => {

  const componentData:componentCard[] = [
    {
      id: "particle-wave",
      title: "Particle Wave",
      description: "A customisable animating seqverened by mathematical expressions and some creativity!",
      model: <ParticlesWaveModel startColor="lightgreen" />,
      link: "/docs/components/particles-wave",
    },
    {
      id: "particle-mesh",
      title: "Particle Mesh",
      description: "A mesh created with particles",
      model: (
        <ParticleMesh
          color="lightgreen"
          scale={2.75}
          props={{ rotation: [0, Math.PI / 2, 0] }}
          particlesCount={15_000}
          size={0.02}
          ModelComponent={WolfHP}
        />
      ),
      link: "/docs/components/particle-mesh",
    },
    {
      id: "morph-particle-meshes",
      title: "Morph Particle Meshes",
      description: "Morphing between two particle meshes",
      model: <MorphParticleMeshes
      color="lightgreen"
      particlesCount={5000}
      toProps={{
        scale: 2,
        ModelComponent: WolfHP,
        size: 0.02,
        props: {
        },
      }}
      fromProps={{
        ModelComponent: GuitarSG,
        size: 0.02,
        scale: 2,
        props: {
          rotation: [0,Math.PI/2,0],
        },
      }}
    />,
      link: "/docs/components/morph-particle-meshes",
    },
    {
      id: "blob",
      title: "Blob",
      description: "3D blob created and animated using perlin noise",
      model: <Blob color2="white" color1="skyblue"/>
      ,
      link: "/docs/components/blob"
    },
    {
      id: "music-blob",
      title: "Music Blob",
      description: "3D blob created and animated using perlin noise. It dances to the beats of the music you provide!",
      model: <Blob color1="violet" color2="orange"/>
      ,
      link: "/docs/components/music-blob"
    }
  ];


  return (
    <div className="min-h-screen p-10 gap-10 flex flex-col justify-start items-center">
      <p className="text-lg">Here is a list of components that Zephyr3D provides you with!</p>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {componentData.map((component) => (
          <ComponentCard component={component}/>
        ))}
      </div>
      <p className="text-lg">More coming soon!</p>
    </div>
  );
};

export default ComponentsPage;
