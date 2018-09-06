
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const initialState = 10

/*
 * action creator
 */
export function onIncrement() {
  return {
    type: INCREMENT
  }
}

export function onDecrement() {
  return {
    type: DECREMENT
  }
}

/*
 * reducer
 */
export default counter = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return initialState
  }
}