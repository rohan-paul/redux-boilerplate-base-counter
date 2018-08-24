import React from 'react';
import ReactDOM from 'react-dom';
// hot reload for development
import { AppContainer } from 'react-hot-loader';


// redux deps
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

import App from './App';
import './index.scss';



const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
  module.hot.accept('./reducers', () => { store.replaceReducer(reducer); });
}




/* What is replaceReducer()

Replaces the reducer currently used by the store to calculate the state. You might need this if your app implements code splitting, and you want to load some of the reducers dynamically. You might also need this if you implement a hot reloading mechanism for Redux.

From my note in - /home/paul/codes-Lap/Curated-List-For-JavaScript-Interviews/React/Redirect-from-react-router-dom.md


*/