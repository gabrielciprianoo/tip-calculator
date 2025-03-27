import { formatCurrency } from "../helpers";
import { Order } from "../types";
import { Fragment } from "react/jsx-runtime";
import { ActionDispatch } from "react";
import type { OrderActions } from "../reducers/OrderReducer";
type OrderContentProps = {
  order: Order[];
  dispatch: ActionDispatch<[actions: OrderActions]>;
};

export default function OrderContents({ order, dispatch }: OrderContentProps) {
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
                      dispatch({ type: "add-item", payload: { item } });
                    }}
                  >
                    +
                  </button>
                  <button
                    className="bg-blue-600 text-xl text-white px-2 cursor-pointer rounded-full flex items-center justify-center"
                    onClick={() => {
                      dispatch({type: "decrease-quantity", payload: { item: item }});
                    }}
                  >
                    -
                  </button>
                  <button
                    className="bg-red-600 text-white px-2 cursor-pointer rounded-full"
                    onClick={() => {
                      dispatch({type: "delete-item", payload: {id: item.id }});
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
