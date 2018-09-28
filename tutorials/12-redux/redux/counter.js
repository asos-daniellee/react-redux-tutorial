import { createStore } from "redux";

export const incrementCounter = () => ({ type: "INCREMENT" });
export const decrementCounter = () => ({ type: "DECREMENT" });

export const getValue = state => state.value;

const initialState = {
  value: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state
  }
};

export const store = createStore(counterReducer);
