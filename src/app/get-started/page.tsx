"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetupPage() {
  const [form, setForm] = useState({
    siteName: "",
    adminEmail: "",
    password: "",
    dbUrl: "mysql://root:@localhost:3306/voltpress",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/v1/setup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) router.push("/admin");
    else {
      const data = await res.json();
      alert(data?.message || "Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form onSubmit={submit} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-3">
        <h1 className="text-2xl font-bold mb-4">Setup VoltPress ⚡</h1>
        <input
          className="input"
          placeholder="Site name"
          value={form.siteName}
          onChange={(e) => setForm({ ...form, siteName: e.target.value })}
        />
        <input
          className="input"
          placeholder="Admin email"
          value={form.adminEmail}
          onChange={(e) => setForm({ ...form, adminEmail: e.target.value })}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          className="input"
          placeholder="MySQL URL"
          value={form.dbUrl}
          onChange={(e) => setForm({ ...form, dbUrl: e.target.value })}
        />
        <button disabled={loading} className="w-full bg-black text-white p-2 rounded">
          {loading ? "Installing..." : "Install VoltPress"}
        </button>
      </form>
    </div>
  );
}
