import {CART_ADD_PRODUCT, CART_REMOVE_PRODUCT} from "../actions/cart";

function productReducer(state = {products: []}, action) {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            state.products.push(action.product);
            return {
                ...state,
                products: state.products
            };
        case CART_REMOVE_PRODUCT:
            state.products.splice(action.index, 1);
            return  {
                ...state,
                products: state.products
            };
        default:
            return state;
    }
}

export default productReducer;
