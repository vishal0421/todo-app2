import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Home({ cart }) {
  const chefItems = [
    {
      id: 1,
      name: "Truffle Margherita",
      desc: "Fresh truffle shavings, mozzarella & tomato sauce.",
      price: "₹189",
      image:
        "https://img.freepik.com/premium-photo/top-view-minimalistic-isolated-margherita-with-truffle-oil-pizza_759095-168044.jpg?w=2000",
    },
    {
      id: 2,
      name: "Italian Pepperoni",
      desc: "Classic pepperoni pizza with mozzarella cheese.",
      price: "₹169",
      image:
        "https://thetrellis.com/wp-content/uploads/2022/06/o2.jpg",
    },
    {
      id: 3,
      name: "Pesto Pasta",
      desc: "Creamy pesto sauce pasta with parmesan cheese.",
      price: "₹149",
      image:
        "https://insanelygoodrecipes.com/wp-content/uploads/2024/09/chicken-pesto-pasta-recipe-1024x1536.jpg",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      
      <Navbar cart={cart} />

    
      <section className="px-8 py-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-yellow-400 text-lg font-medium animate-pulse">
            New Digital Dining Experience
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Scan QR & <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-400 to-orange-400">
              Order Food
            </span>{" "}
            <br />
            Instantly
          </h1>

          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-md">
            No waiting for waiters. Just scan the QR code at your table, browse our digital menu, and place your order instantly.
          </p>

        
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <Link to="/menu">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold 
                                 hover:bg-linear-to-r hover:from-yellow-400 hover:to-orange-400
                                 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-yellow-400">
                View Menu
              </button>
            </Link>

            <button className="border border-gray-700 px-8 py-3 rounded-full 
                               hover:border-yellow-400 hover:scale-105 transition-all duration-300">
              Scan Demo
            </button>
          </div>

          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-10 mt-8 text-center md:text-left">
            <div className="hover:scale-105 transition transform duration-300">
              <h2 className="text-3xl font-bold text-yellow-400">4.9★</h2>
              <p className="text-gray-400 text-sm">Customer Rating</p>
            </div>
            <div className="hover:scale-105 transition transform duration-300">
              <h2 className="text-3xl font-bold text-yellow-400">2 min</h2>
              <p className="text-gray-400 text-sm">Avg Order Time</p>
            </div>
            <div className="hover:scale-105 transition transform duration-300">
              <h2 className="text-3xl font-bold text-yellow-400">50+</h2>
              <p className="text-gray-400 text-sm">Menu Items</p>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/e357b234-9ff0-4aff-a200-ba60f70dbf12-41-plov.jpg"
            alt="Delicious Food"
            className="rounded-3xl w-full max-w-md shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      
      <section className="px-8 py-24 bg-[#111]">
        <h2 className="text-3xl font-bold text-center mb-14 animate-bounce">
          Three Steps to Delicious
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Scan QR Code", "Browse Menu", "Order Instantly"].map((step, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 
                         hover:border-yellow-400 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-yellow-400"
            >
              <h3 className="text-xl font-semibold mb-3">{step}</h3>
              <p className="text-gray-400 text-sm">
                {step === "Scan QR Code" &&
                  "Scan the QR code on your table to open the digital menu instantly."}
                {step === "Browse Menu" &&
                  "Explore delicious dishes, drinks, and desserts from our menu."}
                {step === "Order Instantly" &&
                  "Add items to cart and place your order with one tap."}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Chef's Signatures</h2>
          <Link to="/menu" className="text-yellow-400 hover:underline mt-4 md:mt-0">
            View Full Menu →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {chefItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden 
                         hover:scale-105 hover:shadow-yellow-400 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                <p className="text-yellow-400 mt-3 font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-24 bg-[#111] text-center">
        <h2 className="text-4xl font-bold mb-6 animate-pulse">Ready to Order?</h2>
        <p className="text-gray-400 mb-8">
          Scan the QR code at your table and start ordering instantly.
        </p>
        <Link to="/menu">
          <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold
                             hover:bg-linear-to-r hover:from-yellow-400 hover:to-orange-400
                             hover:scale-105 transition-all duration-300 shadow-md hover:shadow-yellow-400">
            Explore Menu
          </button>
        </Link>
      </section>

     
    </div>
  );
}