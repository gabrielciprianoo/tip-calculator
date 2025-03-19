import { useMemo } from "react"
import { Order } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: Order[],
    tip: number
}
export default function OrderTotals( {order, tip}: OrderTotalsProps ) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

    const tipAmount = useMemo(() => tip * subtotalAmount, [tip, subtotalAmount])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])
  return (
    <div>
        
        {order.length > 0 && (
            <h3 className="font-bold font-xl mt-6 ">Totales y Propinas</h3>
        )}

        {order.length > 0 && (
            <p>Subtotal: {formatCurrency(subtotalAmount)}</p>
        )}
        {order.length > 0 && (
            <p>Propina: {formatCurrency(tipAmount)}</p>
        )}
        {order.length > 0 && (
            <p>TOTAL: {formatCurrency(totalAmount)}</p>
        )}
        
    </div>
  )
}
