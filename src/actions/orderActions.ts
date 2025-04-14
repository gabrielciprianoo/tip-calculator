import { MAX_QUANTITY_ITEMS_ORDER, MIN_QUANTITY_ITEMS_ORDER } from "../helpers";
import { OrderState } from "../reducers/OrderReducer";
import { MenuItem } from "../types";

export const addItem = (state: OrderState, item: MenuItem): OrderState => {
  const existingItem = state.order.find(
    (orderItem) => orderItem.id === item.id
  );

  if (!existingItem) {
    return {
      ...state,
      order: [
        ...state.order,
        {
          ...item,
          quantity: 1,
        },
      ],
    };
  }

  if (existingItem.quantity < MAX_QUANTITY_ITEMS_ORDER) {
    return {
      ...state,
      order: state.order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      ),
    };
  }

  return state;
};

export const deleteItem = (
  state: OrderState,
  id: MenuItem["id"]
): OrderState => {
  return {
    ...state,
    order: state.order.filter((orderItem) => orderItem.id !== id),
  };
};

export const decreaseQuantity = (
  state: OrderState,
  item: MenuItem
): OrderState => {
  const existingItem = state.order.find(
    (orderItem) => orderItem.id === item.id
  );

  return {
    ...state,
    order:
      existingItem && existingItem.quantity > MIN_QUANTITY_ITEMS_ORDER
        ? state.order.map((orderItem) =>
            orderItem.id === item.id
              ? { ...orderItem, quantity: orderItem.quantity - 1 }
              : orderItem
          )
        : state.order,
  };
};

export function addTip (
  state: OrderState,
  value: number
): OrderState {
  return {
    ...state,
    tip: value,
  };
}
