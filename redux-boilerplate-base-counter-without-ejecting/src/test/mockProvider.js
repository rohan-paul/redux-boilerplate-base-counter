import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './../reducers';

const store = createStore(reducer);

const MockProvider = ({ children }) => <Provider store={store}>{children}</Provider>

export default MockProvider;


/* https://jestjs.io/docs/en/expect#tomatchsnapshotpropertymatchers-snapshotname

This ensures that a value matches the most recent snapshot. Check out the Snapshot Testing guide for more information.

The optional propertyMatchers argument allows you to specify asymmetric matchers which are verified instead of the exact values.

The last argument allows you option to specify a snapshot name. Otherwise, the name is inferred from the test.

*/