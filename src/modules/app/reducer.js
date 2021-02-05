import types from './types';

const initialState = {
  isPressed: false,
};

const togglePressed = (state, { togglePressed }) => ({
  ...state,
  isPressed: togglePressed,
});

const reducer = {
  [types.TOGGLE_PRESSED]: togglePressed,
};

export default (state = initialState, action = {}) => reducer[action.type] ? reducer[action.type](state, action) : state;
