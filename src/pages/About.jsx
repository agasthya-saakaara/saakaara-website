import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Heart, Palette, Leaf, Award, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

export default function About() {
  useEffect(() => {
    document.title = "About | Saakaara";
  }, []);
  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">About Saakaara</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">Who We Are</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Saakaara is a sustainability-driven social enterprise — one of Hyderabad's leading sustainable corporate gifting companies. Over a decade, we've generated <strong className="text-foreground">50,000+ person hours</strong> of meaningful work for artisans, people with disabilities, and women's self-help groups, while serving purpose-led corporations across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Commitments */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Pillars"
            title="We Exist at the Intersection of Three Powerful Commitments"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Environmental Responsibility", desc: "Reducing carbon footprint through eco-friendly corporate gifts and zero-waste stationery" },
              { icon: Heart, title: "Social Impact", desc: "Supporting rural artisans, women's self-help groups, and persons with special needs" },
              { icon: Palette, title: "Cultural Preservation", desc: "Keeping India's handicraft traditions alive through meaningful engagement" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="py-16 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-heading text-2xl md:text-3xl font-bold text-white leading-snug">
              50,000+ person hours of meaningful work created over a decade
            </p>
            <p className="mt-4 text-white/80 max-w-3xl mx-auto">
              For artisans, people with disabilities, and women's self-help groups — through progressive corporate partnerships, NGO collaborations, and sustainability-focused supply chains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Ecosystem */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading center={false} eyebrow="Our Network" title="Every Saakaara Order Supports Real People" />
              <div className="space-y-6">
                {[
                  { title: "Village Artisans", desc: "Preserving traditional Indian crafts — Kalahasti, Cheriyal, Pattachitra, Bidri, Warli, Lippan and handloom textiles" },
                  { title: "Women-Led Self-Help Groups", desc: "Building economic independence and community empowerment" },
                  { title: "Non-Profit Organizations", desc: "Supporting persons with special needs through dignified, paid work" },
                  { title: "Social Entrepreneurs", desc: "Creating circular, sustainable supply chains" },
                  { title: "Organic Producers", desc: "Farming in harmony with nature using traditional methods" },
                ].map((partner) => (
                  <div key={partner.title} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">{partner.title}</h4>
                      <p className="text-muted-foreground text-sm">{partner.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="https://media.base44.com/images/public/69d8c78f64901a026749d5c0/3e409aa68_generated_579e069e.png" alt="Indian artisan at work" className="rounded-2xl shadow-xl" />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-2xl shadow-lg">
                <p className="font-heading text-2xl font-bold">50,000+</p>
                <p className="text-sm text-white/80">Person Hours Created</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Your Impact" title="When You Choose Saakaara" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Rural Livelihoods", desc: "Direct income to village economies and artisan families" },
              { icon: Heart, title: "Women's Empowerment", desc: "Support for women's cooperatives and self-help groups" },
              { icon: Palette, title: "Cultural Preservation", desc: "Keeping Indian craft traditions alive" },
              { icon: Leaf, title: "Environmental Conservation", desc: "Carbon reduction through responsible sourcing" },
            ].map((impact, i) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <impact.icon size={24} className="text-primary mx-auto mb-4" />
                <h4 className="font-heading text-lg font-semibold">{impact.title}</h4>
                <p className="mt-2 text-muted-foreground text-sm">{impact.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Saakaara Name */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">The Name</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight">Why "Saakaara"?</h2>
          <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed">
            In Sanskrit, <em>sākāra</em> means <strong>"giving shape to thoughts"</strong> and <strong>"realizing dreams."</strong>
          </p>
          <p className="mt-4 text-primary-foreground/70 leading-relaxed">
            Our founder, Vasundhara Mavilla, started this journey in 2015 with a vision: What if every corporate 
            decision — from the gifts we give to the notebooks we use — could support both people and planet?
          </p>
          <p className="mt-4 text-primary-foreground/70 leading-relaxed">
            Today, that vision is a decade-long movement serving purpose-driven organizations across industries.
          </p>
          <p className="mt-6 text-secondary text-sm font-medium">
            By the way, the right way to pronounce us is "SAA-KAA-RA" 😊
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Credentials" title="Experience You Can Trust" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, text: "10+ Years serving India's leading corporations" },
              { icon: Users, text: "50+ Years of combined team expertise" },
              { icon: Leaf, text: "100% Traceable supply chains" },
              { icon: Award, text: "Award-Winning artisan partners" },
              { icon: MapPin, text: "Pan-India Delivery across all metros" },
              { icon: Heart, text: "Certified non-profit collaborators" },
            ].map((cred, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted"
              >
                <cred.icon size={20} className="text-secondary shrink-0" />
                <p className="text-sm font-medium text-foreground">{cred.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Purpose"
        subtitle="Whether you're looking for eco-friendly Diwali corporate gifts, sustainable employee welcome kits, or bulk reusable notebooks for your organization, we'll help you make choices that reflect your values."
        primaryLabel="Request Corporate Proposal"
        secondaryLabel="Meet Our Artisans"
        secondaryLink="/products"
      />
    </div>
  );
}