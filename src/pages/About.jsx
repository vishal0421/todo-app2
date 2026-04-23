import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "Head Chef & Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "15+ years of culinary mastery across Mumbai's finest kitchens.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Ensures every order reaches you with perfection and speed.",
  },
  {
    name: "Rohan Das",
    role: "Tech & Innovation Lead",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Built the QR ordering system that powers URBANMasala.",
  },
];

const milestones = [
  { year: "2020", event: "URBANMasala founded in Ahmedabad" },
  { year: "2021", event: "Launched QR-based digital ordering system" },
  { year: "2022", event: "Expanded to 3 locations across Gujarat" },
  { year: "2023", event: "Crossed 1 lakh orders milestone" },
  { year: "2024", event: "Launched mobile app & loyalty program" },
];

export default function About({ cart = [] }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar cart={cart} />

      {/* Hero */}
      <section className="relative px-8 py-20 max-w-6xl mx-auto text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-yellow-400/8 blur-3xl top-0 left-1/2 -translate-x-1/2" />
        </div>
        <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          More Than Just <br />
          <span className="text-yellow-400">Food</span>, It's an Experience
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          URBANMasala was born from a simple idea — great food shouldn't come with the hassle of waiting.
          We blended technology with tradition to create Ahmedabad's first fully digital dine-in experience.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-[#111] py-16">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["1 Lakh+", "Orders Served"],
            ["50+", "Menu Items"],
            ["4.9★", "Avg Rating"],
            ["3", "Locations"],
          ].map(([val, label]) => (
            <div key={label} className="group">
              <p className="text-4xl font-black text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                {val}
              </p>
              <p className="text-gray-400 text-sm mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="px-8 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Our Mission</p>
          <h2 className="text-4xl font-black mb-6 leading-tight">
            Redefining How <br /> India <span className="text-yellow-400">Dines Out</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            We believe every dining moment should be seamless, enjoyable, and memorable. Our QR-based ordering
            eliminates wait times, reduces errors, and lets you focus on what truly matters — the food and the company.
          </p>
          <p className="text-gray-400 leading-relaxed">
            From sourcing fresh local ingredients to crafting recipes that honor both traditional and modern flavors,
            every dish at URBANMasala is made with intention and care.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
            alt="Restaurant"
            className="rounded-2xl w-full object-cover h-80 border border-gray-800"
            style={{ boxShadow: "0 0 60px rgba(251,191,36,0.1)" }}
          />
          <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black rounded-xl px-5 py-3 font-bold text-sm shadow-lg">
            Est. 2020 🍽️
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#111] px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest text-center mb-3">Journey</p>
          <h2 className="text-4xl font-black text-center mb-14">Our Milestones</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-800" />
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex items-center gap-8 mb-10 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block bg-[#1a1a1a] border border-gray-800 rounded-xl px-6 py-4
                    hover:border-yellow-400 transition-all duration-300`}
                  >
                    <p className="text-yellow-400 font-bold text-lg">{m.year}</p>
                    <p className="text-gray-300 text-sm mt-1">{m.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-yellow-400 border-4 border-[#111] z-10 " />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest text-center mb-3">The People</p>
        <h2 className="text-4xl font-black text-center mb-14">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center
              hover:border-yellow-400 hover:scale-105 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full border-2 border-yellow-400 mx-auto mb-4 object-cover"
              />
              <h3 className="text-white font-bold text-lg">{member.name}</h3>
              <p className="text-yellow-400 text-xs font-semibold mt-1 mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111] text-center">
        <h2 className="text-4xl font-black mb-4">Come Visit Us 🍛</h2>
        <p className="text-gray-400 mb-8">Experience the future of dining at URBANMasala.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/menu">
            <button className="bg-yellow-400 text-black px-8 py-3.5 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition-all duration-300">
              View Menu →
            </button>
          </Link>
          <Link to="/contact">
            <button className="border border-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-yellow-400 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}