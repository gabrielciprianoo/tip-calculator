import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void;
};
export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
     className="flex justify-between border border-blue-600 hover:bg-blue-200 p-2 cursor-pointer w-full "
     onClick={() => addItem(item)}
     >
      <h2>{item.name}</h2>
      <h2 className="font-bold">${item.price}</h2>
    </button>
  );
}
