import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSignInAlt, FaUserPlus, FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar({ cart = [] }) {
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16">

           
            <Link to="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md transition-all duration-300" />
                <img
                  src="https://img.freepik.com/premium-vector/food-logo-vector-creative-food-logo-design-template_1044445-61.jpg"
                  alt="UrbanMasala"
                  className="relative w-11 h-11 rounded-full object-cover border-2 border-yellow-400/80 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-black tracking-widest text-yellow-400 uppercase">
                  Urban
                </span>
                <span className="text-[13px] font-light tracking-[4px] text-white/70 uppercase -mt-0.5">
                  Masala
                </span>
              </div>
            </Link>

       
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    pathname === to ? "text-yellow-400" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-yellow-400 transition-all duration-300 ${
                      pathname === to ? "w-5" : "w-0 group-hover:w-4"
                    }`}
                  />
                </Link>
              ))}
            </div>

          
            <div className="hidden lg:flex items-center gap-2">

             
              <Link
                to="/cart"
                className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-200 hover:bg-white/5 group"
              >
                <FaShoppingCart size={18} className="group-hover:scale-110 transition-transform duration-200" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

             
              <div className="w-px h-6 bg-white/10 mx-1" />

             
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                    userDropdown
                      ? "bg-yellow-400/10 border-yellow-400/40 text-yellow-400"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/8 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <FaUser size={14} />
                  <span>Account</span>
                  <FaChevronDown
                    size={11}
                    className={`transition-transform duration-200 ${userDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {userDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                   
                    <div className="h-0.5 w-full bg-yellow-400" />
                    <div className="p-2">
                      <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest px-3 py-2">
                        My Account
                      </p>

                      <Link
                        to="/login"
                        onClick={() => setUserDropdown(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-150"
                      >
                        <FaSignInAlt size={13} />
                        <span className="text-sm font-semibold">Login</span>
                      </Link>

                      <Link
                        to="/register"
                        onClick={() => setUserDropdown(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-150"
                      >
                        <FaUserPlus size={13} />
                        <span className="text-sm font-semibold">Register</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Now */}
              <Link
                to="/menu"
                className="flex items-center gap-2 px-5 py-2 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-black rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Order Now →
              </Link>
            </div>

            {/* Mobile Right */}
            <div className="lg:hidden flex items-center gap-2">
              <Link to="/cart" className="relative p-2.5 text-gray-400 hover:text-yellow-400 transition-colors">
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 text-gray-400 hover:text-white transition-colors"
              >
                {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden border-t border-white/5 bg-[#0d0d0d]/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                  pathname === to
                    ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                    : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="h-px bg-white/5 my-2" />

            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/5 text-sm font-semibold transition-all"
              >
                <FaSignInAlt size={13} />
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-black transition-all"
              >
                <FaUserPlus size={13} />
                Register
              </Link>
            </div>

            <Link
              to="/menu"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-black rounded-xl transition-all mt-1"
            >
              Order Now →
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}

export default Navbar;