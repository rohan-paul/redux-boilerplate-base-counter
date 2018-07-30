import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// Below I am using namespaced-import to import multiple functional-classes or functional-components in a single statement.
import * as actions from '../actions'

// Destructuring the functions
const Home = ({ counterValue, handleIncreaseValue, handleDecreaseValue }) => (
    <div>
        <h2>Home Page</h2>
        <p>The counter value is {counterValue} </p>
    </div>

)