import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './../reducers';

const store = createStore(reducer);

const MockProvider = ({ children }) => <Provider store={store}>{children}</Provider>

export default MockProvider;


/* 1> So the MockProvider component is a functional component here and all its doing is making the store accessible to its children. The {children} inside the curly braces in the function will be evaluated ( by the normal JSX syntax ) as a javascript object.

2. Provider is an HOC Concept - https://stackoverflow.com/questions/48227188/how-does-provider-and-connect-work-in-react

To be able to understand how Provider and connect work we need to understand 2 concepts in React

### 1- Context api:

### Context is a way to pass data through the component tree without having to pass the props down manually at every level

### 2- Higher Order Component (HOC):

### A higher-order component is a function that takes a component and returns a new component but before returning the new component you can pass extra custom props and then return it,

3> General note on Provider - Provider serves just one purpose : to “provide” the store to its child components.

Since the provider only makes the store accessible to it’s children, and we would ideally want our entire app to access the store, the most sensible thing to do would be to put our App component within Provider. And thats exactly what I am doing here in the index.js file's render function definition

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

React Redux exposes the Provider component to handle passing our store to every container component. We'll generally use this to wrap the root component of our app, e.g. <Provider store={store}> ... </Provider>.
*/