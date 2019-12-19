export const PRODUCTS_SET = 'PRODUCTS_SET';


export function setProducts(products) {
    return {
        type: PRODUCTS_SET,
        products,
    }
}
