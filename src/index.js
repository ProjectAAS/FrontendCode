import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import RegisterReducer from './Store/Reducer/Registration';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store= createStore(RegisterReducer,composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
