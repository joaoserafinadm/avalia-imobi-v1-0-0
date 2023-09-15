export default function toggleBarStatusReducer(state = true, action) {
    switch (action.type) {
        case 'TOGGLE_BAR_CHANGE':
            return action.payload

        case 'TOGGLE_BAR_OFF':
            return action.payload

        default: return state
    }
}