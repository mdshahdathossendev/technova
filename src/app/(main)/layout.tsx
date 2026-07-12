import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navber";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
       <Navbar></Navbar>
      {children}
     <Footer></Footer>
    </div>
  );
}