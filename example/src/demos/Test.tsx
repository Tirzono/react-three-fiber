import * as THREE from 'three'
import React, { useState, useEffect, useRef, useReducer } from 'react'
import { Canvas } from '@react-three/fiber'

function Test() {
  const [o1] = useState(
    () => new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 'hotpink' })),
  )
  const [o2] = useState(
    () => new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 'aquamarine' })),
  )
  const [which, toggle] = useReducer((state) => !state, true)
  useEffect(() => {
    const interval = setInterval(toggle, 1000)
    return () => clearInterval(interval)
  }, [])
  return <primitive object={which ? o1 : o2} />
}

export default function App() {
  return (
    <Canvas>
      <Test />
    </Canvas>
  )
}
