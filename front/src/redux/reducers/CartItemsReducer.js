const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
    let newState;
    switch (type) {
        case "add_item":
            newState = [...state];
            let test = false;
            newState.forEach((item) => {
                if (item.id === payload.id) {
                    item.quantity += payload.quantity;
                    test = true;
                }
            });
            if (!test) newState.push(payload);
            return newState;
        case "remove_item":
            newState = state.filter(({ _id }) => _id !== payload);
            return newState;
        case "decrement_item":
            newState = [...state];
            let removable = false;
            newState.forEach((item) => {
                if (item._id !== payload) return;
                if (item.quantity === 1) {
                    removable = true;
                    return;
                }
                item.quantity--;
            });
            if (removable) return newState.filter(({ _id }) => _id !== payload);
            return newState;
        case "increment_item":
            newState = [...state];
            newState.forEach((item) => {
                if (item._id !== payload) return;
                item.quantity++;
            });
            return newState;
        default:
            return state;
    }
};

export default reducer;
