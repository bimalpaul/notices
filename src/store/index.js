import { combineReducers } from 'redux';

import textTransform from './textTransform';
import textTransformStatus from './textTransformStatus'


export default combineReducers({
    textTransform,
    textTransformStatus
});
