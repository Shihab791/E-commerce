import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ to, label, icon }) => (
  <NavLink
    to={to}
    end={to === "/admin"}
    className={({ isActive }) =>
      `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition
       ${isActive ? "bg-white/10 text-white" : "text-white/75 hover:text-white hover:bg-white/10"}`
    }
  >
    <span className="text-lg">{icon}</span>
    <span className="flex-1">{label}</span>
    <span className="h-2 w-2 rounded-full bg-adminAccent opacity-0 group-[.active]:opacity-100" />
  </NavLink>
);

export default function AdminSidebar() {
  return (
    <aside className="hidden md:flex md:w-[260px] md:flex-col md:sticky md:top-0 md:h-screen">
      <div className="h-full bg-gradient-to-b from-g1 via-g2 to-g3 text-white px-4 py-5">
        {/* Brand */}
        <div className="flex items-center gap-3 px-2">
          <div className="h-10 w-10 rounded-2xl bg-white/15 grid place-items-center font-bold">
            A
          </div>
          <div className="leading-tight">
            <p className="font-semibold">Admin Panel</p>
            <p className="text-xs text-white/70">Interior Studio</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/15" />

        {/* Menu */}
        <nav className="space-y-1">
          <Item to="/admin" label="Dashboard" icon="🏠" />
          <Item to="/admin/products" label="Products" icon="🪑" />
          <Item to="/admin/orders" label="Orders" icon="🧾" />
          <Item to="/admin/customers" label="Customers" icon="👤" />
          <Item to="/admin/blog" label="Blog" icon="📰" />
          <Item to="/admin/settings" label="Settings" icon="⚙️" />
        </nav>

        <div className="mt-auto pt-6">
          <button className="w-full rounded-xl bg-white/10 hover:bg-white/15 px-3 py-2.5 text-sm font-medium transition">
            Logout
          </button>
          <p className="mt-3 text-xs text-white/60 px-1">
            © {new Date().getFullYear()} Trodev Web
          </p>
        </div>
      </div>
    </aside>
  );
}
