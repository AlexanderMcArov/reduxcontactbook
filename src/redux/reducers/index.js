import { combineReducers } from 'redux'
import contactbookReducer from './contactbook'

export default combineReducers({
    contactReducer: contactbookReducer
})

