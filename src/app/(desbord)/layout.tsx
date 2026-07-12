import DesNavber from "@/Component/DesNavber";
import Sidebar from "@/Component/Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
      <Sidebar></Sidebar>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <DesNavber></DesNavber>  
        {children}
      </main>
    </div>
  );
}