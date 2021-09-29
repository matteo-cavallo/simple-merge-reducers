import { Reducer } from '@reduxjs/toolkit';
/***
 *
 * @param initialState The initial state used by the reducer
 * @param reducers You can pass as many reducer as you need, they are logically all on the same level
 *
 * Reducers can be made by using createReducer or with the Redux Slice
 *
 */
export declare function mergeReducers<StateType>(initialState: StateType, ...reducers: Array<Reducer<StateType>>): Reducer<StateType>;
