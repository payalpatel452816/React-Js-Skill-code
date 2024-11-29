import { BUY_CHOCO } from "../Componets/Constants";
import { BUY_CAKE } from "../Componets/Constants";
export const buy_choco = () => {
    console.log('buy_chcoc action called');
    return{
        type:BUY_CHOCO
    }
}
export const buy_cake = () => {
    console.log('buy_cake action called');
    return{
        type:BUY_CAKE
    }
}