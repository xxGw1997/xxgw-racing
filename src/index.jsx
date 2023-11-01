import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { KeyboardControls } from '@react-three/drei'
import Interface from './Interface'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const keyMap = [
  { name: 'forward', keys: ['ArrawUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrawDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrawLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrawRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
]

root.render(
  <KeyboardControls map={keyMap}>
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2.5, 4, 6],
      }}
    >
      <Experience />
    </Canvas>
    <Interface />
  </KeyboardControls>
)
