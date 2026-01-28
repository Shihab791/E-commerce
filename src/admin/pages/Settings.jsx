import React from "react";

export default function Settings() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-adminMuted">Site & admin configuration</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white border border-black/5 shadow-soft p-5">
          <h2 className="font-semibold">General</h2>
          <div className="mt-4 space-y-3">
            <div>
              <label className="text-sm text-adminMuted">Site Name</label>
              <input className="mt-1 w-full h-11 rounded-2xl border border-black/10 px-4 outline-none" placeholder="Interior Studio" />
            </div>
            <div>
              <label className="text-sm text-adminMuted">Support Email</label>
              <input className="mt-1 w-full h-11 rounded-2xl border border-black/10 px-4 outline-none" placeholder="support@mail.com" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-black/5 shadow-soft p-5">
          <h2 className="font-semibold">Homepage Sections</h2>
          <div className="mt-4 space-y-3">
            {["Hero", "Why Choose Us", "Testimonials", "Recent Blog"].map((x) => (
              <div key={x} className="flex items-center justify-between rounded-2xl border border-black/5 bg-black/[0.02] p-3">
                <p className="font-medium">{x}</p>
                <button className="h-8 w-14 rounded-full bg-gradient-to-r from-g1 via-g2 to-g3 relative">
                  <span className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="h-11 px-5 rounded-2xl bg-adminAccent text-black font-semibold shadow-soft hover:translate-y-[-1px] transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
