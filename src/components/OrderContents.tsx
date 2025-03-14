import { formatCurrency } from "../helpers";
import { MenuItem, Order } from "../types";
type OrderContentProps = {
  order: Order[];
  deleteItem: (item: MenuItem["id"]) => void;
};

export default function OrderContents({
  order,
  deleteItem,
}: OrderContentProps) {
  return (
    <>
      <div className="text-md space-y-2">
        {order.length <= 0 ? (
          <p className="text-center mt-8">Orden Vacia</p>
        ) : (
          order.map((item) => (
            <>
              <div className="flex justify-between " key={item.id}>
                <div className="flex space-x-4 flex-1 border-b border-gray-200">
                  <h3>{item.quantity}</h3>
                  <h3>{item.name}</h3>
                </div>
                <h3 className="font-bold mr-4">{formatCurrency(item.price)}</h3>
                <button
                  className="bg-red-600 text-white px-2 cursor-pointer rounded-full"
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  X
                </button>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
}
