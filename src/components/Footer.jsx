import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


// const QRIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
//     <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
//     <rect x="5" y="5" width="4" height="4" fill="currentColor" />
//     <rect x="16" y="2" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
//     <rect x="19" y="5" width="4" height="4" fill="currentColor" />
//     <rect x="2" y="16" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
//     <rect x="5" y="19" width="4" height="4" fill="currentColor" />
//     <rect x="16" y="16" width="4" height="4" fill="currentColor" />
//     <rect x="22" y="16" width="4" height="4" fill="currentColor" />
//     <rect x="16" y="22" width="4" height="4" fill="currentColor" />
//     <rect x="22" y="22" width="4" height="4" fill="currentColor" />
//   </svg>
// );
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const ChevronUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);


export default function Footer() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBtn(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const siteMapLinks = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/menu" },
    { label: "Cart", to: "/cart" },
    { label: "Checkout", to: "/checkout" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", to: "#" },
    { label: "Terms of Service", to: "#" },
    { label: "Cookie Policy", to: "#" },
    { label: "Careers", to: "#" },
  ];

  const socialLinks = [
    { icon: <TwitterIcon />, href: "#", label: "Twitter" },
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-black border-t-4 border-black-400 overflow-hidden">

   
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          "w-56 h-56 top-[-30px] right-[50px] rotate-12 opacity-[0.06]",
          "w-40 h-40 top-[30px] right-[200px] rotate-[30deg] opacity-[0.04]",
          "w-72 h-72 top-[-60px] right-[320px] rotate-[-8deg] opacity-[0.04]",
          "w-32 h-32 bottom-[10px] right-[60px] rotate-45 opacity-[0.05]",
        ].map((cls, i) => (
          <div key={i} className={`absolute border border-yellow-400 rounded-md ${cls}`} />
        ))}
      </div>

      
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-14 pb-8 grid grid-cols-1 md:grid-cols-3 gap-12">

        
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img 
          src="https://img.freepik.com/premium-vector/food-logo-vector-creative-food-logo-design-template_1044445-61.jpg"
          alt="logo"
          className="w-15 h-15 object-cover rounded-full border border-yellow-400"
        />
            <h1 className="text-2xl font-bold text-yellow-400">URBAN<span className="text-white">Masala</span></h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-260px">
            Scan the QR code at your table and order your favourite food instantly — no waiters needed.
          </p>
          <div className="flex gap-3 mt-1">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg
                           bg-white/5 border border-white/10 text-gray-400
                           hover:bg-yellow-400 hover:border-yellow-400 hover:text-[#0d1a0f]
                           transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-[2px] pb-3 border-b border-yellow-400/30">
            Site Map
          </h4>
          <ul className="flex flex-col gap-3">
            {siteMapLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-[2px] pb-3 border-b border-yellow-400/30">
            Legal
          </h4>
          <ul className="flex flex-col gap-3">
            {legalLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Restaurant 
        </p>
        <button
          onClick={scrollToTop}
          className={`flex items-center gap-2 text-yellow-400 text-xs font-semibold
                      border border-yellow-400/40 rounded-lg px-4 py-2
                      hover:bg-yellow-400/10 transition-all duration-200
                      ${showBtn ? "opacity-100" : "opacity-40"}`}
        >
          <ChevronUpIcon />
          Back to Top
        </button>
      </div>
    </footer>
  );
}
