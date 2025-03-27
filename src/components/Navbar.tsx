import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Toggle menu state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll effect on navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle navigation for both internal scrolling and redirection
  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out-expo",
        scrolled ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name / Logo */}
        <Link to="/" className="font-serif text-2xl font-semibold tracking-tight">
          Kettleborough VC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleNavClick("about")} className="text-sm hover:text-gray-600 transition-colors">
            About
          </button>
          <button onClick={() => handleNavClick("portfolio")} className="text-sm hover:text-gray-600 transition-colors">
            Portfolio
          </button>
          <button onClick={() => handleNavClick("team")} className="text-sm hover:text-gray-600 transition-colors">
            Team
          </button>
          <button onClick={() => handleNavClick("contact")} className="text-sm hover:text-gray-600 transition-colors">
            Contact
          </button>
          <button onClick={() => handleNavClick("contact")} className="btn-primary text-sm">
            Pitch Your Startup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-out-expo bg-white shadow-lg",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          <button onClick={() => handleNavClick("about")} className="py-3 text-gray-900 border-b border-gray-100">
            About
          </button>
          <button onClick={() => handleNavClick("portfolio")} className="py-3 text-gray-900 border-b border-gray-100">
            Portfolio
          </button>
          <button onClick={() => handleNavClick("team")} className="py-3 text-gray-900 border-b border-gray-100">
            Team
          </button>
          <button onClick={() => handleNavClick("contact")} className="py-3 text-gray-900 border-b border-gray-100">
            Contact
          </button>
          <button onClick={() => handleNavClick("contact")} className="btn-primary text-center mt-2">
            Pitch Your Startup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
