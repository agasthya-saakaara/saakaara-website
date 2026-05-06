import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Users, Palette, ShieldCheck, Heart, Building2, Star, CheckCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8c78f64901a026749d5c0/6d4909264_generated_afcd95ee.png"
            alt="Sustainable corporate gifts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
              Sustainable · Handcrafted · ESG-Aligned
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              Every Gift Can Tell Your Company's Story
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              10 years. 50,000+ person hours of livelihood created for artisans, women's cooperatives, and people with disabilities. Sustainable corporate gifting and eco-conscious stationery that proves your values through every purchase.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="mt-3 text-primary-foreground/60 text-sm">
              Hyderabad-based · Serving India's purpose-driven companies since 10+ years
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center gap-2 px-7 py-4 bg-secondary text-white font-medium rounded-full hover:opacity-90 transition-opacity">
                Explore Sustainable Gifts <ArrowRight size={18} />
              </Link>
              <Link to="/products#notebooks" className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium rounded-full hover:bg-white/20 transition-colors">
                Get Smart Notebooks
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors">
                Request Corporate Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Believe in the Power of Purposeful Gifting"
            subtitle="Imagine making your corporate gifting a statement of who your company truly is. Every Saakaara gift reduces carbon footprint, supports rural artisans, and aligns with your ESG commitments — without compromising on quality, customization, or delivery timelines."
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed"
          >
            Whether you're sourcing eco-friendly Diwali corporate gifts, employee onboarding kits, 
            or client appreciation hampers, Saakaara delivers handcrafted excellence that your teams 
            and clients will actually remember. Your procurement decision becomes your impact story.
          </motion.p>
        </div>
      </section>

      {/* Why Choose - Three Columns */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Saakaara"
            title="Solutions for Every Department"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Procurement & Operations",
                subtitle: "ESG Compliance Made Easy",
                points: [
                  "Pan-India delivery with predictable timelines",
                  "Bulk corporate gifts with flexible MOQ",
                  "Sustainability, Women Empowerment & Artisanal Livelihood impact",
                ],
              },
              {
                icon: Heart,
                title: "Human Resources",
                subtitle: "Employee Engagement With Purpose",
                points: [
                  "Gifts that align with company values",
                  "Customizable welcome kits and milestone awards",
                  "Zero-waste stationery for sustainability goals",
                ],
              },
              {
                icon: Star,
                title: "Branding & Marketing",
                subtitle: "Elevate Your Brand Reputation",
                points: [
                  "Premium handcrafted gifts, not generic catalogues",
                  "Unique products rooted in Indian art heritage",
                  "Full branding and personalization options",
                ],
              },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <col.icon size={24} className="text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{col.title}</h3>
                <p className="text-secondary font-medium text-sm mt-1">{col.subtitle}</p>
                <ul className="mt-5 space-y-3">
                  {col.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trusted Partners"
            title="Trusted by Purpose-Led Organizations Across India"
            subtitle="Over a decade of serving corporations, startups, and individuals with sustainable gifting solutions and smart reusable notebooks."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-10 text-center"
          >
            <p className="font-heading text-xl md:text-2xl italic text-foreground leading-relaxed">
              "Our employees keep and use what they receive — and they know the story behind it."
            </p>
            <p className="mt-6 text-muted-foreground text-sm font-medium">
              — HR Head, Leading Indian Conglomerate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products at a Glance */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Products at a Glance"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://media.base44.com/images/public/69d8c78f64901a026749d5c0/3e409aa68_generated_579e069e.png",
                icon: "🎁",
                title: "Sustainable Corporate Gifts",
                desc: "Handcrafted gifts rooted in India's art and cultural heritage. Perfect for Diwali, New Year, client appreciation, and employee recognition.",
                tags: ["Festival Gifting", "Client Appreciation", "Employee Awards", "C-Suite Gifting"],
              },
              {
                img: "https://media.base44.com/images/public/69d8c78f64901a026749d5c0/48f039037_generated_2445c1ca.png",
                icon: "📓",
                title: "Eco-Conscious Stationery",
                desc: "Write, scan, cloud-sync. Wipe clean and reuse 100+ times. Dramatically reduce your organization's paper waste and carbon footprint.",
                tags: ["Onboarding Kits", "Conference Giveaways", "Paper Replacement", "Leadership Stationery"],
              },
              {
                img: "https://media.base44.com/images/public/69d8c78f64901a026749d5c0/2e8cb24f1_generated_20324695.png",
                icon: "🏢",
                title: "Sustainable Office Décor",
                desc: "Props, table décor, and custom art installations that combine aesthetics with environmental responsibility.",
                tags: ["Office Redesigns", "Corporate Events", "Client Spaces", "Cultural Celebrations"],
              },
            ].map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                    <span className="text-2xl">{product.icon}</span> {product.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{product.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/products"
                    className="mt-5 inline-flex items-center gap-1 text-secondary text-sm font-medium hover:gap-2 transition-all"
                  >
                    Explore Collection <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">Our Impact</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold">A Decade of Proof</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
              Social responsibility and environmental consciousness aren't trade-offs — they're the foundation of everything we do.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50,000+", label: "Person Hours of Livelihood Created" },
              { value: "10+", label: "Years of Sustained Impact" },
              { value: "100%", label: "Traceable Supply Chains" },
              { value: "6+", label: "Metro Cities Served" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-secondary">{stat.value}</p>
                <p className="mt-2 text-primary-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-10 text-primary-foreground/60 text-sm max-w-3xl mx-auto">
            Generated through collaborations with progressive corporates, NGOs, and sustainability-focused makers — supporting artisans, people with disabilities, and women's self-help groups.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
