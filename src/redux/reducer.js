const initState = {
    cart: [],
    searchValue: ''
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "SEARCH_VALUE":
            console.log(state.searchValue);
        default: 
            return state

    }
}
export default rootReducer;