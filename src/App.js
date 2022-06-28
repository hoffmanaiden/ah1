import "./App.css"
import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { useControls, Leva } from 'leva'
import { Routes, Route, Link } from 'react-router-dom'



import Scene from './3D/MeshPlane';
import Navbar from './Components/Navbar/Navbar'
import NavMenu from './Components/NavMenu/NavMenu'

import Home from './Routes/Home'
import Work from './Routes/Work'
import Contact from './Routes/Contact'
import PortfolioPage from "./Routes/PortfolioPage";


export default function App() {

  const [state, setState] = useState({
    menuOpen: false,
    levaOpen: false
  })

  useEffect(() => {
  }, [])
  const data = useControls({
    amplitude: { value: 0.2, min: 0, max: 2.5, step: 0.01 },
    freqX: { value: 3, min: 0, max: 10, step: 0.01 },
    freqY: { value: 1, min: 0, max: 10, step: 0.01 },
  })

  return (
    <div className="App" >
      {state.menuOpen ? <NavMenu state={state} setState={setState} /> : null}
      <div className="foreground" style={state.menuOpen ? {overflow: "hidden"}: null}>
        <Navbar state={state} setState={setState} />
        <Leva hidden={true} />
        <div className="route-container">
          <Routes style={{ display: "block" }}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/work" element={<Work projects={state.projects}/>}/>
            <Route exact path="/work/:workId" element={<PortfolioPage/>}/>
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>

      <div className="background">
        <Scene />
      </div>

    </div>
  );
}