import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import MockProvider from '../mockProvider'
import Routes from './../../Routes';
import { Home, About } from './../../containers';

describe('Routes', () => {
    it('default path should redirect to Home component', () => {
        // the wrapper variable will just mount home routes
        const wrapper = mount(
            <MockProvider>
                <MemoryRouter initialEntries={['/']} initialIndex={0} >
                    <Routes />
                </MemoryRouter>
            </MockProvider>
        );
        expect(wrapper.find(Home)).toHaveLength(1)
    })
    it('/about path should redirect to About component', () => {
        const wrapper = mount(
                <MemoryRouter initialEntries={['/about']} initialIndex={0} >
                    <Routes />
                </MemoryRouter>
        );
        expect(wrapper.find(About)).toHaveLength(1)
    })
})

/*
1> Enzyme's mount() - https://airbnb.io/enzyme/docs/api/ReactWrapper/mount.html

.mount() => Self

A method that re-mounts the component, if it is not currently mounted. This can be used to simulate a component going through an unmount/mount lifecycle.

Returns
ReactWrapper: Returns itself.

************************

2> Difference between mount() and shallow()

The only way to test componentDidMount and componentDidUpdate is using mount(). mount() does a full rendering including child components. Requires a DOM (jsdom, domino). More constly in execution time.
The shallow() rendering function only renders the component we're testing specifically and it won't render child elements. So to test children ( like child Header ) I we'll have to mount() the component as the child Header won't be available in the jsdom otherwise.

In this case, I actually want to test the entire tree of children in the Routes component. so I will use mount and NOT shallow. Mount enables us to perform a full render.

************************

3> react-router-dom's MemoryRouter - https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md

A <Router> that keeps the history of your "URL" in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.

import { MemoryRouter } from 'react-router'

<MemoryRouter>
  <App/>
</MemoryRouter>

initialEntries: array - An array of locations in the history stack. These may be full-blown location objects with { pathname, search, hash, state } or simple string URLs.

<MemoryRouter
  initialEntries={[ '/one', '/two', { pathname: '/three' } ]}
  initialIndex={1}
>
  <App/>
</MemoryRouter>

initialIndex: number - The initial location's index in the array of initialEntries.

************************

4> Enzyme's wrapper.find() -  - This method is part of full DOM rendering (i.e. NOT shallow rendering) - https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html

.find(selector) => ReactWrapper

Finds every node in the render tree of the current wrapper that matches the provided selector.

Arguments
selector (EnzymeSelector): The selector to match.
Returns
ReactWrapper: A new wrapper that wraps the found nodes.

So, in the above I am grabbing the Home and About component using the find function exposed by Enzyme, the assumption I am testing is that I should find Home component once. Thats why toHaveLength of 1

************************

5> expect.toHaveLength() - https://jestjs.io/docs/en/expect#tohavelengthnumber

Use .toHaveLength to check that an object has a .length property and it is set to a certain numeric value.

This is especially useful for checking arrays or strings size.

expect([1, 2, 3]).toHaveLength(3);
expect('abc').toHaveLength(3);
expect('').not.toHaveLength(5);



*/