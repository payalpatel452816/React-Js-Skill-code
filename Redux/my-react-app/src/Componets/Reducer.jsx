// import { BUY_CHOCO } from "../Componets/Constants";
// import { BUY_CAKE } from "../Componets/Constants";
// let initialValue = {
//     numOfChoco:10,
//     numOfCake:20
// }
// const ChocoReducer = (state = initialValue , action) => {
//     switch(action.type){
//         case BUY_CHOCO: 
//         console.log('ChocoReducer Called');
//         return{
//             ...state,
//             numOfChoco:state.numOfChoco - 1
//         }
//         case BUY_CAKE: 
//         console.log('ChocoReducer Called');
//         return{
//             ...state,
//             numOfCake:state.numOfCake - 1
//         }
//         default:return state
//     }
// }
// export default ChocoReducer



// lect24

import { BUY_CHOCO } from "../Componets/Constants";
import { BUY_CAKE } from "../Componets/Constants";
let initialValueChoco = {
    numOfChoco:10
}
let initialValueCake = {
    numOfCake:20
}
// let initialValue = {
//     numOfChoco:10,
//     numOfCake:20
// }
export const ChocoReducer = (state = initialValueChoco , action) => {
    switch(action.type){
        case BUY_CHOCO: 
        console.log('ChocoReducer Called');
        return{
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        default:return state
    }
}
export const CakeReducer = (state = initialValueCake , action) => {
    switch(action.type){
        case BUY_CAKE: 
        console.log('ChocoReducer Called');
        return{
            ...state,
            numOfCake:state.numOfCake - 1
        }
        default:return state
    }
}   
