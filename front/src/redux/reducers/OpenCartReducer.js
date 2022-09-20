const initialState = false;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "open":
            return true;
        case "close":
            return false;
        default:
            return state;
    }
};

export default reducer;
