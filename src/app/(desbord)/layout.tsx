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
   <div className="min-h-screenflex">
     
      <Sidebar />

      
      <main className="w-full pl-0 lg:pl-64 min-h-screen p-4 md:p-8 pt-20 lg:pt-8 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}