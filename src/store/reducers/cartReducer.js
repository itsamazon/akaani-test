const defaultState = {
    open: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "cartstate":
            return { ...state, open: action.status }
        default:
            return state
    }
}
