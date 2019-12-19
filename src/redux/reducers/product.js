import {PRODUCTS_SET} from "../actions/product";

function productReducer(state = [], action) {
    switch (action.type) {
        case PRODUCTS_SET:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
}

export default productReducer;
