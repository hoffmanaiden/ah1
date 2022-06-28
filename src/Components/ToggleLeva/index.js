import './ToggleLeva.css'

export default function ToggleLeva() {
  return (
    <div className='ToggleLeva'>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}