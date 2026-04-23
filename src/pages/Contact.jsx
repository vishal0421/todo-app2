import { useState } from "react";
import Navbar from "../components/Navbar";

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const infoCards = [
  {
    icon: <MapPinIcon />,
    title: "Find Us",
    lines: ["Shop 12, Satellite Road,", "Ahmedabad, Gujarat - 380015"],
  },
  {
    icon: <PhoneIcon />,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 79 2630 1234"],
  },
  {
    icon: <MailIcon />,
    title: "Email Us",
    lines: ["hello@urbanmasala.in", "support@urbanmasala.in"],
  },
  {
    icon: <ClockIcon />,
    title: "Hours",
    lines: ["Mon – Fri: 11am – 11pm", "Sat – Sun: 10am – 12am"],
  },
];

export default function Contact({ cart = [] }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar cart={cart} />

      {/* Hero */}
      <section className="text-center px-8 py-16">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
        <h1 className="text-5xl font-black mb-4">
          We'd Love to <span className="text-yellow-400">Hear</span> From You
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a question, feedback, or want to make a reservation? Reach out to us — we're always here to help.
        </p>
      </section>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="bg-[#111] border border-gray-800 rounded-2xl p-6 flex flex-col gap-3
            hover:border-yellow-400 hover:scale-105 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-yellow-400/10 text-yellow-400 rounded-xl flex items-center justify-center">
              {card.icon}
            </div>
            <p className="text-white font-bold">{card.title}</p>
            {card.lines.map((line) => (
              <p key={line} className="text-gray-400 text-sm leading-relaxed">{line}</p>
            ))}
          </div>
        ))}
      </section>

      {/* Contact Form + Map */}
      <section className="max-w-6xl mx-auto px-8 pb-20 grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-black mb-6">Send a Message</h2>

          {sent ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <div className="text-5xl">🎉</div>
              <p className="text-yellow-400 font-bold text-xl">Message Sent!</p>
              <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm
                    focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-600"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm
                    focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-600"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm
                  focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="reservation">Table Reservation</option>
                  <option value="feedback">Food Feedback</option>
                  <option value="order">Order Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={5}
                  required
                  className="bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-3 text-sm
                  focus:outline-none focus:border-yellow-400 transition-colors placeholder-gray-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-black text-base
                bg-yellow-400 hover:bg-yellow-300 hover:scale-[1.02]
                transition-all duration-300 shadow-lg shadow-yellow-400/20 mt-1"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Map / Location Visual */}
        <div className="flex flex-col gap-5">
          <div
            className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden flex-1"
            style={{ minHeight: "300px" }}
          >
            <iframe
              title="URBANMasala Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          {/* Quick Info */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-3">Reservations</h3>
            <p className="text-gray-400 text-sm mb-4">
              For groups of 6 or more, we recommend calling ahead to reserve your table.
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all duration-300"
            >
              <PhoneIcon />
              Call for Reservation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}