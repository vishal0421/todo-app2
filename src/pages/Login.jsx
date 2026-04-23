import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);


export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Logged in successfully!");
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(251,191,36,0.07) 0%, transparent 60%),
                          radial-gradient(ellipse at 80% 20%, rgba(251,191,36,0.05) 0%, transparent 50%)`,
      }}
    >
      <div className="w-full max-w-5xl bg-[#111] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row" style={{ minHeight: "580px" }}>

        {/* LEFT — Food Visual Panel */}
        <div
          className="relative md:w-1/2 flex flex-col justify-between p-10 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a1200 60%, #0d0d0d 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl" style={{ top: "-80px", left: "-80px" }} />
            <div className="absolute w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" style={{ bottom: "-60px", right: "-60px" }} />
          </div>

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <img
              src="https://img.freepik.com/premium-vector/food-logo-vector-creative-food-logo-design-template_1044445-61.jpg"
              alt="logo"
              className="w-12 h-12 object-cover rounded-full border-2 border-yellow-400"
            />
            <span className="text-2xl font-bold text-yellow-400">
              URBAN<span className="text-white">Masala</span>
            </span>
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-8 gap-6">
            <img
              src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/e357b234-9ff0-4aff-a200-ba60f70dbf12-41-plov.jpg"
              alt="Delicious Food"
              className="rounded-2xl w-full max-w-xs shadow-2xl border border-yellow-400/20 object-cover h-56"
              style={{ boxShadow: "0 0 40px rgba(251,191,36,0.15)" }}
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white leading-tight">
                Scan & <span className="text-yellow-400">Order</span> <br /> Instantly
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-xs">
                No waiters needed. Browse our full digital menu and place your order in seconds.
              </p>
            </div>
            <div className="flex gap-8 mt-2">
              {[["4.9★", "Rating"], ["2 min", "Order Time"], ["50+", "Dishes"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="text-yellow-400 font-bold text-lg">{val}</p>
                  <p className="text-gray-500 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-10 flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-yellow-400" : "bg-gray-700"}`} />
            ))}
          </div>
        </div>

        {/* RIGHT — Login Form */}
        <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-12 py-10 bg-[#141414]">

          <h1 className="text-3xl font-bold text-white mb-1">Welcome Back 👋</h1>
          <p className="text-gray-500 text-sm mb-8">Sign in to continue ordering your favourites.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-600"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 pr-11 text-sm
                             focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-400 transition-colors"
                >
                  {showPass ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right -mt-1">
              <button type="button" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-black text-base
                         bg-yellow-400 hover:bg-yellow-300 hover:scale-[1.02]
                         transition-all duration-300 shadow-lg shadow-yellow-400/20"
            >
              Sign In →
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-600 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>

          

          {/* Register link */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-400 font-semibold hover:underline">
              Register for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}