import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Cart({ cart, increaseQty, decreaseQty }) {
  const navigate = useNavigate(); 

  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar cart={cart} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link to="/menu" className="text-gray-400 text-sm hover:text-yellow-400 transition">
          ← Back to Menu
        </Link>

        <h1 className="text-4xl font-bold mt-4 mb-10">
          Your <span className="text-yellow-400">Cart</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
         
          <div className="md:col-span-2 space-y-6">
            {cart.length === 0 ? (
              <p className="text-gray-400">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-[#1a1a1a] p-5 rounded-xl border border-gray-800 
                  hover:border-yellow-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover border border-gray-700"/>
                    <div>
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-gray-400 text-sm">Delicious food item</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <button onClick={() => decreaseQty(item.id)} className="bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 hover:scale-110 transition-transform duration-200">-</button>
                      <span className="px-2">{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)} className="bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 hover:scale-110 transition-transform duration-200">+</button>
                    </div>
                    <p className="text-yellow-400 font-bold text-lg">₹{(item.price * item.qty).toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          
          <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 h-fit shadow-md hover:shadow-yellow-400 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between"><p>Subtotal</p><p>₹{subtotal.toFixed(2)}</p></div>
              <div className="flex justify-between"><p>Tax (8%)</p><p>₹{tax.toFixed(2)}</p></div>
              <hr className="border-gray-700 my-3"/>
              <div className="flex justify-between text-lg font-semibold"><p>Total</p><p className="text-yellow-400">₹{total.toFixed(2)}</p></div>
            </div>

           
            <button
              onClick={() => navigate("/checkout", { state: { cart, subtotal, tax, total } })}
              className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold mt-6 hover:bg-yellow-300 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Proceed to Checkout →
            </button>

            <Link to="/menu">
              <button className="w-full border border-gray-700 py-3 rounded-full mt-3 hover:border-yellow-400 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Continue Shopping
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;