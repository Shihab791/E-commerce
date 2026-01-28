import React from "react";

export default function DataTable({ columns, rows, rowKey = "id" }) {
  return (
    <div className="rounded-2xl bg-white border border-black/5 shadow-soft overflow-hidden">
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-black/[0.02] border-b border-black/5">
            <tr>
              {columns.map((c) => (
                <th key={c.key} className="text-left font-semibold text-black/60 px-4 py-3 whitespace-nowrap">
                  {c.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r[rowKey]} className="border-b border-black/5 hover:bg-black/[0.02] transition">
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 whitespace-nowrap">
                    {c.render ? c.render(r) : r[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
