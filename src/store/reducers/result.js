import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.STORE_RESULTS:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });

        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, { results: updatedArr });
    }
    return state;
}

export default reducer;
