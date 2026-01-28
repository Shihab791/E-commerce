import React from "react";

const styles = {
  paid: "bg-emerald-50 text-emerald-700 border-emerald-200",
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  cancelled: "bg-rose-50 text-rose-700 border-rose-200",
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  draft: "bg-slate-50 text-slate-700 border-slate-200",
};

export default function Badge({ variant = "active", children }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${styles[variant] || styles.active}`}>
      {children}
    </span>
  );
}
