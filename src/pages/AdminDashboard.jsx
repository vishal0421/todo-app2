import { useState, useEffect } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const DashIcon   = () => <Icon d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />;
const OrderIcon  = () => <Icon d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />;
const MenuIcon2  = () => <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />;
const UserIcon   = () => <Icon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />;
const ChartIcon  = () => <Icon d="M18 20V10M12 20V4M6 20v-6" />;
const SettIcon   = () => <Icon d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />;
const BellIcon   = () => <Icon d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />;
const TrendUp    = () => <Icon d="M23 6l-9.5 9.5-5-5L1 18" size={14} />;
const TrendDown  = () => <Icon d="M23 18l-9.5-9.5-5 5L1 6" size={14} />;
const EditIcon   = () => <Icon d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" size={14} />;
const TrashIcon  = () => <Icon d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" size={14} />;
const PlusIcon   = () => <Icon d="M12 5v14M5 12h14" size={14} />;
const SearchIcon = () => <Icon d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" size={16} />;
const LogoutIcon = () => <Icon d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" size={16} />;
const HamburgerIcon = () => <Icon d="M3 12h18M3 6h18M3 18h18" size={20} />;
const XIcon = () => <Icon d="M18 6L6 18M6 6l12 12" size={20} />;
const CheckIcon = () => <Icon d="M20 6L9 17l-5-5" size={14} />;
const ClockIcon = () => <Icon d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM12 6v6l4 2" size={14} />;
const PackageIcon = () => <Icon d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" size={14} />;

// ─── Seed Data ───────────────────────────────────────────────────────────────
const INITIAL_ORDERS = [
  { id: "#UM1041", customer: "Aarav Shah",    table: "T-04", items: ["Truffle Margherita","Masala Chai"],   total: 398,  status: "Delivered",  time: "12:14 PM" },
  { id: "#UM1042", customer: "Priya Mehta",   table: "T-07", items: ["Pesto Pasta","Cold Coffee"],          total: 249,  status: "Preparing",  time: "12:21 PM" },
  { id: "#UM1043", customer: "Rohan Desai",   table: "T-02", items: ["Italian Pepperoni","Garlic Bread"],   total: 319,  status: "Pending",    time: "12:35 PM" },
  { id: "#UM1044", customer: "Sneha Patel",   table: "T-09", items: ["Paneer Tikka","Butter Naan x2"],      total: 285,  status: "Delivered",  time: "12:40 PM" },
  { id: "#UM1045", customer: "Kiran Joshi",   table: "T-01", items: ["Veg Biryani","Raita"],                total: 199,  status: "Cancelled",  time: "12:55 PM" },
  { id: "#UM1046", customer: "Dev Kapoor",    table: "  T-11", items: ["Butter Chicken","Dal Makhani","Roti"],total: 440,  status: "Preparing",  time: "1:03 PM" },
  { id: "#UM1047", customer: "Anita Rao",     table: "T-05", items: ["Fish Tacos","Lime Soda"],             total: 320,  status: "Pending",    time: "1:12 PM" },
  { id: "#UM1048", customer: "Vikram Nair",   table: "T-08", items: ["Mushroom Risotto"],                   total: 220,  status: "Delivered",  time: "1:18 PM" },
];

const INITIAL_MENU = [
  { id: 1, name: "Truffle Margherita",  category: "Pizza",   price: 189, available: true,  orders: 84 },
  { id: 2, name: "Italian Pepperoni",   category: "Pizza",   price: 169, available: true,  orders: 72 },
  { id: 3, name: "Pesto Pasta",         category: "Pasta",   price: 149, available: true,  orders: 61 },
  { id: 4, name: "Butter Chicken",      category: "Main",    price: 220, available: true,  orders: 98 },
  { id: 5, name: "Paneer Tikka",        category: "Starter", price: 160, available: true,  orders: 55 },
  { id: 6, name: "Veg Biryani",         category: "Main",    price: 180, available: false, orders: 43 },
  { id: 7, name: "Mushroom Risotto",    category: "Main",    price: 220, available: true,  orders: 37 },
  { id: 8, name: "Garlic Bread",        category: "Starter", price: 89,  available: true,  orders: 110 },
  { id: 9, name: "Cold Coffee",         category: "Drink",   price: 99,  available: true,  orders: 88 },
  { id: 10, name: "Masala Chai",        category: "Drink",   price: 49,  available: true,  orders: 120 },
];

