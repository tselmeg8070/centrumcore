export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';

export function cartAddProduct(product) {
    return {
        type: CART_ADD_PRODUCT,
        product,
    }
}

export function cartRemoveProduct(index) {
    return {
        type: CART_REMOVE_PRODUCT,
        index,
    }
}
