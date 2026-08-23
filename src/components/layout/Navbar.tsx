import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { cn } from "../../lib/utils";
import { SearchModal } from "../SearchModal";

const navLinks = [
  { name: "About Us", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "Admissions", path: "/admissions" },
  { name: "Placement", path: "/placement" },
  { name: "Faculty", path: "/faculty" },
  { name: "Research & Innovation", path: "/research" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/aion-brand.png" alt="AION - IMS Logo" className="h-10 w-auto object-contain" />
              <span className="text-2xl font-bold text-blue-900">AION - IMS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="ml-4 text-slate-500 hover:text-blue-600"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="mr-4 text-slate-500 hover:text-blue-600"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t px-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium",
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
