import { menuItems } from "./data/db";
import MenuItem from "./components/Item";
function App() {
  return (
    <>
      <header className="bg-blue-600 p-10 flex justify-center items-center">
        <h1 className="text-3xl font-semibold uppercase text-gray-100">
          Calculadora de propinas
        </h1>
      </header>

      <main className="p-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="uppercase font-black text-4xl mb-4">Menu</h1>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <MenuItem 
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="uppercase font-bold">Consumo</h1>
        </div>
      </main>
    </>
  );
}

export default App;
