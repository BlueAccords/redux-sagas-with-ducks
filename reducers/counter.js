import actionTypes from './../actions/action-types'

export default function counter(state = 0, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1
    case actionTypes.INCREMENT_IF_ODD:
      return (state % 2 !== 0) ? state + 1 : state
    case actionTypes.DECREMENT:
      return state - 1
    default:
      return state
  }
}
