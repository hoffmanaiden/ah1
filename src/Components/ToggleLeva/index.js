import './ToggleLeva.css'
import {useContext, useRef, useEffect} from 'react'
import {AppContext} from '../../App'

export default function ToggleLeva() {
  const {state, dispatch} = useContext(AppContext)
  const ref = useRef()

  // ref.current.checked 
  // targets toggle state

  useEffect(() => {
    state.levaHidden ? ref.current.checked = false : ref.current.checked = true
  }, [state.levaHidden])

  return (
    <div className='ToggleLeva'>
      <label className="switch">
        <input ref={ref}type="checkbox" onClick={() => {
          dispatch({type: 'toggleLeva'})
          console.log(ref.current.checked)
        }}/>
        <span className="slider round"></span>
      </label>
    </div>
  )
}