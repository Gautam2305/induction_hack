const EventReducer = (state,/* action*/ {type,payload}) => {
    switch(type) {
        case "push":
            return [...state, payload];
        case "update":
            return state.map(e=>e.id === payload.id ? payload : e);
        case "delete":
            return state.filter(e => e.id !== payload.id);
        default:
            throw new Error()
    }
}

export {EventReducer};