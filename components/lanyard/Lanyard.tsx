'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import {
  useTexture,
  Environment,
  Lightformer,
} from '@react-three/drei';
import {
  BallCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

import lanyardTexture from './lanyard.png';
import logoTexture from '../../src/assets/homepage/sat_logo.png';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
}: LanyardProps) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} position={[0, -1, 5]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} position={[-1, -1, 1]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} position={[1, 1, 1]} scale={[100, 0.1, 1]} />
          <Lightformer
            intensity={10}
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band() {
  const [ready, setReady] = useState(false);
  const card = useRef<any>(null);
  const leftBand = useRef<any>(null);
  const rightBand = useRef<any>(null);

  const fixedLeft = useRef<any>(null);
  const fixedRight = useRef<any>(null);
  const j1Left = useRef<any>(null);
  const j2Left = useRef<any>(null);
  const j3Left = useRef<any>(null);
  const j1Right = useRef<any>(null);
  const j2Right = useRef<any>(null);
  const j3Right = useRef<any>(null);

  const [dragged, setDragged] = useState<false | THREE.Vector3>(false);
  const [hovered, setHovered] = useState(false);

  const vec = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const dir = new THREE.Vector3();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true); // after 1s, enable drop
    }, 1000); // adjust delay if needed

    return () => clearTimeout(timeout);
  }, []);

  const logo = useTexture(logoTexture);
  const bandTexture = useTexture(lanyardTexture);
  bandTexture.wrapS = bandTexture.wrapT = THREE.RepeatWrapping;

  const segmentProps: RigidBodyProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const [curveLeft] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [curveRight] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [hovered, dragged]);

  useRopeJoint(fixedLeft, j1Left, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1Left, j2Left, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2Left, j3Left, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3Left, card, [[0, 0, 0], [-1, 1, 0]]); // Closer to logo

  useRopeJoint(fixedRight, j1Right, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1Right, j2Right, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2Right, j3Right, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3Right, card, [[0, 0, 0], [1, 1, 0]]); // Closer to logo

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1Left, j2Left, j3Left, j1Right, j2Right, j3Right, fixedLeft, fixedRight].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    const updateCurve = (curve: THREE.CatmullRomCurve3, joints: any[]) => {
      joints.forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        ref.current.lerped.lerp(ref.current.translation(), delta * 10);
      });
      curve.points[0].copy(joints[2].current.translation());
      curve.points[1].copy(joints[1].current.lerped);
      curve.points[2].copy(joints[0].current.lerped);
      curve.points[3].copy(joints[3].current.translation());
    };

    updateCurve(curveLeft, [j1Left, j2Left, j3Left, fixedLeft]);
    updateCurve(curveRight, [j1Right, j2Right, j3Right, fixedRight]);

    const scaledPointsLeft = curveLeft.getPoints(32).map((point) =>
      new THREE.Vector3(point.x, point.y * 0.75, point.z)
    );
    const scaledPointsRight = curveRight.getPoints(32).map((point) =>
      new THREE.Vector3(point.x, point.y * 0.75, point.z)
    );

    leftBand.current.geometry.setPoints(scaledPointsLeft);
    rightBand.current.geometry.setPoints(scaledPointsRight);

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
  });

  return (
    <>
      {/* Rope joints */}
      <group position={[0, 4, 0]} scale={1}>
        <RigidBody ref={fixedLeft} type="fixed" />
        <RigidBody ref={j1Left} position={[0.5, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody ref={j2Left} position={[1.0, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody ref={j3Left} position={[1.5, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>

        <RigidBody ref={fixedRight} type="fixed" />
        <RigidBody ref={j1Right} position={[-0.5, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody ref={j2Right} position={[-1.0, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody ref={j3Right} position={[-1.5, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>

        {/* Logo panel */}
        <RigidBody
          ref={card}
          type={!ready || dragged ? "kinematicPosition" : "dynamic"}
          position={[0, 0, 0]}
          {...segmentProps}
        >
          <BallCollider args={[1]} />
          <group
            scale={4}
            position={[0, 3, -0.05]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              setDragged(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              setDragged(false);
            }}
          >
            <mesh renderOrder={10}>
              <planeGeometry args={[2.4, 1.2]} />
              <meshBasicMaterial map={logo} transparent depthTest={false} depthWrite={false}/>
            </mesh>
          </group>
        </RigidBody>
      </group>

      {/* Band lines */}
      <group position={[0, 2, 0]} scale={3}>
        <mesh ref={leftBand}>
          <meshLineGeometry />
          <meshLineMaterial
            map={bandTexture}
            useMap
            transparent
            toneMapped={false}
            repeat={[-6, 1]}
            lineWidth={1}
            resolution={[1000, 1000]}
          />
        </mesh>
        <mesh ref={rightBand}>
          <meshLineGeometry />
          <meshLineMaterial
            map={bandTexture}
            useMap
            transparent
            toneMapped={false}
            repeat={[-6, 1]}
            lineWidth={1}
            resolution={[1000, 1000]}
          />
        </mesh>
      </group>
    </>
  );
}

