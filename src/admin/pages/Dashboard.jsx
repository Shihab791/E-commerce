import React from "react";
import StatCard from "../components/StatCard";
import DataTable from "../components/DataTable";
import Badge from "../components/Badge";

export default function Dashboard() {
  const columns = [
    { key: "order", title: "Order ID" },
    { key: "customer", title: "Customer" },
    { key: "total", title: "Total" },
    {
      key: "status",
      title: "Status",
      render: (r) => (
        <Badge variant={r.status === "Paid" ? "paid" : "pending"}>{r.status}</Badge>
      ),
    },
    { key: "date", title: "Date" },
    {
      key: "action",
      title: "Action",
      render: () => <button className="text-g2 font-semibold hover:underline">View</button>,
    },
  ];

  const rows = [
    { id: 1, order: "#1023", customer: "ZHN", total: "$120.00", status: "Paid", date: "Jan 25, 2026" },
    { id: 2, order: "#1024", customer: "Rahim", total: "$60.00", status: "Pending", date: "Jan 25, 2026" },
    { id: 3, order: "#1025", customer: "Karim", total: "$300.00", status: "Paid", date: "Jan 24, 2026" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-r from-g1 via-g2 to-g3 text-white p-6 shadow-soft relative overflow-hidden">
        <div className="max-w-2xl">
          <p className="text-white/75 text-sm">Welcome back</p>
          <h1 className="text-3xl font-semibold mt-1">Dashboard</h1>
          <p className="text-white/80 mt-2 text-sm">
            Track sales, orders and product updates in one place.
          </p>
        </div>

        {/* dotted accent */}
        <div className="absolute right-6 top-6 grid grid-cols-8 gap-2 opacity-30">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/70" />
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Sales" value="$12,420" hint="+12% this month" icon="💳" />
        <StatCard title="Orders" value="1,248" hint="32 pending" icon="🧾" />
        <StatCard title="Products" value="312" hint="8 low stock" icon="🪑" />
        <StatCard title="Customers" value="980" hint="+45 new" icon="👤" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl bg-white border border-black/5 shadow-soft p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Sales Overview</h2>
            <button className="text-sm text-g2 font-semibold hover:underline">Export</button>
          </div>

          {/* simple placeholder chart */}
          <div className="mt-4 h-56 rounded-2xl bg-gradient-to-b from-black/[0.02] to-black/[0.00] border border-black/5 grid place-items-center text-black/45">
            Chart Placeholder (connect Recharts later)
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-black/5 shadow-soft p-5">
          <h2 className="font-semibold">Quick Actions</h2>
          <div className="mt-4 space-y-3">
            {[
              { title: "Add Product", desc: "Create a new item", icon: "➕" },
              { title: "Create Coupon", desc: "Discount for shop", icon: "🏷️" },
              { title: "New Blog Post", desc: "Publish article", icon: "✍️" },
            ].map((x) => (
              <button
                key={x.title}
                className="w-full text-left rounded-2xl border border-black/5 bg-black/[0.02] hover:bg-black/[0.04] p-4 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{x.icon}</span>
                  <div>
                    <p className="font-semibold">{x.title}</p>
                    <p className="text-xs text-adminMuted">{x.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <button className="text-sm text-g2 font-semibold hover:underline">See all</button>
        </div>
        <DataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
}
