import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter/counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;

//3
// const counterInitialState = {
//   value: 0,
//   step: 5,
// };

// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       return {
//         ...state, // Распыление всего стейта нужно, если в стейте, есть еще обьекты, кроме "counter".
//         value: state.value + payload,
//       };

//     case "counter/Decrement":
//       return {
//         ...state, // Распыление всего стейта нужно, если в стейте, есть еще обьекты, кроме "counter".
//         value: state.value - payload,
//       };

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// export default store;

//2
// const initialState = {
//   counter: {
//     value: 0,
//     step: 5,
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       return {
//         ...state, // Распыление всего стейта нужно, если в стейте, есть еще обьекты, кроме "counter".
//         counter: {
//           ...state.counter, // Распыление state.counter нужно, если в state.counter есть еще свойства, кроме value.
//           value: state.counter.value + payload,
//         },
//       };

//     case "counter/Decrement":
//       return {
//         ...state, // Распыление всего стейта нужно, если в стейте, есть еще обьекты, кроме "counter".
//         counter: {
//           ...state.counter, // Распыление state.counter нужно, если в state.counter есть еще свойства, кроме value.
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer, composeWithDevTools());
// export default store;

//1
// const initialState = { counterValue: 0 };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       return { counterValue: state.counterValue + payload };

//     case "counter/Decrement":
//       return { counterValue: state.counterValue - payload };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer, composeWithDevTools());
// export default store;
