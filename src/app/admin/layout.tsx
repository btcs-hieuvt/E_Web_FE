"use client";

import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import NavbarDashboard from "@/components/adminDashboard/NavbarDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-7 px-5 py-7 gap-1 w-screen min-h-screen">
      <nav className="col-span-1 !z-[1]">
        <NavbarDashboard />
      </nav>
      <div className="col-span-6 px-4">{children}</div>
    </section>
  );
}
