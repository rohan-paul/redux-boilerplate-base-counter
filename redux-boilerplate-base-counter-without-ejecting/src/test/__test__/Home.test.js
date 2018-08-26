import React from 'react';
import { shallow } from 'enzyme'
import { Home } from './../../containers'
import MockProvider from '../mockProvider'

it ('renders without crashing', () => {
    const snap = shallow(<MockProvider><Home /></MockProvider>);
    expect(snap).toMatchSnapshot();
});

/* 1> Here MockProvider is working a a higher order component because its rendering another component Home.

Note from general theory of Provider patter of being a HOC concept - the best way to create a reusable functionality is a Higher-Order Component. This means that we basically wrap the component in another one, whose only role is to grab the functionality and pass it as props. Provider component sets the context for all its children, providing the store in it.

2. Provider is an HOC Concept - https://stackoverflow.com/questions/48227188/how-does-provider-and-connect-work-in-react

To be able to understand how Provider and connect work we need to understand 2 concepts in React

### 1- Context api:

### Context is a way to pass data through the component tree without having to pass the props down manually at every level

### 2- Higher Order Component (HOC):

### A higher-order component is a function that takes a component and returns a new component but before returning the new component you can pass extra custom props and then return it,

2> .toMatchSnapshot(propertyMatchers, snapshotName)

https://jestjs.io/docs/en/expect#tomatchsnapshotpropertymatchers-snapshotname

This ensures that a value matches the most recent snapshot. Check out the Snapshot Testing guide for more information.

The optional propertyMatchers argument allows you to specify asymmetric matchers which are verified instead of the exact values.

The last argument allows you option to specify a snapshot name. Otherwise, the name is inferred from the test.

*/