import { formatCurrency } from "../helpers";
import { MenuItem, Order } from "../types";
import { Fragment } from "react/jsx-runtime";
type OrderContentProps = {
  order: Order[];
  deleteItem: (item: MenuItem["id"]) => void;
  decreaseQuantity: (item: MenuItem) => void;
  addItem: (item: MenuItem) => void;
};

export default function OrderContents({
  order,
  deleteItem,
  decreaseQuantity,
  addItem,
}: OrderContentProps) {
  return (
    <>
      <div className="text-md space-y-2">
        {order.length <= 0 ? (
          <p className="text-center mt-8">Orden Vacia</p>
        ) : (
          order.map((item) => (
            <Fragment key={item.id}>
              <div className="flex justify-between">
                <div className="flex space-x-4 flex-1 border-b border-gray-200">
                  <h3>{item.quantity}</h3>
                  <h3>{item.name}</h3>
                </div>
                <h3 className="font-bold mr-4">{formatCurrency(item.price)}</h3>
                <div className=" flex justify-between space-x-2">
                  <button
                    className="bg-blue-600 tex-xl text-white px-2 cursor-pointer rounded-full flex items-center justify-center"
                    onClick={() => {
                      addItem(item);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="bg-blue-600 text-xl text-white px-2 cursor-pointer rounded-full flex items-center justify-center"
                    onClick={() => {
                      decreaseQuantity(item);
                    }}
                  >
                    -
                  </button>
                  <button
                    className="bg-red-600 text-white px-2 cursor-pointer rounded-full"
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            </Fragment>
          ))
        )}
      </div>
    </>
  );
}
