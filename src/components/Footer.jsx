import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">

            <p className="text-primary-foreground/70 text-sm leading-relaxed mt-4">
              50,000+ person hours of livelihood created for artisans, women's cooperatives & people with disabilities. Sustainable corporate gifts and eco-conscious stationery for purpose-driven companies across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Who We Are", path: "/about" },
                { label: "Why Choose Us", path: "/why-us" },
                { label: "Products & Services", path: "/products" },
                { label: "Our Story", path: "/our-story" },
                { label: "Blog", path: "/blog" },
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
            <h4 className="font-heading text-lg mb-4">Our Solutions</h4>
            <ul className="space-y-3">
              {[
                "Heritage Craft Gifts",
                "Wellness Gift Combos",
                "Eco-Conscious Stationery",
                "Corporate Décor",
                "Custom Gift Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={12} />
                    {item}
                  </Link>
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