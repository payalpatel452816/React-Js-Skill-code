import { PRODUCT_SET } from "..ReduxMiddleware/Constatnt";
export const product_set = (product) => {
    return{
        type:PRODUCT_SET,
        payload:product
    }
}