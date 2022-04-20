import './Navbar.css'
import './dynamic-hamburger.css'
import {useState} from 'react'
import { VscMenu } from 'react-icons/vsc'
import { useWindowSize } from 'react-use'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { width, height } = useWindowSize();
  const [state, setState] = useState({
    menuOpen: false
  })

  const toggleMenuOpen = () => {
    setState((state) => ({
      ...state,
      menuOpen: !state.menuOpen
    }))
  }

  return (
    <div className="Navbar">
      <div className="Navbar-Inner">
        <div className="logo">
          <span className='logo-firstName'>Aiden</span><br />
          <span className='logo-lastName'>Hoffman</span>
        </div>
        {width > 750 ?
          <div className="full-menu">
            <li><Link to="/">home</Link></li>
            <li><Link to="work">work</Link></li>
            <li><Link to="contact">contact</Link></li>
          </div> :
          <div className="hamburger">
            {/* <VscMenu /> */}
            <div id="nav-icon4" className={state.menuOpen ? 'open' : null } onClick={toggleMenuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>}
      </div>
    </div>
  )
}