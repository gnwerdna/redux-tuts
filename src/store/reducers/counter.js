import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';
const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, { counter: state.counter });
        case actionTypes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 });
        case actionTypes.ADD:
            return updateObject(state, { counter: state.counter + action.val });
        case actionTypes.SUBTRACT:
            return updateObject(state, { counter: state.counter - action.val });
    }
    return state;
}

export default reducer;
