import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about" },
  { label: "Why Choose Us", path: "/why-us" },
  { label: "Products & Services", path: "/products" },
  { label: "Our Story", path: "/our-story" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://media.base44.com/images/public/69d8c78f64901a026749d5c0/1b768c559_wordmark_primary.jpg"
              alt="Saakaara - Thoughts to Things"
              className="h-10 w-auto mix-blend-multiply"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-muted text-secondary"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-4 px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}