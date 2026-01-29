"use client";
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/Navbar";
import Sidebar from "@/app/components/sidebar/Sidebar";
import { useState } from "react";


export default function MainLayout({ children,
}: {
  children: React.ReactNode;
}) {

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const isExpanded = !collapsed || isHovered;

  function toggleSidebar() {
    setCollapsed(prev => !prev);
  }

  return (
    <div className="flex h-full bg-gray-100 dark:bg-gray-900">
      <Sidebar
        isExpanded={isExpanded}
        setIsHovered={setIsHovered}
        isMobileOpen={isMobileOpen}
      />
      <div className="flex flex-col flex-1">
        <Navbar
          toggleSidebar={toggleSidebar}
          isExpanded={isExpanded}
          toggleSidebarMobile={() => setIsMobileOpen(prev => !prev)}
          isMobileOpen={isMobileOpen}
        />
        <main className={`p-6 ${isExpanded ? "xl:ml-72.5" : "xl:ml-22.5"}`}>
          {children}
        </main>
        <Footer isExpanded={isExpanded} />
      </div>
    </div>
  );
}

