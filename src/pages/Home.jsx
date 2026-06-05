import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Users, Palette, ShieldCheck, Heart, Building2, Star, CheckCircle, Eye, Zap, Quote} from "lucide-react";
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
              Sustainable · Handcrafted · ESG-Aligned
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              Every Gift Can Tell Your Company's Story
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Over 50,000 person hours of livelihood created for artisans, women's cooperatives, and people with disabilities. 34,941 trees protected through reusable products and conscious procurement choices. A decade of sustainable corporate gifting and eco-conscious stationery that amplify your values through every purchase.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="mt-3 text-primary-foreground/60 text-sm">
              Hyderabad-based · Serving India's purpose-driven organizations for over 10 years
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-7 py-4 bg-secondary text-white font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Explore Solutions
                <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors">
                Request Corporate Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Believe in the power of purposeful gifting"
            subtitle="Imagine making your corporate gifting a statement of who your company truly is. Every Saakaara solution reduces carbon footprint, supports rural artisans, and aligns with your ESG commitments — without compromising on quality, customization, or delivery timelines."
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Built For the Organizations Of Today"
            title="Solutions for every department"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/working-with-artisans.jpeg"
                alt="Indian artisan at work"
                className="rounded-2xl shadow-xl w-full"
              />

              <div
                className="absolute -bottom-6 -left-6 text-white p-6 rounded-2xl shadow-lg"
                style={{ backgroundColor: "#3A5E2E" }}
              >
                <p className="font-heading text-2xl font-bold">
                  50,000+
                </p>

                <p className="text-sm text-white/80">
                  Person Hours Created
                </p>
              </div>
            </motion.div>

      {/* Content */}
      <div>

        <SectionHeading
          center={false}
          eyebrow="Who We Are"
          title="Sustainability rooted in craft, community, and conscious procurement"
        />

        <p className="text-muted-foreground leading-relaxed">
          Saakaara is a sustainability-driven social enterprise helping organizations align procurement with purpose. Through sustainable gifting, eco-conscious stationery, and handcrafted décor, we create meaningful impact for both people and planet.
        </p>

        <div className="mt-8 space-y-5">

          {[
            {
              title: "Village Artisans",
              desc: "Preserving traditional Indian crafts while creating dignified livelihoods."
            },
            {
              title: "Women-Led Self Help Groups",
              desc: "Supporting economic independence and community empowerment."
            },
            {
              title: "Purpose-Driven Supply Chains",
              desc: "Partnering with NGOs, social enterprises, and conscious makers."
            }
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">

              <div
                className="w-2 h-2 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: "#3A5E2E" }}
              />

              <div>
                <h4 className="font-medium text-foreground">
                  {item.title}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>

{/* Environmental Impact */}
<section className="py-16 md:py-24 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
            <SectionHeading
              center={false}
              eyebrow="Our Impact"
              title="Every Saakaara order creates lasting change"
              eyebrowColor="var(--olive)"
            />

            <div className="space-y-6">

              {[
                {
                  title: "Forests Preserved",
                  desc: "Protecting up to 34,941 trees through reusable alternatives that reduce dependence on paper and disposable materials."
                },
                {
                  title: "Water Conserved",
                  desc: "Saving up to 2.91 billion litres of water by extending product life cycles and reducing resource-intensive production."
                },
                {
                  title: "Carbon Emissions Avoided",
                  desc: "Preventing up to 1,747 tonnes of CO₂ emissions, helping organizations lower their environmental footprint through conscious choices."
                },
                {
                  title: "Energy Saved",
                  desc: "Conserving enough energy to power approximately 2,696 homes for a year through reusable products that replace repeated manufacturing."
                },
                {
                  title: "Communities Empowered",
                  desc: "Supporting rural artisans, women-led collectives, social enterprises, and purpose-driven producers through meaningful, dignified work."
                }
              ].map((impact) => (
                <div key={impact.title} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: "#3A5E2E" }}
                  />
                  <div>
                    <h4 className="font-medium text-foreground">
                      {impact.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {impact.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src="/trees-impact.png"
          alt="Environmental impact through reusable products"
          className="rounded-2xl shadow-xl"
        />

        <div className="absolute -bottom-6 -right-6 text-white p-6 rounded-2xl shadow-lg max-w-xs"
        style={{ backgroundColor: "#3A5E2E" }}>
          <p className="font-heading text-2xl font-bold">34,941</p>
          <p className="text-sm font-medium">Trees Protected</p>
        </div>
      </motion.div>

      
    </div>
  </div>
</section>


      {/* Products at a Glance */}
          <section
            id="solutions"
            className="py-16 md:py-24 bg-muted scroll-mt-24"
          >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Products at a glance"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "sustainable-corporate-gifts.jpeg",
                icon: "🎁",
                title: "Sustainable Corporate Gifts",
                desc: "Handcrafted gifts rooted in India's art and cultural heritage. Perfect for Diwali, New Year, client appreciation, and employee recognition.",
                tags: ["Festival Gifting", "Client Appreciation", "Employee Awards", "C-Suite Gifting"],
                link: "/products#heritage-craft-gifts"
              },
              {
                img: "stationery-main.png",
                icon: "📓",
                title: "Eco-Conscious Stationery",
                desc: "Write, scan, cloud-sync. Wipe clean and reuse 100+ times. Dramatically reduce your organization's paper waste and carbon footprint.",
                tags: ["Onboarding Kits", "Conference Giveaways", "Paper Replacement", "Leadership Stationery"],
                link: "/products#notebooks"
              },
              {
                img: "/decor.jpeg",
                icon: "🏢",
                title: "Sustainable Office Décor",
                desc: "Props, table décor, and custom art installations that combine aesthetics with environmental responsibility.",
                tags: ["Office Redesigns", "Corporate Events", "Client Spaces", "Cultural Celebrations"],
                link: "/products#decor"
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
                    to={product.link}
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

      {/* Why Organizations Choose Saakaara */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="What sets us apart"
            title="Why organizations choose Saakaara"
            subtitle="Sustainable procurement without compromise on quality, customization, or execution."
          />

          {/* Business Case */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">

            {[
              "Sustainability & ESG alignment",
              "Employee engagement & retention",
              "Brand reputation & stakeholder trust",
              "Transparent & ethical supply chains",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-5 bg-card rounded-xl border border-border"
              >
                <CheckCircle
                  size={18}
                  className="text-primary mt-0.5 shrink-0"
                />

                <p className="text-sm font-medium text-foreground">
                  {item}
                </p>

              </motion.div>
            ))}

          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {[
              {
                icon: Eye,
                title: "100% Transparency",
                subtitle: "Sustainability & Livelihood Support",
                points: [
                  "Who made your product",
                  "What materials were used",
                  "How production supported social good",
                  "100% traceable supply chains",
                ],
              },
              {
                icon: Palette,
                title: "Authenticity & Utility",
                subtitle: "Crafted For Modern Organizations",
                points: [
                  "Handcrafted by skilled artisans",
                  "Custom branding & packaging",
                  "Rooted in Indian art traditions",
                  "Designed to be memorable and useful",
                ],
              },
              {
                icon: Zap,
                title: "Reliable Execution",
                subtitle: "Built For Corporate Timelines",
                points: [
                  "Pan-India delivery",
                  "Bulk orders with flexible MOQ",
                  "Seasonal gifting support",
                  "Structured approval workflows",
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
                  <pillar.icon
                    size={24}
                    className="text-secondary"
                  />
                </div>

                <p className="text-secondary text-sm font-medium">
                  {pillar.subtitle}
                </p>

                <h3 className="font-heading text-xl font-semibold mt-1">
                  {pillar.title}
                </h3>

                <ul className="mt-5 space-y-3">

                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle
                        size={14}
                        className="text-primary mt-0.5 shrink-0"
                      />

                      {point}

                    </li>
                  ))}

                </ul>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
    {/* Testimonials */}
      <section
        className="py-16 md:py-24 text-primary-foreground"
        style={{ backgroundColor: "#3A5E2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-4xl mx-auto">

          <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
            Trusted Partners
          </p>

          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Trusted by purpose-driven organizations across India
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Over a decade of sustainable gifting, ethical sourcing, and impact-led procurement partnerships.
          </p>

        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

            {[
              {
                quote:
                  "We stopped gifting generic products the year we found Saakaara. Our employees actually keep what they receive — and they know the story behind it.",
                author: "HR Head",
                company: "Leading Indian Conglomerate",
              },
              {
                quote:
                  "Saakaara helped us align our corporate gifting to our ESG goals for the first time. Clean supply chain, real social impact, beautiful products.",
                author: "Procurement Director",
                company: "Technology Company",
              },
              {
                quote:
                  "The artisan stories behind each gift became part of our client conversations. It became more than gifting — it became brand storytelling.",
                author: "Marketing Head",
                company: "Professional Services Firm",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >

                <Quote
                  size={24}
                  className="text-secondary mb-4"
                />

                <p className="text-white/95 leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="font-medium text-sm text-white">
                    {t.author}
                  </p>

                  <p className="text-white/60 text-xs">
                    {t.company}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
      {/* CTA */}
      <CTASection />
    </div>
  );
}
