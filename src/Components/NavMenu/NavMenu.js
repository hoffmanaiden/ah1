import './NavMenu.css'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'

export default function NavMenu(){

  const {state, dispatch} = useContext(AppContext)

  const toggleMenuOpen = () => {
    dispatch({type: 'toggleMenu'})
    // setState((state) => ({
    //   ...state,
    //   menuOpen: !state.menuOpen
    // }))
  }

  return(
    <div className="NavMenu">
      <div className="NavMenu-top-padding"></div>
      <Link to="/"><div onClick={toggleMenuOpen} className='menuOption'>home</div></Link>
      <Link to="work"><div onClick={toggleMenuOpen} className='menuOption'>work</div></Link>
      <Link to="contact"><div onClick={toggleMenuOpen} className='menuOption'>contact</div></Link>
    </div>
  )
}