import { useState } from "react";
import { MenuItem, Order } from "../types";
import { MAX_QUANTITY_ITEMS_ORDER, MIN_QUANTITY_ITEMS_ORDER } from "../helpers";
export default function UseOrder() {
  const [order, setOrder] = useState<Order[]>([]);
  const [tip, setTip] = useState<number>(0);

  const addItem = (item: MenuItem) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (orderItem) => orderItem.id === item.id
      );

      if (!existingItem) {
        return [...prevOrder, { ...item, quantity: 1 }];
      }

      return existingItem.quantity < MAX_QUANTITY_ITEMS_ORDER
        ? prevOrder.map((orderItem) =>
            orderItem.id === item.id
              ? { ...orderItem, quantity: orderItem.quantity + 1 }
              : orderItem
          )
        : prevOrder;
    });
  };

  const deleteItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };

  const decreaseQuantity = (item: MenuItem) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (orderItem) => orderItem.id === item.id
      );

      return existingItem && existingItem.quantity  >MIN_QUANTITY_ITEMS_ORDER
        ? prevOrder.map((orderItem) =>
            orderItem.id === item.id
              ? { ...orderItem, quantity: orderItem.quantity - 1 }
              : orderItem
          )
        : prevOrder;
    });
  };

  return {
    order,
    setOrder,
    addItem,
    deleteItem,
    tip,
    setTip,
    decreaseQuantity
  };
}
