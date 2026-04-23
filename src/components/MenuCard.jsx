import { useState } from "react";
import { Link } from "react-router-dom";

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export default function MenuCard({ item, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault(); // prevent Link navigation
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden
                    hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10
                    hover:scale-[1.02] transition-all duration-300">
      {/* Image + overlay */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1
                         bg-black/60 backdrop-blur-sm text-yellow-400 border border-yellow-400/30 rounded-full">
          {item.category}
        </span>

        {/* View Details overlay button */}
        <Link
          to={`/product/${item.id}`}
          className="absolute inset-0 flex items-center justify-center
                     bg-black/0 group-hover:bg-black/50 transition-all duration-300"
        >
          <span className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black text-sm font-black
                           rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                           transition-all duration-300 shadow-lg">
            <EyeIcon /> View Details
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-white leading-snug">{item.name}</h3>
          <span className="text-yellow-400 font-black text-lg shrink-0">₹{item.price}</span>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">{item.desc}</p>

        {/* Buttons */}
        <div className="flex gap-2">
          {/* Add to Cart */}
          <button
            onClick={handleAdd}
            className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all duration-300
              ${added
                ? "bg-green-500 text-white scale-[1.02]"
                : "bg-yellow-400 hover:bg-yellow-300 text-black hover:scale-[1.02]"}`}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>

          {/* View Details */}
          <Link
            to={`/product/${item.id}`}
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold
                       border border-gray-700 text-gray-400 hover:border-yellow-400/50
                       hover:text-yellow-400 transition-all duration-200"
          >
            <EyeIcon /> Details
          </Link>
        </div>
      </div>
    </div>
  );
}