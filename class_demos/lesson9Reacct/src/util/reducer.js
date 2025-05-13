
export default function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'increment':
            return state + payload;
        case 'decrement':
            return state - payload;
        case 'reset':
            return 0;
        default:
            return state;
    }
}
