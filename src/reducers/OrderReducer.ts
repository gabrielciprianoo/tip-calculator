import { addItem, addTip, decreaseQuantity, deleteItem } from "../actions/orderActions";
import { MenuItem, Order } from "../types";


export type OrderActions = 
    | { type: "add-item", payload: { item : MenuItem} }
    | { type: "delete-item", payload: { id : MenuItem["id"]} }
    | { type: "decrease-quantity", payload: { item : MenuItem} }
    | { type: "add-tip", payload: { value : number} }
  
export type OrderState = {
    order: Order[];
    tip: number;
}

export const initialState: OrderState = { 
    order:[],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    actions: OrderActions
) =>{

    switch(actions.type){
        case "add-item":
             return addItem(state, actions.payload.item);

        case "delete-item":
            return deleteItem(state, actions.payload.id);
            
        case "decrease-quantity":
           
            return decreaseQuantity(state, actions.payload.item);

        case "add-tip":
           return addTip(state, actions.payload.value);
        default:
            return state;
    }
}