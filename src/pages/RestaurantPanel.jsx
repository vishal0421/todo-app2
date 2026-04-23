import { useState, useEffect, useRef } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const LiveIcon    = () => <Icon d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 8v4l3 3" />;
const TableIcon   = () => <Icon d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" />;
const StaffIcon   = () => <Icon d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />;
const MenuIcon    = () => <Icon d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />;
const RevenueIcon = () => <Icon d="M18 20V10M12 20V4M6 20v-6" />;
const CheckIcon   = () => <Icon d="M20 6L9 17l-5-5" size={14} />;
const ClockIcon   = () => <Icon d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM12 6v6l4 2" size={14} />;
const BellIcon    = () => <Icon d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />;
const ArrowIcon   = () => <Icon d="M19 12H5M12 5l7 7-7 7" size={14} />;
const XIcon       = () => <Icon d="M18 6L6 18M6 6l12 12" size={16} />;

// ─── Data ────────────────────────────────────────────────────────────────────
const INIT_ORDERS = [
  { id: "#UM1042", customer: "Priya Mehta",   table: "T-07", items: ["Pesto Pasta", "Cold Coffee"],              total: 249, status: "Preparing", time: "12:21 PM", elapsed: 14 },
  { id: "#UM1043", customer: "Rohan Desai",   table: "T-02", items: ["Italian Pepperoni", "Garlic Bread"],       total: 319, status: "Pending",   time: "12:35 PM", elapsed: 6  },
  { id: "#UM1046", customer: "Dev Kapoor",    table: "T-11", items: ["Butter Chicken", "Dal Makhani", "Roti"],   total: 440, status: "Preparing", time: "1:03 PM",  elapsed: 9  },
  { id: "#UM1047", customer: "Anita Rao",     table: "T-05", items: ["Fish Tacos", "Lime Soda"],                 total: 320, status: "Pending",   time: "1:12 PM",  elapsed: 3  },
  { id: "#UM1049", customer: "Meera Joshi",   table: "T-03", items: ["Truffle Margherita"],                      total: 189, status: "Ready",     time: "1:18 PM",  elapsed: 22 },
  { id: "#UM1050", customer: "Aryan Shah",    table: "T-09", items: ["Veg Biryani", "Raita"],                    total: 199, status: "Pending",   time: "1:24 PM",  elapsed: 1  },
];

const INIT_TABLES = [
  { n: "T-01", s: "occupied" }, { n: "T-02", s: "occupied" }, { n: "T-03", s: "occupied" },
  { n: "T-04", s: "available" }, { n: "T-05", s: "occupied" }, { n: "T-06", s: "reserved" },
  { n: "T-07", s: "occupied" }, { n: "T-08", s: "available" }, { n: "T-09", s: "occupied" },
  { n: "T-10", s: "cleaning" }, { n: "T-11", s: "occupied" }, { n: "T-12", s: "available" },
  { n: "T-13", s: "reserved" }, { n: "T-14", s: "occupied" }, { n: "T-15", s: "available" },
  { n: "T-16", s: "occupied" },
];

const STAFF = [
  { name: "Ramesh Kumar", role: "Head Chef",   shift: "8am–4pm",  rating: 4.9, color: "#facc15", initials: "RK" },
  { name: "Sita Devi",    role: "Sous Chef",   shift: "10am–6pm", rating: 4.7, color: "#60a5fa", initials: "SD" },
  { name: "Ajay Patil",   role: "Line Cook",   shift: "12pm–8pm", rating: 4.5, color: "#34d399", initials: "AP" },
  { name: "Neha Singh",   role: "Waiter",      shift: "11am–7pm", rating: 4.8, color: "#fb923c", initials: "NS" },
  { name: "Vishal Rao",   role: "Waiter",      shift: "1pm–9pm",  rating: 4.6, color: "#c084fc", initials: "VR" },
  { name: "Kavya Nair",   role: "Cashier",     shift: "9am–5pm",  rating: 4.9, color: "#f43f5e", initials: "KN" },
  { name: "Deepak Mehta", role: "Cleaner",     shift: "6am–2pm",  rating: 4.4, color: "#a78bfa", initials: "DM" },
  { name: "Pooja Joshi",  role: "Hostess",     shift: "11am–7pm", rating: 4.7, color: "#2dd4bf", initials: "PJ" },
];

