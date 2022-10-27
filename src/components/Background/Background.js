import React, { useRef } from 'react';
import { MathUtils } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Instances, Instance } from '@react-three/drei';
import { EffectComposer, SSAO } from '@react-three/postprocessing';
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  border: solid 1px ${props => props.theme.colors.text};
`;

const particles = Array.from({ length: 300 }, () => ({
  factor: MathUtils.randInt(1, 10),
  speed: MathUtils.randFloat(0.01, 1),
  xFactor: MathUtils.randFloatSpread(80),
  yFactor: MathUtils.randFloatSpread(40),
  zFactor: MathUtils.randFloatSpread(40)
}))

const Bubble = ({ factor, speed, xFactor, yFactor, zFactor }) => {
  const ref = useRef()
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
    ref.current.position.set(
      Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
    )
  })
  return <Instance ref={ref} />
}

const  Bubbles = ({theme}) => {
  const ref = useRef()
  useFrame((state, delta) => void (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)))
  return (
    <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 10, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial roughness={0} color={theme === 'dark' ? '#999' : '#e6e6e6'} />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  )
}

const  Background = ({ theme }) => {
  return (
    <BackgroundContainer data-testid='background'>
      <Canvas dpr={[1, 1]} camera={{  position: [0, 50, 50], near: 5, far: 100 }}>
       <ambientLight intensity={.5} />
       <Bubbles theme={theme}/>
       <EffectComposer multisampling={0}>
         <SSAO samples={31} radius={0.1} intensity={30} luminanceInfluence={0.1} color={theme === 'dark' ? '#0d0d0d' : '#000'} />
       </EffectComposer>
     </Canvas>
    </BackgroundContainer>
  );
}

export default Background;
