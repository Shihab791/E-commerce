import React from "react";

export default function StatCard({ title, value, hint, icon }) {
  return (
    <div className="rounded-2xl bg-white border border-black/5 shadow-soft p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-adminMuted">{title}</p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
          {hint ? <p className="mt-1 text-xs text-black/45">{hint}</p> : null}
        </div>
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-b from-g1 via-g2 to-g3 text-white grid place-items-center">
          {icon}
        </div>
      </div>
    </div>
  );
}
