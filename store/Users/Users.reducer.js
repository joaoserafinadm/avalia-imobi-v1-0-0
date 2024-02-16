export default function usersArrayReducer(state = [], action) {
    switch (action.type) {
        case 'USERS_ARRAY':
            return action.payload

        default: return state
    }
}