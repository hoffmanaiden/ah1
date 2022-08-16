import './Routes.css'
import { useControls, Leva } from 'leva'
import ToggleLeva from '../Components/ToggleLeva'
import { useWindowSize } from 'react-use'
import {useContext} from 'react'
import {AppContext} from '../App'


export default function Home() {

  const { width, height } = useWindowSize();
  const {state, dispatch} = useContext(AppContext)

  return (
    <div className="home-container">
      <Leva hidden={true} />
      <div className="text-box" style={{opacity: state.levaHidden ? '1' : '0.3'}}>
        Hello!<br />
        My name is Aiden & I'm a Full Stack Developer with a focus on React, Node, & AWS.
        I love to learn, build, and troubleshoot.
      </div>
      {width > 900 ?
        <div className="text-box" style={{opacity: state.levaHidden ? '1' : '0.3'}}>
          Toggle to play with the waves, thanks to <a href="https://github.com/pmndrs" target="_blank">pmndrs</a> & <a href="https://github.com/pmndrs/leva" target="_blank">leva</a>.
          <ToggleLeva />
        </div> : null
      }

    </div>
  )
}