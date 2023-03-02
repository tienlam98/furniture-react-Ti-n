const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }

}

const handleSearch = searchResult => {
    return {
        type: "SEARCH_VALUE",
        payload: searchResult
    }

}

export {addToCart, handleSearch}