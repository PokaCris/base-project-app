const redux = require('redux');

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => state;
const store = redux.legacy_createStore(rootReducer);

console.log(store.getState())