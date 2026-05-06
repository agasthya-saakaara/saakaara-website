import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, Palette, Zap, Users, CheckCircle, ArrowRight, Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

const testimonials = [
  {
    quote: "We stopped gifting generic products the year we found Saakaara. Our employees actually keep what they receive — and they know the story behind it. That matters deeply to us.",
    author: "HR Head",
    company: "Leading Indian Conglomerate",
  },
  {
    quote: "Saakaara helped us align our corporate gifting to our ESG goals for the first time. Clean supply chain, real social impact, beautiful products. Exactly what we needed.",
    author: "Procurement Director",
    company: "Technology Company",
  },
  {
    quote: "The artisan stories behind each gift became part of our client conversations. It's not just a gift anymore — it's a shared value statement.",
    author: "Marketing Head",
    company: "Professional Services Firm",
  },
];

export default function WhyChooseUs() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">Why Saakaara</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Why Purpose-Driven Companies Choose Saakaara
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              In a world of generic corporate gifts and disposable stationery, making a different choice has 
              never mattered more — for your brand reputation, your ESG commitments, and your employees' sense of belonging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Case */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The Business Case" title="Your Mandate is Clear. We Make It Easy." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Sustainability and Social Impact",
              "Employee engagement and retention",
              "Brand reputation and stakeholder trust",
              "Procurement integrity and vendor ethics",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-5 bg-muted rounded-xl"
              >
                <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground">
            Saakaara delivers on all of these — without compromise on quality, customization, or timelines.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What Sets Us Apart" title="Our Three Pillars of Excellence" />
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "100% Transparency",
                subtitle: "Sustainability & Livelihood Support",
                points: [
                  "Who made your gift (village, craft tradition)",
                  "What materials were used (responsible, regional)",
                  "How production supported social good",
                  "Full transparency. Zero hidden costs to people or planet.",
                ],
              },
              {
                icon: Palette,
                title: "Aesthetics, Authenticity & Utility",
                subtitle: "Uniqueness That Reflects Your Brand",
                points: [
                  "Handcrafted by skilled artisans using traditional techniques",
                  "Customizable with your branding and packaging",
                  "Culturally rich — Kalahasti, Cheriyal, Pattachitra & Bidri heritage",
                  "Memorable — recipients keep and cherish these",
                ],
              },
              {
                icon: Zap,
                title: "Built for Corporate Timelines",
                subtitle: "Reliable Execution",
                points: [
                  "Pan-India delivery with predictable schedules",
                  "Bulk orders with flexible minimum order quantities",
                  "Seasonal planning support (Diwali, New Year, Annual Day)",
                  "Prototyping and approval workflows for corporate processes",
                ],
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <pillar.icon size={24} className="text-secondary" />
                </div>
                <p className="text-secondary text-sm font-medium">{pillar.subtitle}</p>
                <h3 className="font-heading text-xl font-semibold mt-1">{pillar.title}</h3>
                <ul className="mt-5 space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Proof */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-heading text-2xl md:text-3xl font-bold leading-snug">
              Over 50,000 person hours of dignified work created in a decade.
            </p>
            <p className="mt-4 text-white/80 max-w-3xl mx-auto">
              This isn't just a number — it's the proof that social responsibility and environmental consciousness can be integrated into everyday corporate choices: products, décor, and gifting.
            </p>
            <Link to="/our-story" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-secondary rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
              Read Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Team" title="50+ Years of Combined Expertise" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Corporate communications & stakeholder engagement",
              "HR and employee experience design",
              "Customer support and account management",
              "Artisan collaboration and ethical sourcing",
            ].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-muted text-center"
              >
                <p className="text-sm text-foreground">{skill}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground max-w-2xl mx-auto">
            We don't just source products. We architect procurement solutions that align with your organizational values.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold">
              Trusted by India's Leading Organizations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
              >
                <Quote size={24} className="text-secondary mb-4" />
                <p className="text-primary-foreground/90 leading-relaxed italic">{t.quote}</p>
                <div className="mt-6 pt-4 border-t border-primary-foreground/10">
                  <p className="font-medium text-sm">{t.author}</p>
                  <p className="text-primary-foreground/60 text-xs">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Make Your Next Procurement Decision Count"
        subtitle="Join the growing community of purpose-driven businesses choosing Saakaara for sustainable corporate gifting and smart stationery solutions."
        primaryLabel="Request Consultation"
        secondaryLabel="Schedule Smart Notebooks Demo"
        secondaryLink="/contact"
      />
    </div>
  );
}