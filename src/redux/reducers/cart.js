import {CART_ADD_PRODUCT} from "../actions/cart";

function productReducer(state = {products: []}, action) {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            return {
                ...state,
                products: state.products.push(action.product)
            };
        default:
            return state;
    }
}

export default productReducer;
