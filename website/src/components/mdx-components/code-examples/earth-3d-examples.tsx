import React from 'react'
import {Earth3D, ParticlesWaveModel} from "@zephyr3D/react";
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei"
import { NikeAirJordan } from '@/components/NikeAirJordan';
import { Earth3DModel } from './Earth3D';

const Earth3DExample = () => {

  return (
    <div className='bg-white/5 h-96'>
       <Earth3D/>
    </div>
  )
}

export default Earth3DExample