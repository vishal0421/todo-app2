import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import menu from "../data/menuData";

// ── Icons ──────────────────────────────────────────────────────────────────
const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24"
    fill={filled ? "#facc15" : "none"} stroke="#facc15" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);
const FireIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fb923c" stroke="none">
    <path d="M12 2c0 0-5 5.5-5 10a5 5 0 0 0 10 0C17 7.5 12 2 12 2z"/>
  </svg>
);
const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
    <path d="M2 22l10-10M12.5 6.5C14 3 18 2 21 3c1 3 0 7-3.5 8.5S10 12 8.5 14c-2 3-2 6 0 8"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const TimeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const SpiceIcon = ({ level }) => (
  <div className="flex gap-0.5">
    {[1,2,3].map(i => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24"
        fill={i <= level ? "#ef4444" : "none"} stroke="#ef4444" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
);

// ── Extra data layered on top of menuData ─────────────────────────────────
const EXTRA = {
  1:  { rating: 4.9, reviews: 128, time: "18 min", spice: 1, veg: true,  calories: 680, badge: "Chef's Pick",  desc: "Our signature pizza features paper-thin dough brushed with truffle-infused olive oil, topped with hand-pulled buffalo mozzarella, fresh San Marzano tomatoes, and generous shavings of black truffle. Finished with fresh basil and sea salt.", tags: ["Bestseller","Truffle","Vegetarian"], ingredients: ["Truffle Oil","Buffalo Mozzarella","San Marzano Tomatoes","Fresh Basil","Sea Salt","Thin Crust Dough"], allergens: ["Gluten","Dairy"] },
  2:  { rating: 4.7, reviews: 94,  time: "20 min", spice: 1, veg: false, calories: 820, badge: "Popular",      desc: "Loaded with premium imported Italian pepperoni, slow-fermented dough, rich tomato base, and a generous blanket of aged mozzarella. Every bite is a classic done right.", tags: ["Classic","Pepperoni","Non-Veg"], ingredients: ["Pepperoni","Mozzarella","Tomato Sauce","Oregano","Sourdough Base"], allergens: ["Gluten","Dairy"] },
  3:  { rating: 4.8, reviews: 76,  time: "15 min", spice: 1, veg: true,  calories: 520, badge: "Light",        desc: "Silky al-dente pasta coated in house-made basil pesto, topped with toasted pine nuts, sun-dried tomatoes, and freshly grated Parmesan. A crowd favourite.", tags: ["Vegetarian","Pasta","Light"], ingredients: ["Basil Pesto","Pine Nuts","Penne","Parmesan","Sun-dried Tomato","Olive Oil"], allergens: ["Gluten","Dairy","Nuts"] },
  4:  { rating: 4.9, reviews: 210, time: "22 min", spice: 2, veg: false, calories: 760, badge: "🔥 Top Seller",  desc: "Tender chicken slow-marinated in our 12-spice blend, simmered in a buttery tomato-cream sauce with whole spices. Served with soft butter naan.", tags: ["Non-Veg","Bestseller","Spicy"], ingredients: ["Chicken","Butter","Tomatoes","Cream","Cardamom","Kashmiri Chili"], allergens: ["Dairy"] },
  5:  { rating: 4.6, reviews: 58,  time: "12 min", spice: 2, veg: true,  calories: 420, badge: "Starter",      desc: "Cubes of paneer marinated in a smoky tandoori masala, grilled in the clay oven to perfection. Served with mint chutney and sliced onions.", tags: ["Vegetarian","Starter","Grilled"], ingredients: ["Paneer","Yoghurt","Tandoori Masala","Ginger-Garlic","Mint Chutney"], allergens: ["Dairy"] },
  6:  { rating: 4.5, reviews: 44,  time: "25 min", spice: 2, veg: true,  calories: 580, badge: "Comfort",      desc: "Fragrant long-grain basmati layered with fresh vegetables, whole spices, caramelised onions, and a saffron glaze. Served with cooling raita.", tags: ["Vegetarian","Rice","Comfort"], ingredients: ["Basmati Rice","Saffron","Caramelised Onion","Mixed Veg","Whole Spices"], allergens: ["Dairy"] },
  7:  { rating: 4.7, reviews: 39,  time: "20 min", spice: 1, veg: true,  calories: 610, badge: "Italian",      desc: "Creamy Arborio rice cooked in rich vegetable stock with sautéed wild mushrooms, white wine, Parmesan, and a drizzle of truffle oil. A luxurious bowl.", tags: ["Vegetarian","Italian","Creamy"], ingredients: ["Arborio Rice","Wild Mushrooms","Parmesan","White Wine","Truffle Oil","Thyme"], allergens: ["Dairy","Gluten"] },
  8:  { rating: 4.8, reviews: 180, time: "8 min",  spice: 1, veg: true,  calories: 220, badge: "Quick Bite",   desc: "Thick slices of rustic bread toasted to a golden crisp, rubbed with garlic butter, sprinkled with parsley and sea salt. Great as a side or snack.", tags: ["Vegetarian","Starter","Crispy"], ingredients: ["Sourdough Bread","Garlic Butter","Parsley","Sea Salt"], allergens: ["Gluten","Dairy"] },
  9:  { rating: 4.6, reviews: 102, time: "5 min",  spice: 1, veg: true,  calories: 180, badge: "Refreshing",   desc: "Thick cold brew coffee blended with chilled milk, a hint of vanilla, and topped with a dollop of whipped cream and cocoa dust.", tags: ["Drink","Cold","Vegetarian"], ingredients: ["Cold Brew","Full Fat Milk","Vanilla Syrup","Whipped Cream","Cocoa"], allergens: ["Dairy"] },
  10: { rating: 4.9, reviews: 230, time: "3 min",  spice: 1, veg: true,  calories: 90,  badge: "Classic",      desc: "Our house masala chai brewed strong with whole spices — cardamom, ginger, clove, and cinnamon — simmered with full-cream milk and finished with fresh ginger.", tags: ["Drink","Hot","Vegetarian"], ingredients: ["Assam Tea","Full Cream Milk","Cardamom","Ginger","Clove","Cinnamon"], allergens: ["Dairy"] },
};

const DEFAULT_EXTRA = { rating: 4.5, reviews: 30, time: "20 min", spice: 1, veg: true, calories: 400, badge: "Featured", desc: "A carefully crafted dish made with the freshest ingredients, prepared with love by our kitchen team.", tags: ["Featured"], ingredients: ["Fresh Ingredients"], allergens: [] };

// ── Related items helper ───────────────────────────────────────────────────
function getRelated(current) {
  return menu.filter(m => m.id !== current.id && m.category === current.category).slice(0, 3);
}

// ── Stars ─────────────────────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(rating)} />)}
    </div>
  );
}

