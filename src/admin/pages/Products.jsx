import React, { useMemo, useState } from "react";
import DataTable from "../components/DataTable";
import Badge from "../components/Badge";

export default function Products() {
  const [q, setQ] = useState("");

  const rows = [
    { id: 1, name: "Nordic Chair", price: "$50.00", stock: 12, status: "Active" },
    { id: 2, name: "Kruzo Chair", price: "$60.00", stock: 3, status: "Active" },
    { id: 3, name: "Ergonomic Chair", price: "$30.00", stock: 0, status: "Draft" },
  ];

  const filtered = useMemo(() => {
    return rows.filter((r) => r.name.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  const columns = [
    { key: "name", title: "Product" },
    { key: "price", title: "Price" },
    {
      key: "stock",
      title: "Stock",
      render: (r) => (
        <span className={r.stock === 0 ? "text-rose-600 font-semibold" : "text-black/70"}>
          {r.stock}
        </span>
      ),
    },
    {
      key: "status",
      title: "Status",
      render: (r) => (
        <Badge variant={r.status === "Active" ? "active" : "draft"}>{r.status}</Badge>
      ),
    },
    {
      key: "action",
      title: "Action",
      render: () => (
        <div className="flex items-center gap-3">
          <button className="text-g2 font-semibold hover:underline">Edit</button>
          <button className="text-rose-600 font-semibold hover:underline">Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-sm text-adminMuted">Manage your shop products</p>
        </div>

        <button className="h-10 px-4 rounded-2xl bg-adminAccent text-black font-semibold shadow-soft hover:translate-y-[-1px] transition">
          + Add Product
        </button>
      </div>

      <div className="rounded-2xl bg-white border border-black/5 shadow-soft p-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex items-center gap-2 rounded-2xl bg-black/[0.02] border border-black/5 px-3 py-2 w-full md:max-w-md">
          <span className="text-black/40">🔎</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full bg-transparent outline-none text-sm placeholder:text-black/35"
            placeholder="Search product..."
          />
        </div>

        <div className="flex gap-2">
          <select className="h-10 rounded-2xl border border-black/10 bg-white px-3 text-sm">
            <option>All Categories</option>
            <option>Chair</option>
            <option>Sofa</option>
          </select>
          <select className="h-10 rounded-2xl border border-black/10 bg-white px-3 text-sm">
            <option>All Status</option>
            <option>Active</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      <DataTable columns={columns} rows={filtered} />
    </div>
  );
}
