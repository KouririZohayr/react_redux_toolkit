import counterReducer from './Reducer'
import loggedReducer from './Islogged'
import Listeuser from './Listeusers'
import {combineReducers} from 'redux'

const allrducer = combineReducers({
    Mycounter: counterReducer,
    islogged: loggedReducer,
    listes : Listeuser
})
export default allrducer