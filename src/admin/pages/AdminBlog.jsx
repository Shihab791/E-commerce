import React from "react";
import Badge from "../components/Badge";

const PostCard = ({ title, date, status }) => (
  <div className="rounded-2xl bg-white border border-black/5 shadow-soft overflow-hidden hover:translate-y-[-2px] transition">
    <div className="h-36 bg-gradient-to-br from-black/[0.04] to-black/[0.01]" />
    <div className="p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="font-semibold">{title}</p>
        <Badge variant={status === "Published" ? "active" : "draft"}>{status}</Badge>
      </div>
      <p className="text-xs text-adminMuted mt-1">{date}</p>
      <div className="mt-3 flex gap-3">
        <button className="text-g2 font-semibold hover:underline text-sm">Edit</button>
        <button className="text-rose-600 font-semibold hover:underline text-sm">Delete</button>
      </div>
    </div>
  </div>
);

export default function AdminBlog() {
  const posts = [
    { id: 1, title: "First Time Home Owner Ideas", date: "Jan 20, 2026", status: "Published" },
    { id: 2, title: "Minimal Living Room Setup", date: "Jan 18, 2026", status: "Draft" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Blog</h1>
          <p className="text-sm text-adminMuted">Manage posts like your website blog section</p>
        </div>
        <button className="h-10 px-4 rounded-2xl bg-adminAccent text-black font-semibold shadow-soft hover:translate-y-[-1px] transition">
          + Add Post
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
