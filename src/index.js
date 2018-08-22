import React from 'react';
import ReactDOM from 'react-dom';
// hot reload for development
import {  AppContainer } from 'react-hot-loader'

// redux deps
import {  createStor, applyMiddleware } from 'redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



if (module.hot) {
    module.hot.accepts('./App' () => {render(App) })
    module.hot.accepts('./reducers', () => { store.replaceReducer(reducer) })
}

render(App);rker();



if (module.hot) {
    module.hot.accepts('./App', () => {render(App) })
    module.hot.accepts('./reducers', () => { store.replaceReducer(reducer) })
}

render(App);

/* What is repalaceReducer()

Replaces the reducer currently used by the store to calculate the state. You might need this if your app implements code splitting, and you want to load some of the reducers dynamically. You might also need this if you implement a hot reloading mechanism for Redux. */