const CUSTOMERS = [
  { id: "C001", name: "Aarav Shah",   email: "aarav@email.com",   orders: 14, spent: 3820, joined: "Jan 2024", status: "Regular"  },
  { id: "C002", name: "Priya Mehta",  email: "priya@email.com",   orders: 28, spent: 7240, joined: "Nov 2023", status: "VIP"      },
  { id: "C003", name: "Rohan Desai",  email: "rohan@email.com",   orders: 6,  spent: 1540, joined: "Mar 2024", status: "New"      },
  { id: "C004", name: "Sneha Patel",  email: "sneha@email.com",   orders: 19, spent: 5120, joined: "Dec 2023", status: "Regular"  },
  { id: "C005", name: "Kiran Joshi",  email: "kiran@email.com",   orders: 3,  spent: 620,  joined: "Apr 2024", status: "New"      },
  { id: "C006", name: "Dev Kapoor",   email: "dev@email.com",     orders: 41, spent: 11400,joined: "Aug 2023", status: "VIP"      },
];

const WEEKLY_REVENUE = [4800, 5200, 4100, 6800, 7200, 8100, 9400];
const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const CATEGORY_DATA = [
  { name: "Pizza",   pct: 28, color: "#facc15" },
  { name: "Main",    pct: 35, color: "#fb923c" },
  { name: "Pasta",   pct: 14, color: "#34d399" },
  { name: "Starter", pct: 13, color: "#60a5fa" },
  { name: "Drinks",  pct: 10, color: "#c084fc" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
const statusColor = (s) => ({
  Delivered: "bg-green-500/15 text-green-400 border border-green-500/30",
  Preparing: "bg-yellow-400/15 text-yellow-400 border border-yellow-400/30",
  Pending:   "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  Cancelled: "bg-red-500/15 text-red-400 border border-red-500/30",
}[s] || "bg-gray-700 text-gray-300");

const customerBadge = (s) => ({
  VIP:     "bg-yellow-400/20 text-yellow-400 border border-yellow-400/40",
  Regular: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  New:     "bg-green-500/15 text-green-400 border border-green-500/30",
}[s] || "bg-gray-700 text-gray-300");

// ─── Mini Bar Chart ───────────────────────────────────────────────────────────
function BarChart({ data, labels }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-2 h-32 w-full">
      {data.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full flex flex-col justify-end" style={{ height: "96px" }}>
            <div
              className="w-full rounded-t-md transition-all duration-700"
              style={{
                height: `${(val / max) * 96}px`,
                background: "linear-gradient(to top, #facc15, #fb923c)",
                opacity: i === data.length - 1 ? 1 : 0.55,
              }}
            />
          </div>
          <span className="text-[10px] text-gray-500">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Donut Chart ─────────────────────────────────────────────────────────────
function DonutChart({ data }) {
  const r = 60, cx = 70, cy = 70;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const slices = data.map(d => {
    const dash = (d.pct / 100) * circumference;
    const slice = { ...d, dash, offset };
    offset += dash;
    return slice;
  });
  return (
    <div className="flex items-center gap-6">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1f1f1f" strokeWidth="20" />
        {slices.map((s, i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none"
            stroke={s.color} strokeWidth="20"
            strokeDasharray={`${s.dash} ${circumference - s.dash}`}
            strokeDashoffset={-s.offset}
            transform={`rotate(-90 ${cx} ${cy})`}
            style={{ transition: "all 0.6s ease" }}
          />
        ))}
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">50+</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="#9ca3af" fontSize="9">Dishes</text>
      </svg>
      <div className="flex flex-col gap-2">
        {data.map(d => (
          <div key={d.name} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
            <span className="text-xs text-gray-400">{d.name}</span>
            <span className="text-xs text-gray-500 ml-auto">{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, trend, icon, color }) {
  const up = trend >= 0;
  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 flex flex-col gap-3 hover:border-yellow-400/40 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{label}</span>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
      <div>
        <p className="text-3xl font-black text-white">{value}</p>
        <p className="text-gray-500 text-xs mt-1">{sub}</p>
      </div>
      <div className={`flex items-center gap-1.5 text-xs font-semibold ${up ? "text-green-400" : "text-red-400"}`}>
        {up ? <TrendUp /> : <TrendDown />}
        <span>{Math.abs(trend)}% vs last week</span>
      </div>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-[#111] border border-gray-700 rounded-2xl w-full max-w-md p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors"><XIcon /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ msg, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2500); return () => clearTimeout(t); }, []);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#111] border border-yellow-400/40 text-white px-5 py-3 rounded-2xl shadow-2xl shadow-yellow-400/10 animate-bounce">
      <span className="text-yellow-400"><CheckIcon /></span>
      <span className="text-sm font-semibold">{msg}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);
  const [customers] = useState(CUSTOMERS);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState("");
  const [orderFilter, setOrderFilter] = useState("All");
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: "", category: "Pizza", price: "", available: true });
  const [notifications, setNotifications] = useState([
    { id: 1, msg: "New order #UM1049 received", time: "2 min ago", read: false },
    { id: 2, msg: "Table T-03 QR scanned",      time: "5 min ago", read: false },
    { id: 3, msg: "Low stock: Truffle (2 left)", time: "12 min ago",read: true  },
  ]);
  const [showNotifs, setShowNotifs] = useState(false);

  const unread = notifications.filter(n => !n.read).length;
  const showToast = (msg) => setToast(msg);

  const totalRevenue = orders.filter(o => o.status === "Delivered").reduce((s, o) => s + o.total, 0);
  const pendingCount = orders.filter(o => o.status === "Pending" || o.status === "Preparing").length;

  // Orders
  const filteredOrders = orders.filter(o => {
    const matchSearch = o.id.toLowerCase().includes(search.toLowerCase()) ||
                        o.customer.toLowerCase().includes(search.toLowerCase()) ||
                        o.table.toLowerCase().includes(search.toLowerCase());
    const matchFilter = orderFilter === "All" || o.status === orderFilter;
    return matchSearch && matchFilter;
  });

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    showToast(`Order ${id} marked as ${newStatus}`);
    setModal(null);
  };

  // Menu
  const toggleAvailable = (id) => {
    setMenuItems(menuItems.map(m => m.id === id ? { ...m, available: !m.available } : m));
    showToast("Menu item updated!");
  };
  const deleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(m => m.id !== id));
    showToast("Item deleted!");
    setModal(null);
  };
  const saveEditItem = () => {
    setMenuItems(menuItems.map(m => m.id === editItem.id ? editItem : m));
    setEditItem(null);
    showToast("Item saved!");
  };
  const addMenuItem = () => {
    if (!newItem.name || !newItem.price) return;
    setMenuItems([...menuItems, { ...newItem, id: Date.now(), price: Number(newItem.price), orders: 0 }]);
    setNewItem({ name: "", category: "Pizza", price: "", available: true });
    setModal(null);
    showToast("New item added!");
  };

  // Notifications
  const markAllRead = () => setNotifications(notifications.map(n => ({ ...n, read: true })));

  const NAV = [
    { id: "dashboard", label: "Dashboard",  icon: <DashIcon /> },
    { id: "orders",    label: "Orders",     icon: <OrderIcon /> },
    { id: "menu",      label: "Menu Items", icon: <MenuIcon2 /> },
    { id: "customers", label: "Customers",  icon: <UserIcon /> },
    { id: "analytics", label: "Analytics",  icon: <ChartIcon /> },
    { id: "settings",  label: "Settings",   icon: <SettIcon /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex font-sans">
      {/* ── Sidebar ── */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 flex flex-col w-64
        bg-[#0d0d0d] border-r border-gray-800/60
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-800/60">
          <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center">
            <span className="text-black font-black text-sm">UM</span>
          </div>
          <div>
            <p className="text-yellow-400 font-black text-sm tracking-widest uppercase">Urban</p>
            <p className="text-white/60 text-[10px] tracking-[3px] uppercase -mt-0.5">Masala Admin</p>
          </div>
          <button className="ml-auto lg:hidden text-gray-500 hover:text-white" onClick={() => setSidebarOpen(false)}><XIcon /></button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV.map(n => (
            <button key={n.id} onClick={() => { setActiveTab(n.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${activeTab === n.id
                  ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
              <span className="w-4 h-4">{n.icon}</span>
              {n.label}
              {n.id === "orders" && pendingCount > 0 && (
                <span className="ml-auto w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{pendingCount}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Admin Info */}
        <div className="px-4 py-4 border-t border-gray-800/60">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-black text-xs">AM</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">Arjun Mehta</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <button className="text-gray-500 hover:text-red-400 transition-colors"><LogoutIcon /></button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Topbar */}
        <header className="sticky top-0 z-20 flex items-center gap-4 px-5 py-3.5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-800/60">
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(true)}><HamburgerIcon /></button>
          <div>
            <h1 className="text-base font-black text-white capitalize">{activeTab}</h1>
            <p className="text-[11px] text-gray-500 hidden sm:block">URBANMasala Control Panel</p>
          </div>

          <div className="flex-1" />

          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 rounded-xl px-3 py-2 w-48">
            <SearchIcon />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…"
              className="bg-transparent text-sm text-white placeholder-gray-600 outline-none w-full" />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button onClick={() => setShowNotifs(!showNotifs)}
              className="relative p-2.5 rounded-xl bg-[#1a1a1a] border border-gray-700 text-gray-400 hover:text-yellow-400 transition-colors">
              <BellIcon />
              {unread > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />}
            </button>
            {showNotifs && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-[#111] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden z-50">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                  <span className="text-sm font-bold text-white">Notifications</span>
                  <button onClick={markAllRead} className="text-xs text-yellow-400 hover:underline">Mark all read</button>
                </div>
                {notifications.map(n => (
                  <div key={n.id} className={`px-4 py-3 border-b border-gray-800/50 flex gap-3 ${!n.read ? "bg-yellow-400/5" : ""}`}>
                    <span className="mt-0.5 text-yellow-400"><BellIcon /></span>
                    <div>
                      <p className="text-xs text-white font-medium">{n.msg}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{n.time}</p>
                    </div>
                    {!n.read && <div className="w-2 h-2 bg-yellow-400 rounded-full ml-auto mt-1.5 shrink-0" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-black text-xs">AM</div>
        </header>

        {/* ── CONTENT ── */}
        <main className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* ═══ DASHBOARD ═══ */}
          {activeTab === "dashboard" && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Today's Revenue"  value={`₹${totalRevenue.toLocaleString()}`} sub="from delivered orders" trend={12.4} icon={<ChartIcon />} color="bg-yellow-400/10 text-yellow-400" />
                <StatCard label="Total Orders"     value={orders.length}  sub="orders today"          trend={8.1}  icon={<OrderIcon />} color="bg-blue-500/10 text-blue-400" />
                <StatCard label="Active Tables"    value="9 / 14"         sub="tables occupied"       trend={5.3}  icon={<PackageIcon />} color="bg-green-500/10 text-green-400" />
                <StatCard label="Avg Order Value"  value="₹308"           sub="per order today"       trend={-2.1} icon={<UserIcon />} color="bg-orange-500/10 text-orange-400" />
              </div>

              <div className="grid lg:grid-cols-3 gap-5">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-[#111] border border-gray-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Weekly Revenue</p>
                      <p className="text-2xl font-black text-white mt-0.5">₹45,600</p>
                    </div>
                    <span className="text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full font-semibold">+14.2% this week</span>
                  </div>
                  <BarChart data={WEEKLY_REVENUE} labels={DAYS} />
                </div>

                {/* Category Split */}
                <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Order by Category</p>
                  <DonutChart data={CATEGORY_DATA} />
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-bold text-white">Recent Orders</p>
                  <button onClick={() => setActiveTab("orders")} className="text-xs text-yellow-400 hover:underline">View all →</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        {["Order","Customer","Table","Total","Status","Time"].map(h => (
                          <th key={h} className="text-left text-[10px] text-gray-500 uppercase tracking-wider pb-3 pr-4 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                      {orders.slice(0, 5).map(o => (
                        <tr key={o.id} className="hover:bg-white/3 transition-colors">
                          <td className="py-3 pr-4 font-mono text-yellow-400 text-xs font-bold">{o.id}</td>
                          <td className="py-3 pr-4 text-white font-medium">{o.customer}</td>
                          <td className="py-3 pr-4 text-gray-400">{o.table}</td>
                          <td className="py-3 pr-4 font-bold text-white">₹{o.total}</td>
                          <td className="py-3 pr-4"><span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${statusColor(o.status)}`}>{o.status}</span></td>
                          <td className="py-3 text-gray-500 text-xs">{o.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ═══ ORDERS ═══ */}
          {activeTab === "orders" && (
            <>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 rounded-xl px-3 py-2 flex-1 min-w-45">
                  <SearchIcon />
                  <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search orders…"
                    className="bg-transparent text-sm text-white placeholder-gray-600 outline-none w-full" />
                </div>
                {["All","Pending","Preparing","Delivered","Cancelled"].map(f => (
                  <button key={f} onClick={() => setOrderFilter(f)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${orderFilter === f ? "bg-yellow-400 text-black" : "bg-[#1a1a1a] border border-gray-700 text-gray-400 hover:border-yellow-400/40 hover:text-white"}`}>
                    {f}
                  </button>
                ))}
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-gray-800">
                      <tr>
                        {["Order ID","Customer","Table","Items","Total","Status","Time","Action"].map(h => (
                          <th key={h} className="text-left text-[10px] text-gray-500 uppercase tracking-wider px-5 py-4 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                      {filteredOrders.map(o => (
                        <tr key={o.id} className="hover:bg-white/3 transition-colors group">
                          <td className="px-5 py-4 font-mono text-yellow-400 text-xs font-bold">{o.id}</td>
                          <td className="px-5 py-4 text-white font-medium">{o.customer}</td>
                          <td className="px-5 py-4 text-gray-400">{o.table}</td>
                          <td className="px-5 py-4 text-gray-400 text-xs max-w-40 truncate">{o.items.join(", ")}</td>
                          <td className="px-5 py-4 font-bold text-white">₹{o.total}</td>
                          <td className="px-5 py-4"><span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${statusColor(o.status)}`}>{o.status}</span></td>
                          <td className="px-5 py-4 text-gray-500 text-xs">{o.time}</td>
                          <td className="px-5 py-4">
                            <button onClick={() => setModal({ type: "orderStatus", order: o })}
                              className="text-xs text-yellow-400 hover:underline font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                              Update
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredOrders.length === 0 && (
                  <p className="text-center text-gray-500 py-10">No orders found</p>
                )}
              </div>
            </>
          )}

          {/* ═══ MENU ═══ */}
          {activeTab === "menu" && (
            <>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 rounded-xl px-3 py-2 flex-1 min-w-45">
                  <SearchIcon />
                  <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search menu…"
                    className="bg-transparent text-sm text-white placeholder-gray-600 outline-none w-full" />
                </div>
                <button onClick={() => setModal({ type: "addItem" })}
                  className="flex items-center gap-2 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-black rounded-xl transition-all">
                  <PlusIcon /> Add Item
                </button>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-gray-800">
                      <tr>
                        {["Item","Category","Price","Orders","Available","Actions"].map(h => (
                          <th key={h} className="text-left text-[10px] text-gray-500 uppercase tracking-wider px-5 py-4 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                      {menuItems.filter(m => m.name.toLowerCase().includes(search.toLowerCase())).map(m => (
                        <tr key={m.id} className="hover:bg-white/3 transition-colors group">
                          <td className="px-5 py-4 text-white font-semibold">{m.name}</td>
                          <td className="px-5 py-4"><span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">{m.category}</span></td>
                          <td className="px-5 py-4 font-bold text-yellow-400">₹{m.price}</td>
                          <td className="px-5 py-4 text-gray-400">{m.orders}</td>
                          <td className="px-5 py-4">
                            <button onClick={() => toggleAvailable(m.id)}
                              className={`relative w-11 h-6 rounded-full transition-all duration-300 ${m.available ? "bg-green-500" : "bg-gray-700"}`}>
                              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${m.available ? "left-5.5" : "left-0.5"}`} />
                            </button>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => setEditItem({ ...m })} className="text-blue-400 hover:text-blue-300 transition-colors"><EditIcon /></button>
                              <button onClick={() => setModal({ type: "deleteItem", id: m.id, name: m.name })} className="text-red-400 hover:text-red-300 transition-colors"><TrashIcon /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inline Edit Form */}
              {editItem && (
                <div className="bg-[#111] border border-yellow-400/30 rounded-2xl p-5">
                  <p className="font-bold text-white mb-4 flex items-center gap-2"><EditIcon /> Editing: {editItem.name}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Name</label>
                      <input value={editItem.name} onChange={e => setEditItem({ ...editItem, name: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Category</label>
                      <select value={editItem.category} onChange={e => setEditItem({ ...editItem, category: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400">
                        {["Pizza","Pasta","Main","Starter","Drink"].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Price (₹)</label>
                      <input type="number" value={editItem.price} onChange={e => setEditItem({ ...editItem, price: Number(e.target.value) })}
                        className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div className="flex items-end gap-2">
                      <button onClick={saveEditItem} className="flex-1 py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl text-sm font-bold transition-all">Save</button>
                      <button onClick={() => setEditItem(null)} className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-xl text-sm font-bold transition-all">Cancel</button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ═══ CUSTOMERS ═══ */}
          {activeTab === "customers" && (
            <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-gray-800">
                    <tr>
                      {["ID","Name","Email","Orders","Total Spent","Joined","Status"].map(h => (
                        <th key={h} className="text-left text-[10px] text-gray-500 uppercase tracking-wider px-5 py-4 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {customers.map(c => (
                      <tr key={c.id} className="hover:bg-white/3 transition-colors">
                        <td className="px-5 py-4 text-gray-500 text-xs font-mono">{c.id}</td>
                        <td className="px-5 py-4 text-white font-semibold">{c.name}</td>
                        <td className="px-5 py-4 text-gray-400 text-xs">{c.email}</td>
                        <td className="px-5 py-4 text-gray-300">{c.orders}</td>
                        <td className="px-5 py-4 font-bold text-yellow-400">₹{c.spent.toLocaleString()}</td>
                        <td className="px-5 py-4 text-gray-500 text-xs">{c.joined}</td>
                        <td className="px-5 py-4"><span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${customerBadge(c.status)}`}>{c.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ═══ ANALYTICS ═══ */}
          {activeTab === "analytics" && (
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Weekly Revenue Trend</p>
                <p className="text-2xl font-black text-white mb-4">₹45,600</p>
                <BarChart data={WEEKLY_REVENUE} labels={DAYS} />
              </div>
              <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Sales by Category</p>
                <DonutChart data={CATEGORY_DATA} />
              </div>
              <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Top Selling Items</p>
                <div className="space-y-3">
                  {[...menuItems].sort((a,b) => b.orders - a.orders).slice(0,5).map((m,i) => (
                    <div key={m.id} className="flex items-center gap-3">
                      <span className="text-xs text-gray-600 w-4 font-bold">#{i+1}</span>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white font-medium">{m.name}</span>
                          <span className="text-yellow-400 font-bold">{m.orders} orders</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full">
                          <div className="h-full rounded-full bg-linear-to-r from-yellow-400 to-orange-400"
                            style={{ width: `${(m.orders / 120) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#111] border border-gray-800 rounded-2xl p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Order Status Breakdown</p>
                <div className="space-y-3">
                  {["Delivered","Preparing","Pending","Cancelled"].map(s => {
                    const count = orders.filter(o => o.status === s).length;
                    return (
                      <div key={s} className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor(s)} min-w-18 text-center`}>{s}</span>
                        <div className="flex-1 h-1.5 bg-gray-800 rounded-full">
                          <div className="h-full rounded-full bg-linear-to-r from-yellow-400 to-orange-400"
                            style={{ width: `${(count / orders.length) * 100}%` }} />
                        </div>
                        <span className="text-xs text-gray-400 w-8 text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ═══ SETTINGS ═══ */}
          {activeTab === "settings" && (
            <div className="max-w-2xl space-y-5">
              {[
                { title: "Restaurant Info", fields: [{ label: "Name", val: "URBANMasala" }, { label: "Location", val: "Satellite Road, Ahmedabad" }, { label: "Phone", val: "+91 98765 43210" }] },
                { title: "Notifications", fields: [] },
              ].map(section => (
                <div key={section.title} className="bg-[#111] border border-gray-800 rounded-2xl p-5">
                  <p className="font-bold text-white mb-4">{section.title}</p>
                  {section.fields.map(f => (
                    <div key={f.label} className="mb-4">
                      <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">{f.label}</label>
                      <input defaultValue={f.val}
                        className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 transition-colors" />
                    </div>
                  ))}
                  {section.fields.length === 0 && (
                    <div className="space-y-3">
                      {["New orders","Low stock alerts","Daily reports"].map(label => (
                        <label key={label} className="flex items-center gap-3 cursor-pointer">
                          <div className="relative w-11 h-6 rounded-full bg-yellow-400 transition-all">
                            <span className="absolute top-0.5 left-5.5 w-5 h-5 bg-white rounded-full shadow" />
                          </div>
                          <span className="text-sm text-gray-300">{label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  {section.fields.length > 0 && (
                    <button onClick={() => showToast("Settings saved!")}
                      className="mt-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl text-sm font-bold transition-all">
                      Save Changes
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

        </main>
      </div>

      {/* ── Modals ── */}
      {modal?.type === "orderStatus" && (
        <Modal title={`Update Order ${modal.order.id}`} onClose={() => setModal(null)}>
          <p className="text-gray-400 text-sm mb-4">Current: <span className={`px-2 py-0.5 rounded-full text-xs ${statusColor(modal.order.status)}`}>{modal.order.status}</span></p>
          <div className="grid grid-cols-2 gap-2">
            {["Pending","Preparing","Delivered","Cancelled"].map(s => (
              <button key={s} onClick={() => updateOrderStatus(modal.order.id, s)}
                className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${modal.order.status === s ? "ring-2 ring-yellow-400 " : "hover:scale-105"} ${statusColor(s)}`}>
                {s}
              </button>
            ))}
          </div>
        </Modal>
      )}

      {modal?.type === "deleteItem" && (
        <Modal title="Delete Item" onClose={() => setModal(null)}>
          <p className="text-gray-400 text-sm mb-5">Are you sure you want to delete <strong className="text-white">{modal.name}</strong>? This cannot be undone.</p>
          <div className="flex gap-3">
            <button onClick={() => deleteMenuItem(modal.id)} className="flex-1 py-2.5 bg-red-500 hover:bg-red-400 text-white rounded-xl text-sm font-bold transition-all">Delete</button>
            <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-xl text-sm font-bold transition-all">Cancel</button>
          </div>
        </Modal>
      )}

      {modal?.type === "addItem" && (
        <Modal title="Add New Menu Item" onClose={() => setModal(null)}>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Item Name</label>
              <input placeholder="e.g. Paneer Butter Masala" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Category</label>
                <select value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
                  {["Pizza","Pasta","Main","Starter","Drink"].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1.5">Price (₹)</label>
                <input type="number" placeholder="0" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: e.target.value })}
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400" />
              </div>
            </div>
            <button onClick={addMenuItem} className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl text-sm font-black transition-all">
              Add Item →
            </button>
          </div>
        </Modal>
      )}

      {/* Toast */}
      {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
    </div>
  );
}