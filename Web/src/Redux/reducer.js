import {PROFILE} from './actionTypes'

export const initialState = {
    profileObj : {}
}

export default function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case PROFILE:
            localStorage.setItem('profile' , JSON.stringify({payload}))
            return {
                ...state,
                profileObj: payload
            }
        default:
            return state
    }
}