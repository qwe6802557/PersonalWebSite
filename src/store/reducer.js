import { combineReducers } from '@reduxjs/toolkit';
// import reducers here
import reducers from '@/store/features/index';

const rootReducer = combineReducers({
    ...reducers
});

export default rootReducer;