const MENU_ITEMS = [
  { name: "Truffle Margherita", cat: "Pizza",   price: 189, available: true,  orders: 84  },
  { name: "Italian Pepperoni",  cat: "Pizza",   price: 169, available: true,  orders: 72  },
  { name: "Pesto Pasta",        cat: "Pasta",   price: 149, available: true,  orders: 61  },
  { name: "Butter Chicken",     cat: "Main",    price: 220, available: true,  orders: 98  },
  { name: "Paneer Tikka",       cat: "Starter", price: 160, available: true,  orders: 55  },
  { name: "Veg Biryani",        cat: "Main",    price: 180, available: false, orders: 43  },
  { name: "Garlic Bread",       cat: "Starter", price: 89,  available: true,  orders: 110 },
  { name: "Cold Coffee",        cat: "Drink",   price: 99,  available: true,  orders: 88  },
  { name: "Masala Chai",        cat: "Drink",   price: 49,  available: true,  orders: 120 },
];

const HOURLY = [
  { h: "11am", rev: 620  }, { h: "12pm", rev: 1840 }, { h: "1pm", rev: 2120 },
  { h: "2pm",  rev: 1340 }, { h: "3pm",  rev: 890  }, { h: "4pm", rev: 1100 },
  { h: "5pm",  rev: 1510 },
];
const WEEKLY = [4800, 5200, 4100, 6800, 7200, 8100, 9400];
const WEEK_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// ─── Helpers ─────────────────────────────────────────────────────────────────
const STATUS_STYLES = {
  Pending:   "bg-blue-500/10 text-blue-400 border border-blue-500/30",
  Preparing: "bg-yellow-400/10 text-yellow-500 border border-yellow-400/30",
  Ready:     "bg-green-500/10 text-green-400 border border-green-500/30",
  Delivered: "bg-green-500/10 text-green-400 border border-green-500/30",
  Cancelled: "bg-red-500/10 text-red-400 border border-red-500/30",
};

const TABLE_STYLES = {
  occupied:  { border: "border-yellow-400/40", bg: "bg-yellow-400/5",  text: "text-yellow-500"  },
  available: { border: "border-green-500/35",  bg: "bg-green-500/5",   text: "text-green-400"   },
  reserved:  { border: "border-blue-500/35",   bg: "bg-blue-500/5",    text: "text-blue-400"    },
  cleaning:  { border: "border-red-500/35",    bg: "bg-red-500/5",     text: "text-red-400"     },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ label, value, sub, valueColor = "text-white" }) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-4 hover:border-yellow-400/30 transition-all duration-300">
      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">{label}</p>
      <p className={`text-3xl font-black ${valueColor}`}>{value}</p>
      {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

function Toast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1a1a1a] border border-yellow-400/30 text-white px-5 py-3 rounded-2xl shadow-2xl shadow-yellow-400/10">
      <span className="text-yellow-400"><CheckIcon /></span>
      <span className="text-sm font-semibold">{msg}</span>
    </div>
  );
}

