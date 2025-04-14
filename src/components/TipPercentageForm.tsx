import type { ActionDispatch } from "react";
import { OrderActions } from "../reducers/OrderReducer";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  dispatch: ActionDispatch<[actions: OrderActions]>
};

export default function TipPercentageForm({ dispatch }: TipPercentageFormProps) {
  return (
    <div className="mt-4">
      <h3 className="font-black text-md">Porcentaje de la propina</h3>

      <div className="mt-4">
        <form action="">
          <div className="flex space-x-4">
            {tipOptions.map((option) => (
              <div key={option.id} className=" space-x-1">
                <input
                  type="radio"
                  name="tip"
                  id={option.id}
                  value={option.value}
                  onChange={() => dispatch({ type: "add-tip", payload: { value: option.value } })}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
