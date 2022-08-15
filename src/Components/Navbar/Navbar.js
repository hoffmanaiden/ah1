import './Navbar.css'
import './dynamic-hamburger.css'
import { useContext } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { useWindowSize } from 'react-use'
import { Link } from 'react-router-dom'
import {AppContext} from '../../App'

export default function Navbar() {
  const { width, height } = useWindowSize();
  const {state, dispatch} = useContext(AppContext)

  const toggleMenuOpen = () => {
    dispatch({type: 'toggleMenu'})
    // setState((state) => ({
    //   ...state,
    //   menuOpen: !state.menuOpen
    // }))
  }

  return (
    <div className="Navbar">
      <div className="Navbar-Inner">
        <Link to='/'>
          <div className="logo">
            <span className='logo-firstName'>Aiden</span><br />
            <span className='logo-lastName'>Hoffman</span>
          </div>
        </Link>
        {width > 900 ?
          <div className="full-menu">
            <li onClick={() => dispatch({type: 'resetDefaults'})}><Link to="/">home</Link></li>
            <li onClick={() => dispatch({type: 'resetDefaults'})}><Link to="work">work</Link></li>
            <li onClick={() => dispatch({type: 'resetDefaults'})}><Link to="contact">contact</Link></li>
          </div> :
          <div className="hamburger">
            {/* <VscMenu /> */}
            <div id="nav-icon4" className={state.menuOpen ? 'open' : null} onClick={toggleMenuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>}
      </div>
    </div>
  )
}