/* Initialize state to empty array - no courses, used as initial state in store */
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      // debugger;
      /* ES6 spread operator 
      ...state => explodes into a new instance of our state array
      returns instance of our state array with new course */
      return [...state, Object.assign({}, action.course)]
    default:
      return state;
  }
}