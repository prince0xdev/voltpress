import React from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-60 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">⚡ VoltPress</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/posts">Posts</Link>
          <Link href="/admin/settings">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-slate-50">{children}</main>
    </div>
  );
}
