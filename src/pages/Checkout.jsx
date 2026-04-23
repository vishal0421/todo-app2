import { useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, subtotal, tax, total } = location.state || {
    cart: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("🎉 Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar cart={cart} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          to="/cart"
          className="text-gray-400 text-sm hover:text-yellow-400 transition"
        >
          ← Back to Cart
        </Link>

        <h1 className="text-4xl font-bold mt-4 mb-10">
          Checkout <span className="text-yellow-400">Summary</span>
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 
                           hover:scale-101 hover:shadow-lg hover:shadow-yellow-200 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-700"
                  />
                  <p className="text-gray-200">
                    {item.name} x {item.qty}
                  </p>
                </div>
                <p className="font-semibold text-yellow-400">
                  ₹{(item.price * item.qty).toFixed(2)}
                </p>
              </div>
            ))}

            <hr className="border-gray-700 my-4" />

            {/* Totals */}
            <div className="flex justify-between text-lg font-semibold">
              <p>Subtotal</p>
              <p>₹{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <p>Tax (8%)</p>
              <p>₹{tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-yellow-400">
              <p>Total</p>
              <p>₹{total.toFixed(2)}</p>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-100 py-4 text-lg font-bold rounded-2xl
             bg-linear-to-r from-yellow-400 to-orange-400
             text-black shadow-lg shadow-yellow-400/50
             hover:from-yellow-500 hover:to-orange-300
             hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/70
             transition-all duration-300"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
