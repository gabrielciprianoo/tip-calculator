import { MenuItem, Order } from "../types";


export type OrderActions = 
    | { type: "add-item", payload: { item : MenuItem} }
    | { type: "delete-item", payload: { item : MenuItem} }
    | { type: "decrease-quantity", payload: { id : MenuItem["id"]} }
  
export type OrderState = {
    order: Order[];
    tip: number;
}

export const initialState: OrderState = { 
    order:[],
    tip:0
}

export const orderReducer = (
    state: OrderState = initialState,
    actions: OrderActions
) =>{

    switch(actions.type){
        case "add-item":
            console.log('add / +')
            return state;
        case "delete-item":
            console.log('delete')
            return state;
        case "decrease-quantity":
            console.log('decrease')
            return state;
        default:
            return state;
    }
}