import { useState } from "react";

export default function AddToCartButton({ item, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(item);          
    setAdded(true);           

    
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-full font-semibold text-black
        ${added ? "bg-green-400 scale-105" : "bg-yellow-400 hover:bg-yellow-300 hover:scale-105"} 
        transition-all duration-300`}
    >
      {added ? "Added ✓" : "Add to Cart"}
    </button>
  );
}