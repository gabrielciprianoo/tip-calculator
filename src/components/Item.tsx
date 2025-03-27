import type { MenuItem } from "../types";
import type { OrderActions } from "../reducers/OrderReducer";
import { ActionDispatch } from "react";

type MenuItemProps = {
  item: MenuItem;
  dispatch: ActionDispatch<[actions: OrderActions]>;
};
export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="flex justify-between border border-blue-600 hover:bg-blue-200 p-2 cursor-pointer w-full "
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <h2>{item.name}</h2>
      <h2 className="font-bold">${item.price}</h2>
    </button>
  );
}
