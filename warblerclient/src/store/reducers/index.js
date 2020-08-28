import {combineReducers} from 'redux'
import errors from './errors'
import currentuser from './currentuser'

const rootReducer = combineReducers({
	errors,
	currentuser
})

export default rootReducer