import Navbar from "../components/Navbar";
import menu from "../data/menuData";
import MenuCard from "../components/MenuCard";

function Menu({ addToCart, cart }) {

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      <Navbar cart={cart} />

      <div className="text-center py-10">

        <h1 className="text-4xl font-bold">
          Restaurant <span className="text-yellow-400">Menu</span>
        </h1>

        <p className="text-gray-400 mt-2">
          Choose your favorite food
        </p>

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-10">

        {menu.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default Menu;