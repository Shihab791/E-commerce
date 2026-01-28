import React from "react";
import DataTable from "../components/DataTable";

export default function Customers() {
  const columns = [
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "orders", title: "Orders" },
    { key: "spent", title: "Spent" },
    { key: "action", title: "Action", render: () => <button className="text-g2 font-semibold hover:underline">View</button> },
  ];

  const rows = [
    { id: 1, name: "ZHN", email: "zhn@mail.com", orders: 12, spent: "$980" },
    { id: 2, name: "Rahim", email: "rahim@mail.com", orders: 5, spent: "$210" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Customers</h1>
        <p className="text-sm text-adminMuted">Customer list & history</p>
      </div>

      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
