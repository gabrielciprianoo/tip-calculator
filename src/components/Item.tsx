import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
};
export default function MenuItem({ item }: MenuItemProps) {
  return (
    <button className="flex justify-between border p-1 border-blue-400 hover:bg-blue-200 p-2 cursor-pointer w-full ">
      <h2>{item.name}</h2>
      <h2 className="font-bold">${item.price}</h2>
    </button>
  );
}
