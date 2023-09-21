import { combineReducers } from "redux";
import tokenReducer from './tokenReducer'
import chatUserReducer from './chatUserReducer'
const reducers=combineReducers({
    token:tokenReducer,
    chatuser:chatUserReducer
})
export default reducers;