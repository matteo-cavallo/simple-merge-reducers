# Simple Merge Reducers

This function is useful if you need to split a reducer in many more sub-reducers, without creating more states. 
All the reducers share the same state, and the type of the initial state must be of course the same for all of them.

## Usage
```typescript
import {mergeReducers} from 'simple-merge-reducers'

interface StateType {
  user: User | null
  loading: boolean
}

const initialState: StateType = {
  user: null,
  loading: false
}

const reducer1 = createReducer(initialState, builder => {...})
const reducer2 = createReducer(initialState, builder => {...})

const mergedReducer = mergeReducers<StateType>(initialState, reducer1, reducer2, ...)
```
