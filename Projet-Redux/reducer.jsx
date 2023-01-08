
import listusers from './ListUsers'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    listdata: listusers
})
export default reducer