export default function ProductDetail({ addToCart, cart = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = menu.find(m => m.id === Number(id));

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center gap-4">
        <Navbar cart={cart} />
        <p className="text-2xl font-bold text-gray-400">Item not found 😕</p>
        <Link to="/menu" className="text-yellow-400 hover:underline">← Back to Menu</Link>
      </div>
    );
  }

  const ex = EXTRA[item.id] || DEFAULT_EXTRA;

  // Generate 3 "gallery" images (same image with slight variety for demo)
  const gallery = [item.image, item.image, item.image];

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const related = getRelated(item);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar cart={cart} />

      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-2 flex items-center gap-2 text-xs text-gray-500">
        <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        <span>/</span>
        <Link to="/menu" className="hover:text-yellow-400 transition-colors">Menu</Link>
        <span>/</span>
        <span className="text-gray-300">{item.name}</span>
      </div>

      {/* ── Back btn ── */}
      <div className="max-w-6xl mx-auto px-6 pb-4">
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-yellow-400 transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform duration-200"><BackIcon /></span>
          Back to Menu
        </button>
      </div>

      {/* ── Main Product Section ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Images */}
          <div className="flex flex-col gap-4 sticky top-24">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 group"
              style={{ background: "linear-gradient(135deg, #111 0%, #1a1200 100%)" }}>
              {/* Glow */}
              <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(251,191,36,0.25) 0%, transparent 65%)" }} />

              <img src={gallery[activeImg]} alt={item.name}
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 relative z-10" />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-yellow-400 text-black text-xs font-black rounded-full shadow-lg">
                {ex.badge}
              </div>

              {/* Veg/Non-veg indicator */}
              <div className={`absolute top-4 right-4 z-20 w-7 h-7 rounded-md flex items-center justify-center border-2 ${ex.veg ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"}`}>
                <div className={`w-3 h-3 rounded-full ${ex.veg ? "bg-green-500" : "bg-red-500"}`} />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className={`flex-1 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${activeImg === i ? "border-yellow-400 scale-105" : "border-gray-700 hover:border-gray-500"}`}>
                  <img src={img} alt="" className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Details */}
          <div className="flex flex-col gap-6">

            {/* Category tag */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[3px] text-yellow-400/70">{item.category}</span>
            </div>

            {/* Title + Tags */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">{item.name}</h1>
              <div className="flex flex-wrap gap-2">
                {ex.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                ))}
              </div>
            </div>

            {/* Rating + Meta */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Stars rating={ex.rating} />
                <span className="text-yellow-400 font-black text-sm">{ex.rating}</span>
                <span className="text-gray-500 text-xs">({ex.reviews} reviews)</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <TimeIcon /><span>{ex.time} prep time</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <span className="text-orange-400">🔥</span><span>{ex.calories} kcal</span>
              </div>
            </div>

            {/* Spice indicator */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">Spice level:</span>
              <SpiceIcon level={ex.spice} />
              <span className="text-xs text-gray-500">{["","Mild","Medium","Hot"][ex.spice]}</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-[15px]">{ex.desc}</p>

            {/* Price + Qty */}
            <div className="flex items-center gap-6 py-4 border-y border-gray-800">
              <div>
                <p className="text-xs text-gray-500 mb-1">Price</p>
                <p className="text-4xl font-black text-yellow-400">₹{item.price}</p>
              </div>
              <div className="flex-1" />
              <div>
                <p className="text-xs text-gray-500 mb-2 text-center">Quantity</p>
                <div className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-700 rounded-2xl px-2 py-1">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-700 hover:bg-gray-600 font-bold text-lg transition-all hover:scale-110">−</button>
                  <span className="w-6 text-center font-black text-lg">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg transition-all hover:scale-110">+</button>
                </div>
              </div>
            </div>

            {/* Total + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">
                Total: <span className="text-white font-black text-xl">₹{item.price * qty}</span>
              </div>
              <button onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2.5 py-4 rounded-2xl font-black text-base transition-all duration-300
                  ${added
                    ? "bg-green-500 text-white scale-[1.02] shadow-lg shadow-green-500/25"
                    : "bg-yellow-400 hover:bg-yellow-300 text-black hover:scale-[1.02] shadow-lg shadow-yellow-400/20"}`}>
                {added ? (
                  <><CheckIcon /> Added to Cart! ✓</>
                ) : (
                  <><CartIcon /> Add {qty > 1 ? `${qty} items` : "to Cart"}</>
                )}
              </button>
            </div>

            {/* Ingredients */}
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {ex.ingredients.map(ing => (
                  <span key={ing} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-gray-700 text-gray-300">
                    <LeafIcon />{ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Allergens */}
            {ex.allergens.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs text-gray-500 font-semibold">Contains:</span>
                {ex.allergens.map(a => (
                  <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400">{a}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Related Items ── */}
      {related.length > 0 && (
        <section className="bg-[#0d0d0d] border-t border-gray-800 px-6 py-14">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black mb-8">
              You might also like <span className="text-yellow-400">→</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map(rel => {
                const relEx = EXTRA[rel.id] || DEFAULT_EXTRA;
                return (
                  <Link key={rel.id} to={`/product/${rel.id}`}
                    className="group bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 hover:scale-[1.02] transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img src={rel.image} alt={rel.name} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-md flex items-center justify-center border-2 bg-[#111]/80"
                        style={{ borderColor: relEx.veg ? "#22c55e" : "#ef4444" }}>
                        <div className={`w-2.5 h-2.5 rounded-full ${relEx.veg ? "bg-green-500" : "bg-red-500"}`} />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">{rel.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-yellow-400 font-black">₹{rel.price}</span>
                        <div className="flex items-center gap-1">
                          <Stars rating={relEx.rating} />
                          <span className="text-xs text-gray-500">{relEx.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}