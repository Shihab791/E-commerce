import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-adminBg text-adminText">
      <div className="flex">
        <AdminSidebar />

        <div className="flex-1 min-w-0">
          <AdminTopbar />

          <main className="px-4 sm:px-6 lg:px-8 py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
