"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeReducers = void 0;
/***
 *
 * @param initialState The initial state used by the reducer
 * @param reducers You can pass as many reducer as you need, they are logically all on the same level
 *
 * Reducers can be made by using createReducer or with the Redux Slice
 *
 */
function mergeReducers(initialState) {
    var reducers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        reducers[_i - 1] = arguments[_i];
    }
    if (initialState === undefined) {
        throw Error('Initial state can not be undefined');
    }
    // Given a State and an Action
    return function (state, action) {
        if (!state || !action) {
            return initialState;
        }
        // It returns the final new State, after have been updated by one (or more) reducers.
        return reducers.reduce(function (newState, reducer, index) {
            if (reducer === undefined) {
                throw Error("Error for reducer at index " + index);
            }
            // It returns the State produced by the specific reducer
            return reducer(newState, action);
        }, state);
    };
}
exports.mergeReducers = mergeReducers;
