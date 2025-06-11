
// const initialState = {
//     counter: 0,
//     user: {name:'', age:'', origin:''}
// }

// const Reducer = (state = initialState, action) => {
//     // if(action.type === "INCREMENT") {
//     //     return {counter: state.counter+1}
//     // }
//     // if(action.type === "DECREMENT") {
//     //     return {counter: state.counter-1}
//     // }
//     // if(action.type === "ADD") {
//     //     return {counter: state.counter + action.value}
//     // }
//     // if(action.type === "SUBSTRACT") {
//     //     return {counter: state.counter - action.value}
//     // }


//     return state;
// }

// export default Reducer;


import { combineReducers } from "redux";
import counter from "../containers/counter";
import userReducer from "./user";

const rootReducer=(combineReducers({
    counter: counter,
    user: userReducer,
}))

export default rootReducer;