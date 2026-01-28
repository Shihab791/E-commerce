import React from "react";
import DataTable from "../components/DataTable";
import Badge from "../components/Badge";

export default function Orders() {
  const columns = [
    { key: "id", title: "Order" },
    { key: "customer", title: "Customer" },
    { key: "amount", title: "Amount" },
    {
      key: "status",
      title: "Status",
      render: (r) => (
        <Badge variant={r.status === "Paid" ? "paid" : r.status === "Cancelled" ? "cancelled" : "pending"}>
          {r.status}
        </Badge>
      ),
    },
    { key: "date", title: "Date" },
    { key: "action", title: "Action", render: () => <button className="text-g2 font-semibold hover:underline">Open</button> },
  ];

  const rows = [
    { id: "#2001", customer: "ZHN", amount: "$120", status: "Paid", date: "Jan 25" },
    { id: "#2002", customer: "Hasan", amount: "$60", status: "Pending", date: "Jan 25" },
    { id: "#2003", customer: "Noman", amount: "$90", status: "Cancelled", date: "Jan 24" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Orders</h1>
        <p className="text-sm text-adminMuted">View and manage all orders</p>
      </div>

      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
