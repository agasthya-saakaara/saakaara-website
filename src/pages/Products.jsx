import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Leaf, Cloud, RefreshCcw, Smartphone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">Product Catalogue</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Sustainable Corporate Gifts & Smart Notebooks
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Explore Saakaara's range of eco-friendly corporate gifts, handmade artisan products, 
              and AI-powered reusable notebooks. Bulk orders, custom branding, pan-India delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Heritage Craft Gifts */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://media.base44.com/images/public/69d8c78f64901a026749d5c0/8b91f04d3_generated_76708590.png" alt="Heritage craft gifts" className="rounded-2xl shadow-xl" />
            </motion.div>
            <div>
              <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-2">Heritage Collection</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold">Heritage Craft Gifts</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Handcrafted by village artisans across India using centuries-old traditions. 
                Each piece is a living archive of Indian art and culture.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Kalahasti (Andhra Pradesh)", "Cheriyal (Telangana)", "Pattachitra (Odisha)", "Warli (Maharashtra)", "Dhokra (West Bengal)", "Handloom Textiles"].map((craft) => (
                  <div key={craft} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    <span className="text-foreground">{craft}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground mb-2">Perfect For:</p>
                <div className="flex flex-wrap gap-2">
                  {["C-Suite Gifting", "Festival Hampers", "Client Appreciation", "Milestone Awards"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Personalized branding", "Custom packaging", "Artisan story cards", "ESG impact documentation"].map((c) => (
                  <span key={c} className="text-xs text-primary flex items-center gap-1"><CheckCircle size={12} />{c}</span>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Request Custom Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Combos */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-2">Wellness Collection</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold">Wellness & Sustainability Gift Combos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Thoughtfully curated hampers combining organic produce, handmade wellness products, 
                eco-conscious stationery, and artisanal home accessories. Each combo tells a story of care.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { name: "Green Wellness Hamper", items: "Organic teas, natural skincare, handmade journals, plantable seed paper" },
                  { name: "Mindful Living Box", items: "Meditation aids, aromatic candles, eco-friendly home accessories" },
                  { name: "Festival of Lights", items: "Handcrafted diyas, organic sweets, artisan décor, sustainable packaging" },
                ].map((combo) => (
                  <div key={combo.name} className="p-4 bg-card rounded-xl border border-border">
                    <h4 className="font-medium text-foreground">{combo.name}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{combo.items}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Request Custom Hamper <ArrowRight size={16} />
              </Link>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <img src="https://media.base44.com/images/public/69d8c78f64901a026749d5c0/b9fe03f97_generated_808d97fa.png" alt="Wellness gift hampers" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Art & Expression + Custom */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="font-heading text-2xl font-semibold">Art & Expression Gifts</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Artworks, craft kits, and handmade artifacts created by rural artists, women artisans, 
                and tribal communities. Unique, memorable, conversation-starting.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Creative Teams", "Startup Culture", "Event Giveaways", "Individual Gifting"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">{tag}</span>
                ))}
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-secondary text-sm font-medium">
                Request Quote <ArrowRight size={14} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-primary text-primary-foreground rounded-2xl p-8"
            >
              <h3 className="font-heading text-2xl font-semibold">Custom Corporate Gift Solutions</h3>
              <p className="mt-3 text-primary-foreground/80 text-sm leading-relaxed">
                Don't see what you need? We'll create it. From 100 to 10,000+ units, 
                tailored to your brand identity, recipient profile, and ESG targets.
              </p>
              <div className="mt-6 space-y-3">
                {["Consultation — Share your brief", "Curation — 2-3 tailored concepts", "Approval — Sampling & sign-off", "Delivery — Pan-India + ESG docs"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center font-medium shrink-0">{i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white rounded-full text-sm font-medium">
                Request Consultation <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Décor */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/decor.jpeg" alt="Corporate décor" className="rounded-2xl shadow-xl" />
            </motion.div>
            <div>
              <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-2">Décor & Custom Solutions</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold">Sustainable Corporate Décor</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Transform your offices, events, and branded spaces with art that tells India's story. 
                Custom murals, art installations, event props, and cultural storytelling backdrops.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { title: "Interior Décor", desc: "Table-top artifacts, souvenirs, functional art pieces" },
                  { title: "Art Installations", desc: "Custom murals and cultural backdrops" },
                  { title: "Event Solutions", desc: "Sustainable event props and staging" },
                  { title: "Brand Activations", desc: "Experiential heritage installations" },
                ].map((item) => (
                  <div key={item.title} className="p-3">
                    <h4 className="font-medium text-sm text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                View Past Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Notebooks */}
      <section id="notebooks" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Smart Stationery"
            title="Smart Reusable Notebooks — Eco-Conscious Stationery"
            subtitle="The average professional fills 5-15 notebooks annually. Our AI-powered smart reusable notebooks let your team write freely, digitize instantly, and wipe clean for reuse 100+ times."
          />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            {/* ReNote Air */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img src="https://media.base44.com/images/public/69d8c78f64901a026749d5c0/48f039037_generated_2445c1ca.png" alt="Eco-Conscious Stationery Air" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">Premium</span>
                <h3 className="font-heading text-2xl font-semibold mt-3">Eco-Conscious Stationery Air</h3>
                <p className="text-sm text-muted-foreground mt-1">AI-Powered Smart Reusable Notebook</p>
                <div className="mt-5 space-y-2">
                  {[
                    { icon: RefreshCcw, text: "Write, wipe, reuse 100+ times" },
                    { icon: Smartphone, text: "Scan & digitize via AI app" },
                    { icon: Cloud, text: "Auto-sync to Google Drive, Dropbox, OneNote" },
                    { icon: Leaf, text: "Replaces 5+ notebooks annually per user" },
                  ].map((f) => (
                    <div key={f.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <f.icon size={16} className="text-primary shrink-0" />
                      {f.text}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Logo Embossing", "Custom Colors", "Bulk Pricing (50+)", "Gift Packaging"].map((o) => (
                    <span key={o} className="text-xs text-primary flex items-center gap-1"><CheckCircle size={10} />{o}</span>
                  ))}
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  Request Quote <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* ReNote Eco */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img src="https://media.base44.com/images/public/69d8c78f64901a026749d5c0/6bf0af026_generated_193c41ad.png" alt="Eco-Conscious Stationery Eco" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Eco Edition</span>
                <h3 className="font-heading text-2xl font-semibold mt-3">Eco-Conscious Stationery Eco</h3>
                <p className="text-sm text-muted-foreground mt-1">Sustainable Smart Notebook</p>
                <div className="mt-5 space-y-2">
                  {[
                    { icon: Leaf, text: "Made with recycled & plant-based materials" },
                    { icon: Smartphone, text: "AI-powered note digitization" },
                    { icon: RefreshCcw, text: "Same write-wipe-reuse (100+ cycles)" },
                    { icon: Cloud, text: "Biodegradable components" },
                  ].map((f) => (
                    <div key={f.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <f.icon size={16} className="text-primary shrink-0" />
                      {f.text}
                    </div>
                  ))}
                </div>
                <p className="mt-5 p-3 bg-muted rounded-lg text-xs text-muted-foreground">
                  <strong className="text-foreground">ESG Highlight:</strong> Ideal for companies pursuing carbon-neutral operations and circular-economy procurement.
                </p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full text-sm font-medium">
                  Request Quote <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Enterprise */}
          <div className="mt-16 bg-primary rounded-2xl p-10 text-primary-foreground text-center">
            <h3 className="font-heading text-2xl font-semibold">Enterprise Notebook Solutions</h3>
            <p className="mt-3 text-primary-foreground/70 max-w-2xl mx-auto">
              Enterprise licensing for Eco-Conscious Stationery AI app (100+ users), custom integrations with corporate IT systems, 
              training and onboarding support, pan-India delivery and account management.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-7 py-3 bg-secondary text-white rounded-full text-sm font-medium">
              Contact for Enterprise <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
