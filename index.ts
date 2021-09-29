import {Reducer} from '@reduxjs/toolkit';

/***
 *
 * @param initialState The initial state used by the reducer
 * @param reducers You can pass as many reducer as you need, they are logically all on the same level
 *
 * Reducers can be made by using createReducer or with the Redux Slice
 *
 */
export function mergeReducers<StateType>(initialState: StateType, ...reducers: Array<Reducer<StateType>>): Reducer<StateType> {

    if (initialState === undefined) {
        throw Error('Initial state can not be undefined')
    }

    // Given a State and an Action
    return (state, action) => {
        if (!state || !action) {
            return initialState
        }

        // It returns the final new State, after have been updated by one (or more) reducers.
        return reducers.reduce((newState, reducer, index): StateType => {

            if (reducer === undefined) {
                throw Error(`Error for reducer at index ${index}`)
            }

            // It returns the State produced by the specific reducer
            return reducer(newState, action)
        }, state)
    }
}