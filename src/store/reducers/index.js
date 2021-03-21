const initialState = {
  counter: 0,
};

export default function Reducers(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