// ─── TAB: Live Orders ─────────────────────────────────────────────────────────
function LiveOrders({ orders, setOrders, showToast }) {
  const [filter, setFilter] = useState("All");

  const advance = (id) => {
    const next = { Pending: "Preparing", Preparing: "Ready", Ready: "Delivered" };
    setOrders(prev => prev.map(o => o.id === id && next[o.status] ? { ...o, status: next[o.status] } : o));
    showToast(`Order ${id} updated!`);
  };

  const filtered = filter === "All" ? orders : orders.filter(o => o.status === filter);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard label="Active" value={orders.filter(o => ["Pending","Preparing"].includes(o.status)).length} sub="In kitchen now" valueColor="text-yellow-400" />
        <StatCard label="Pending" value={orders.filter(o => o.status === "Pending").length} sub="Awaiting prep" valueColor="text-blue-400" />
        <StatCard label="Ready" value={orders.filter(o => o.status === "Ready").length} sub="To be served" valueColor="text-green-400" />
        <StatCard label="Completed" value={31} sub="Orders today" />
      </div>

      <div className="flex gap-2 mb-5 flex-wrap">
        {["All","Pending","Preparing","Ready"].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold border transition-all ${filter === f ? "bg-yellow-400 text-black border-yellow-400" : "bg-transparent text-gray-400 border-gray-700 hover:border-yellow-400/40 hover:text-white"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(o => (
          <div key={o.id} className="bg-[#111] border border-gray-800 rounded-2xl p-4 hover:border-yellow-400/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-400 font-black text-xs font-mono">{o.id}</span>
              <span className="text-gray-400 text-xs">{o.table}</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${STATUS_STYLES[o.status]}`}>{o.status}</span>
            </div>
            <p className="text-white font-semibold text-sm mb-1">{o.customer}</p>
            <ul className="mb-3">
              {o.items.map(item => (
                <li key={item} className="text-gray-400 text-xs py-1 border-b border-gray-800/60 last:border-0">{item}</li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 flex items-center gap-1"><ClockIcon />{o.elapsed} min · {o.time}</span>
              {o.status !== "Delivered" ? (
                <button onClick={() => advance(o.id)}
                  className="flex items-center gap-1.5 text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-1.5 rounded-xl transition-all hover:scale-105">
                  {o.status === "Pending" ? "Start Prep" : o.status === "Preparing" ? "Mark Ready" : "Delivered"}
                  <ArrowIcon />
                </button>
              ) : (
                <span className="text-xs text-green-400 font-semibold">Done ✓</span>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-3 text-center text-gray-500 py-12">No orders in this category.</p>
        )}
      </div>
    </div>
  );
}

// ─── TAB: Tables ─────────────────────────────────────────────────────────────
function Tables({ tables, setTables }) {
  const cycle = (n) => {
    const order = { occupied: "cleaning", cleaning: "available", available: "occupied", reserved: "occupied" };
    setTables(prev => prev.map(t => t.n === n ? { ...t, s: order[t.s] } : t));
  };

  const count = (s) => tables.filter(t => t.s === s).length;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard label="Occupied"  value={count("occupied")}  valueColor="text-yellow-400" />
        <StatCard label="Available" value={count("available")} valueColor="text-green-400" />
        <StatCard label="Reserved"  value={count("reserved")}  valueColor="text-blue-400" />
        <StatCard label="Cleaning"  value={count("cleaning")}  valueColor="text-red-400" />
      </div>

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Floor Map — 16 Tables · Click to cycle status</p>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
          {tables.map(t => {
            const style = TABLE_STYLES[t.s];
            return (
              <button key={t.n} onClick={() => cycle(t.n)}
                className={`rounded-xl border p-3 text-center cursor-pointer transition-all duration-200 hover:scale-105 ${style.border} ${style.bg}`}>
                <p className="text-sm font-black text-white">{t.n}</p>
                <p className={`text-[10px] font-semibold mt-1 capitalize ${style.text}`}>{t.s}</p>
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-gray-800">
          {["occupied","available","reserved","cleaning"].map(s => {
            const style = TABLE_STYLES[s];
            return (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full border ${style.border} ${style.bg}`} />
                <span className={`text-xs capitalize font-medium ${style.text}`}>{s}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── TAB: Staff ───────────────────────────────────────────────────────────────
function StaffPanel() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        <StatCard label="On Shift"  value={8} sub="Active today"     valueColor="text-green-400" />
        <StatCard label="Off Duty"  value={3} sub="Scheduled tomorrow" />
        <StatCard label="Avg Rating" value="4.7★" valueColor="text-yellow-400" />
      </div>

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Staff on Duty Today</p>
        <div className="divide-y divide-gray-800/60">
          {STAFF.map(s => (
            <div key={s.name} className="flex items-center gap-4 py-3.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black "
                style={{ background: s.color + "22", color: s.color }}>
                {s.initials}
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{s.name}</p>
                <p className="text-gray-500 text-xs">{s.role}</p>
                <div className="h-1 bg-gray-800 rounded-full mt-1.5 w-28 overflow-hidden">
                  <div className="h-full rounded-full bg-yellow-400" style={{ width: `${(s.rating / 5) * 100}%` }} />
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 font-semibold">{s.rating}★</span>
                <p className="text-gray-500 text-xs mt-1">{s.shift}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TAB: Menu ────────────────────────────────────────────────────────────────
function MenuPreview() {
  const [cat, setCat] = useState("All");
  const cats = ["All", "Pizza", "Pasta", "Main", "Starter", "Drink"];
  const items = cat === "All" ? MENU_ITEMS : MENU_ITEMS.filter(m => m.cat === cat);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-5">
        {cats.map(c => (
          <button key={c} onClick={() => setCat(c)}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold border transition-all ${cat === c ? "bg-yellow-400 text-black border-yellow-400" : "bg-transparent text-gray-400 border-gray-700 hover:border-yellow-400/40 hover:text-white"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="divide-y divide-gray-800/60">
          {items.map(m => (
            <div key={m.name} className="flex items-center gap-4 px-5 py-3.5  transition-colors">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{m.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{m.cat} · {m.orders} orders today</p>
              </div>
              <span className="text-yellow-400 font-black text-sm">₹{m.price}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${m.available ? "bg-green-500/10 text-green-400 border border-green-500/30" : "bg-red-500/10 text-red-400 border border-red-500/30"}`}>
                {m.available ? "Available" : "Unavailable"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TAB: Revenue ─────────────────────────────────────────────────────────────
function Revenue() {
  const canvasRef = useRef(null);
  const maxRev = Math.max(...HOURLY.map(h => h.rev));
  const maxWeekly = Math.max(...WEEKLY);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.offsetWidth || 400;
    const H = 120;
    canvas.width = W;
    canvas.height = H;
    ctx.clearRect(0, 0, W, H);
    const barW = (W - 40) / WEEKLY.length * 0.55;
    const gap = (W - 40) / WEEKLY.length;
    WEEKLY.forEach((v, i) => {
      const x = 20 + i * gap + (gap - barW) / 2;
      const bH = (v / maxWeekly) * (H - 30);
      const y = H - bH - 18;
      ctx.fillStyle = i === 6 ? "#facc15" : "rgba(250,204,21,0.3)";
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, barW, bH, 3) : ctx.rect(x, y, barW, bH);
      ctx.fill();
      ctx.fillStyle = "rgba(156,163,175,0.7)";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(WEEK_LABELS[i], x + barW / 2, H - 4);
    });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard label="Today"       value="₹9,420"  sub="+12% vs yesterday"  valueColor="text-yellow-400" />
        <StatCard label="This Week"   value="₹45,600" sub="+14% vs last week"  valueColor="text-yellow-400" />
        <StatCard label="Avg Order"   value="₹308"    sub="Per order today" />
        <StatCard label="Top Item"    value="Masala Chai" sub="120 orders today" valueColor="text-yellow-400" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Weekly Revenue</p>
          <p className="text-2xl font-black text-white mb-4">₹45,600 <span className="text-xs text-green-400 font-semibold">+14.2%</span></p>
          <canvas ref={canvasRef} className="w-full" height={120} />
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Today's Hourly Breakdown</p>
          <div className="divide-y divide-gray-800/60">
            {HOURLY.map(h => (
              <div key={h.h} className="flex items-center gap-3 py-2">
                <span className="text-xs text-gray-500 w-10 shrink-0">{h.h}</span>
                <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-yellow-400 transition-all duration-700"
                    style={{ width: `${Math.round((h.rev / maxRev) * 100)}%` }} />
                </div>
                <span className="text-xs font-semibold text-white w-16 text-right">₹{h.rev.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function RestaurantPanel() {
  const [activeTab, setActiveTab] = useState("live");
  const [orders, setOrders] = useState(INIT_ORDERS);
  const [tables, setTables] = useState(INIT_TABLES);
  const [toast, setToast] = useState(null);
  const [clock, setClock] = useState("");
  const [showNotifs, setShowNotifs] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pendingCount = orders.filter(o => ["Pending", "Preparing"].includes(o.status)).length;

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const showToast = (msg) => setToast(msg);

  const NAV = [
    { id: "live",    label: "Live Orders",  icon: <LiveIcon />,    badge: pendingCount },
    { id: "tables",  label: "Tables",       icon: <TableIcon /> },
    { id: "staff",   label: "Staff",        icon: <StaffIcon /> },
    { id: "menu",    label: "Menu Preview", icon: <MenuIcon /> },
    { id: "revenue", label: "Revenue",      icon: <RevenueIcon /> },
  ];

  const PAGE_TITLES = {
    live:    "Live Orders — Kitchen Display",
    tables:  "Table Management",
    staff:   "Staff on Duty",
    menu:    "Menu Preview",
    revenue: "Revenue Summary",
  };

  const NOTIFICATIONS = [
    { msg: "New order #UM1051 received",    time: "1 min ago",  read: false },
    { msg: "Table T-06 reservation arrived",time: "4 min ago",  read: false },
    { msg: "Low stock: Truffle (2 left)",   time: "10 min ago", read: true  },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">

      {/* ── Sidebar ── */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 flex flex-col w-60
        bg-[#0d0d0d] border-r border-gray-800/60
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-800/60">
          <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-black font-black text-xs">UM</div>
          <div>
            <p className="text-yellow-400 font-black text-sm tracking-widest uppercase">Urban</p>
            <p className="text-gray-500 text-[10px] tracking-[3px] uppercase -mt-0.5">Restaurant Panel</p>
          </div>
          <button className="ml-auto lg:hidden text-gray-500 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <XIcon />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(n => (
            <button key={n.id} onClick={() => { setActiveTab(n.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${activeTab === n.id
                  ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
              <span className="w-4 h-4 shrink-0">{n.icon}</span>
              {n.label}
              {n.badge > 0 && (
                <span className="ml-auto w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {n.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Staff Info */}
        <div className="px-4 py-4 border-t border-gray-800/60">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-black text-xs">RM</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">Restaurant Mgr</p>
              <p className="text-xs text-gray-500">Manager Panel</p>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Topbar */}
        <header className="sticky top-0 z-20 flex items-center gap-4 px-5 py-3.5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-800/60">
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(true)}>
            <Icon d="M3 12h18M3 6h18M3 18h18" />
          </button>

          <div>
            <h1 className="text-base font-black text-white">{PAGE_TITLES[activeTab]}</h1>
            <p className="text-[11px] text-gray-500 hidden sm:block">URBANMasala · Restaurant Panel</p>
          </div>

          <div className="flex-1" />

          {/* Live indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live · {clock}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button onClick={() => setShowNotifs(!showNotifs)}
              className="relative p-2.5 rounded-xl bg-[#1a1a1a] border border-gray-700 text-gray-400 hover:text-yellow-400 transition-colors">
              <BellIcon />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            {showNotifs && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-[#111] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-gray-800">
                  <span className="text-sm font-bold text-white">Notifications</span>
                </div>
                {NOTIFICATIONS.map((n, i) => (
                  <div key={i} className={`px-4 py-3 border-b border-gray-800/50 flex gap-3 ${!n.read ? "bg-yellow-400/5" : ""}`}>
                    <div className="flex-1">
                      <p className="text-xs text-white font-medium">{n.msg}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{n.time}</p>
                    </div>
                    {!n.read && <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1 shrink-0" />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-5">
          {activeTab === "live"    && <LiveOrders orders={orders} setOrders={setOrders} showToast={showToast} />}
          {activeTab === "tables" && <Tables tables={tables} setTables={setTables} />}
          {activeTab === "staff"  && <StaffPanel />}
          {activeTab === "menu"   && <MenuPreview />}
          {activeTab === "revenue"&& <Revenue />}
        </main>
      </div>

      {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
    </div>
  );
}
