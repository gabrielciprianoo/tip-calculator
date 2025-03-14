import { useState } from "react";
import { MenuItem, Order } from "../types";
export default function UseOrder() {
  const [order, setOrder] = useState<Order[]>([]);

  const addItem = (item: MenuItem) => {
    const orderItem = order.find((orderItem) => orderItem.id === item.id);
    if (orderItem) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const deleteItem = (id: MenuItem['id']) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  }

  return {
    order,
    setOrder,
    addItem,
    deleteItem
  };
}
