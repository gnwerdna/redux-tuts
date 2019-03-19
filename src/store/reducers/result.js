import * as actionTypes from './../actions/action'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.result })
            }
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArr
            }
    }
    return state;
}

export default reducer;
