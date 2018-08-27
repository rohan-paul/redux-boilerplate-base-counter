import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// Below I am using namespaced-import to import multiple functional-classes or functional-components in a single statement.
import * as actions from '../actions'

// Destructuring the functions
const Home = ({ counterValue, handleIncreaseValue, handleDecreaseValue }) => (
    <div>
      <h2>Home Page</h2>
      <p>The counter value is {counterValue }</p>
      <button onClick={handleIncreaseValue}>Add</button>
      <button onClick={handleDecreaseValue}>Remove</button>
    </div>
  );

  Home.propTypes = {
    counterValue: PropTypes.number.isRequired,
    handleIncreaseValue: PropTypes.func.isRequired,
    handleDecreaseValue: PropTypes.func.isRequired,
  };

// This is our redux wrapper component
// it passes @value {int} counterValue
// and the 2 actions to increase and decrease counterValue by 1

const mapStateToProps = state => ({
    counterValue: state.counterReducer

})

const mapDispatchToProps = dispatch => ({
    handleIncreaseValue: () => {
        dispatch(actions.addToCounter())
    },
    handleDecreaseValue: () => {
        dispatch(actions.removeFromCounter())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)



/* What mapStateToProps() does is, it allows us to take our counterValue state (from the root reducer ..reducers/index.js ) and turn this into a component property so I can use it in this Home.js container component - like e.g.

this.props.counterValue

mapStateToProps() has the Store state as an argument and its used to link the component with certain part of the store state . In returned object from mapStateToProps() below, I am using 'counterValue' as key because thats what I am calling it as the props passed to this Home.js functional component at the very top when defining this functional component.

< const Home = ({ counterValue, handleIncreaseValue, handleDecreaseValue }) => (  >

mapStateToProps and mapDispatchToProps are both pure functions that are provided with the (or passed to them), the stores “state” and “dispatch” respectively. Furthermore, both functions have to return an object, whose keys will then be passed on as the props of the component they are connected to (Home.js in this case).

mapStateToProps() is a utility which helps your component get updated state(which is updated by some other components),

mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state). we can remove all reference to our store from our component via the mapDispatchToProps() function. We saw that mapDispatchToProps() allows us to bring in actions, combine them with dispatch and connect events on our page to actions in our store.

 mapDispatchToProps()  - just like with mapStateToProps() we added a prop that pointed to a value, here we add two props `handleIncreaseValue' and 'handleDecreaseValue' that point to values, which are two functions. The dispatch() function is available as an argument to mapDispatchToProps. By including the dispatch, we've bundled everything we need into two props value, that I am passing at the very top to this component.

 < const Home = ({ counterValue, handleIncreaseValue, handleDecreaseValue }) => (  >

**mapStateToProps and mapDispatchToProps** are separate for a good reason, consider the performance: mapStateToProps is actually run several times when state changes, and mapDispatchToProps once (or way fewer anyway than mapStateToProps) it doesn't depend on the state.

*/