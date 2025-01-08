"use client"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
export const StaticNavbar = () => {
    return (
        <div className="w-full bg-slate-950 h-40 flex text-white justify-between items-center px-16">
        <div>Home</div>
        <div> Demo Dashboard</div>
      </div>
    )
}

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10  inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <div className="text-sm gap-10 p-4">
        <Menu setActive={setActive} >
        <ProductItem
                title="Home"
                href="/"
                src=""
                description="."
              />
              <ProductItem
                title="Demo"
                href="/dashboard"
                src=""
                description="."
              />
          
          
          
        </Menu>
      </div>
      </div>
    );
  }