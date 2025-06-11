import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/Reducer';
import Reducer from './store/Reducer';
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = legacy_createStore(Reducer, composeEnhancers(applyMiddleware(thunk))) ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
