import { menuItems } from "./data/db";
import MenuItem from "./components/Item";
import UseOrder from "./hooks/UseOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
function App() {
  const { order, addItem, deleteItem } = UseOrder();

  return (
    <>
      <header className="bg-blue-600 p-10 flex justify-center items-center">
        <h1 className="text-3xl font-semibold uppercase text-gray-100">
          Calculadora de propinas
        </h1>
      </header>

      <main className="p-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="uppercase font-black text-4xl mb-8">Menu</h1>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <MenuItem item={item} key={item.id} addItem={addItem} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="uppercase font-black text-4xl mb-8">Consumo</h1>
          <div className="border-dashed border-2 border-blue-600 p-4 min-h-[20rem]">
            <OrderContents order={order} deleteItem={deleteItem} />

            <OrderTotals order={order}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
