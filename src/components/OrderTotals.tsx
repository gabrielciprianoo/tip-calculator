import { useMemo } from "react"
import { Order } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: Order[]
}
export default function OrderTotals( {order}: OrderTotalsProps ) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
  return (
    <div>
        
        {order.length > 0 && (
            <h3 className="font-bold font-xl mt-6 ">Totales y Propinas</h3>
        )}

        {order.length > 0 && (
            <p>Subtotal: {formatCurrency(subtotalAmount)}</p>
        )}
        {order.length > 0 && (
            <p>Propina: {formatCurrency(subtotalAmount)}</p>
        )}
        {order.length > 0 && (
            <p>TOTAL: {formatCurrency(subtotalAmount)}</p>
        )}
        
    </div>
  )
}
