export const Increment = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "Inc",
            payload:amount
        })
    }
}
export const Decrement = (amount) => {
    return  (dispatch) => {
        dispatch({
            type: "Dec",
            payload:amount
        })
    }
}