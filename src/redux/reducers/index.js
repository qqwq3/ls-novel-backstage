
'use strict';

import {combineReducers} from 'redux-immutablejs';
import login from './login';

const rootReducer = combineReducers({
    login,
});

export default rootReducer;





