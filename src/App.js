import "./App.css"
import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect, createContext, useMemo, useReducer } from 'react';
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
import { reducer } from './State'


export const AppContext = createContext(null)

const initialState = {
  menuOpen: false,
  levaHidden: true,
  levaToggleState: false,
  amplitude: 0.3,
  freqX: 3,
  freqY: 1,
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch])


  useEffect(() => {
  }, [])
  const {...props} = useControls({
    amplitude: { value: state.amplitude, min: 0, max: 1.11, step: 0.01 },
    freqX: { value: state.freqX, min: 0, max: 10, step: 0.01 },
    freqY: { value: state.freqY, min: 0, max: 10, step: 0.01 },
  })

  return (
    <div className="App" >
      <AppContext.Provider value={providerValue}>
        {state.menuOpen ? <NavMenu /> : null}
        <div className="foreground" style={state.menuOpen ? { overflow: "hidden" } : null}>
          <Navbar />
          <Leva hidden={state.levaHidden} />
          <div className="route-container">
            <Routes style={{ display: "block" }}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/work" element={<Work projects={state.projects} />} />
              <Route exact path="/work/:workId" element={<PortfolioPage />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>

        </div>

        <div className="background">
          <Scene {...props}/>
        </div>
      </AppContext.Provider>
    </div>
  );
}