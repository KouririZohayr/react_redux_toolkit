import pays from './Reducer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    listPays: pays
})
export default reducer