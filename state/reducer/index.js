import { combineReducers } from "redux";
import tokenReducer from './tokenReducer'
import chatUserReducer from './chatUserReducer'
import SuccessReducer from './SuccessReducer'
import ErrorReducer from './ErrorReducer'
import WarningReducer from './WarningReducer'

const reducers=combineReducers({
    token:tokenReducer,
    chatuser:chatUserReducer,
    success:SuccessReducer,
    error:ErrorReducer,
    warning:WarningReducer
})
export default reducers;