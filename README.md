#Simple Merge Reducers
This function is useful if you need to split a reducer in many more sub-reducers, without creating more states. 
All the reducers share the same state, and the type of the initial state must be of course the same for all of them.
##Usage
```typescript
import {mergeReducers} from 'simple-merge-reducers'

const mergedReducer = mergeReducers<MyStateType>(initialState, reducer1, reducer2, ...)
```
