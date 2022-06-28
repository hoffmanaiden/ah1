import './Routes.css'
import { useControls, Leva } from 'leva'
import ToggleLeva from '../Components/ToggleLeva'

export default function Home() {
  return (
    <div className="home-container">
      <Leva hidden={true} />
      <div className="text-box">
        Hello!<br />
        My name is Aiden & I'm a Full Stack Developer with a focus on React, Node, & AWS.
        I love to learn, build, and troubleshoot. Currently obsessed with the <a target="_blank" href="https://github.com/pmndrs">Poimandres</a> community.
      </div>
      {/* <ToggleLeva/> */}
    </div>
  )
}