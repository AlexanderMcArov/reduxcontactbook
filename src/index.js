import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?   
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
    }) : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
