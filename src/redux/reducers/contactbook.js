import {
    FETCH_ADD_ITEM
} from '../actions/constans'

const initialState = {
    contacts: []
}

export default function contactBookReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_ADD_ITEM:
            return{
                ...state,
                contacts: action.contacts
            }
    
        default:
            return state
    }
}