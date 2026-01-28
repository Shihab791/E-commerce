import React from "react";

export default function AdminTopbar() {
  return (
    <header className="sticky top-0 z-20 bg-adminBg/80 backdrop-blur border-b border-black/5">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
        {/* Mobile left */}
        <div className="md:hidden font-semibold">Admin</div>

        {/* Search */}
        <div className="flex-1">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 rounded-2xl bg-white border border-black/5 shadow-soft px-3 py-2">
              <span className="text-black/40">🔎</span>
              <input
                className="w-full outline-none text-sm placeholder:text-black/35"
                placeholder="Search products, orders, customers..."
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-2xl bg-white border border-black/5 shadow-soft grid place-items-center hover:translate-y-[-1px] transition">
            🔔
          </button>
          <button className="h-10 px-4 rounded-2xl bg-adminAccent text-black font-semibold shadow-soft hover:translate-y-[-1px] transition">
            + Add
          </button>
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-b from-g1 via-g2 to-g3 text-white grid place-items-center font-bold">
            Z
          </div>
        </div>
      </div>
    </header>
  );
}
