import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
        className="text-white"
        style={{ backgroundColor: "#231F20" }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
          <img
            src="/icon_hybrid.svg"
            alt="Saakaara"
            className="h-10 w-auto"
          />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mt-4">
              Saakaara helps organizations create meaningful gifting, workplace, and stationery experiences rooted in sustainability, Indian craftsmanship, and social impact.
            </p>
            <p className="text-white/80 text-xs leading-relaxed mt-4">
              50,000+ hours of livelihood created • 34,941 trees protected • 15+ Indian craft traditions supported
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Heritage Crafts", path: "/heritage-crafts" },
                { label: "Eco Stationery", path: "/eco-stationery" },
                { label: "Décor", path: "/decor" },
                { label: "Our Story", path: "/our-story" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={12} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
           <h4 className="font-heading text-lg mb-4">What We Stand For</h4>
            <ul className="space-y-3">
              {[
                "Indian Artisan Livelihoods",
                "Responsible Procurement",
                "Environmental Stewardship",
                "Women-Led Enterprises",
                "Meaningful Corporate Gifting",
              ].map((item) => (
                <li
                  key={item}
                  className="text-primary-foreground/70 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Corporate Gifting</p>
                  <a href="mailto:vasundhara@saakaara.com" className="text-sm hover:text-secondary transition-colors">
                    vasundhara@saakaara.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Call Us</p>
                  <a href="tel:+918977544958" className="text-sm hover:text-secondary transition-colors">
                    +91 89775 44958
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Based in</p>
                  <p className="text-sm">Hyderabad, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-6">

          <a
            href="https://www.linkedin.com/company/saakaara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://www.instagram.com/saakaara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>

        </div>
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Saakaara. Thoughts to Things. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40">
              Serving: Hyderabad · Bangalore · Mumbai · Delhi NCR · Chennai · Pune
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}