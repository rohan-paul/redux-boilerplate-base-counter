import * as actions from '../actions/types'
// Above, I am using namespaced-import to import multiple functional-classes or functional-components in a single statement.

export default function counterReducer(state=0, action) {
    switch (action.type) {
        case actions.INCREMENT:
            return state +=1;
        case actions.DECREMENT:
            return state -= 1;
        default:
            return state;

    }
}