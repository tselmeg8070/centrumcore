export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';


export function cartAddProduct(product) {
    return {
        type: CART_ADD_PRODUCT,
        product,
    }
}
