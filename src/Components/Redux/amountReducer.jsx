const initialState = 0
const amountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Inc":
            return state + action.payload
            break;
        case "Dec":
            return state - action.payload
            break;
        default:
            return state
    }
   
}
export default amountReducer



