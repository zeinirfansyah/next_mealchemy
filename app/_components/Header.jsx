import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 h-16 shadow-sm">
            <h1 id="logo" className="text-3xl font-semibold text-primary">
              mealchemy.
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden md:flex gap-2 items-center border bg-slate-100 rounded-full px-8 py-2">
                <LayoutGrid className="w-6 h-6" />
                <h2>Category</h2>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Category A</DropdownMenuItem>
                <DropdownMenuItem>Category B</DropdownMenuItem>
                <DropdownMenuItem>Category C</DropdownMenuItem>
                <DropdownMenuItem>Category D</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="hidden md:flex gap-2 items-center border rounded-full px-8 py-2">
              <Search className="w-6 h-6" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <h2 className="flex gap-2 items-center">
              <ShoppingBag className="w-6 h-6" />0
            </h2>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
