export function reducer(state, action){
  switch(action.type){
    case 'toggleMenu':
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    case 'toggleLeva':
      return {
        ...state,
        levaHidden: !state.levaHidden
      }
    case 'resetDefaults':
      return {
        ...state,
        levaHidden: true,
        amplitude: 0.3,
        freqX: 3,
        freqY: 1,
        speed: 1,
        textBoxOppacity: 1
      }
    default:
      break;
  }
return state
}