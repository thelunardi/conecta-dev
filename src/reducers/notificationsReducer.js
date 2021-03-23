import { GET_NOTIFICATIONS } from '../actions/notificationsAction'

const INITIAL_STATE = {
    notifications: null
}

const notificationsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_NOTIFICATIONS: {
            return {
                ...state,
                notifications: action.payload.notifications
            }
        }
        default:
            return state
    }
}

export default notificationsReducer