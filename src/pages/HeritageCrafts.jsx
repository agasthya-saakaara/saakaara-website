import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Leaf, Cloud, RefreshCcw, Smartphone } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

export default function HeritageCrafts() {
  useEffect(() => {
  document.title =
    "Heritage Craft Gifts | Sustainable Corporate Gifting Inspired by Indian Artisans";
}, []);
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/public\heritage-crafts-hero.jpg"
            alt="Indian handcrafted sustainable corporate gifts"
            className="w-full h-full object-cover"
          />

          <div
            className="absolute inset-0 backdrop-blur-[2px]"
            style={{
              background:
                "linear-gradient(to right, rgba(40, 58, 34, 0.94), rgba(41, 76, 30, 0.82), rgba(44, 71, 35, 0.55))",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

          <div className="max-w-2xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-medium tracking-widest text-sm uppercase mb-4"
            >
              Sustainable · Handcrafted · Impact-Driven
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Sustainable corporate gifting rooted in Indian craft traditions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl"
            >
              Handcrafted corporate gifts that celebrate India’s artisan heritage while supporting sustainable livelihoods, ethical sourcing, and conscious procurement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-secondary text-white font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Request Corporate Proposal
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-colors"
              >
                Explore Collections
              </Link>

            </motion.div>

          </div>

        </div>

      </section>
      {/* Why Heritage Gifting Matters */}
      <section className="py-16 md:py-24 bg-[#F9F9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
                Why Heritage Gifting
              </p>

              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground leading-tight">
                Gifts people remember, stories people carry
              </h2>

              <p className="mt-6 text-foreground text-lg leading-relaxed">
                In a world of mass-produced gifting, handcrafted Indian artistry creates emotional connection, cultural storytelling, and lasting brand memory.
              </p>

              <p className="mt-5 text-foreground leading-relaxed">
                Every Saakaara gift carries the hands, histories, and heritage of India’s artisan communities — thoughtfully adapted for modern organizations seeking deeper meaning in how they engage employees, clients, and stakeholders.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">

                {[
                  "Crafted by artisan communities across India",
                  "Aligned with ESG & conscious procurement goals",
                  "Premium customization & branding options",
                  "Designed for corporate gifting at scale",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "#3A5E2D" }}
                    />
                    <p className="text-sm text-black leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/working-with-artisans.jpeg"
                alt="Indian artisan craftsmanship"
                className="rounded-3xl shadow-2xl object-cover"
              />

                <div className="hidden md:block absolute -bottom-6 -left-6 text-white p-6 rounded-2xl shadow-xl max-w-xs"
                style={{ backgroundColor: "#2C4723" }}
              >
                <p className="font-heading text-2xl font-bold">
                  50,000+
                </p>

                <p className="text-sm font-medium mt-1">
                  Person hours of meaningful work created
                </p>
              </div>
              <div className="md:hidden mt-4">
                <div
                  className="bg-[#2C4723] text-white rounded-2xl p-5 shadow-lg"
                >
                  <h3 className="font-heading text-3xl font-bold">
                    50,000+
                  </h3>

                  <p className="mt-2 text-sm text-white/90">
                    Person hours of meaningful work created
                  </p>
                </div>
              </div>

              </motion.div>

          </div>
        </div>
      </section>

        {/* Craft Traditions We Work With */}
        <section className="py-16 md:py-24 bg-background">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

              <div className="max-w-3xl">

                <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
                  Craft Traditions
                </p>

                <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground leading-tight">
                  Craft traditions we work with
                </h2>

                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                  We collaborate with artisan communities across India to bring traditional craftsmanship into contemporary corporate gifting experiences.
                </p>

              </div>

            </div>

            {/* Carousel */}
            <CraftCarousel />

          </div>

        </section>

      
      {/* Corporate Gifting Collections */}
      <section className="pt-8 pb-24 bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
              Corporate Gifting Collections
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Thoughtfully curated gifting experiences
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Designed for modern organizations seeking meaningful, memorable, and sustainability-aligned gifting solutions.
            </p>

          </div>

          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl group">

              <img
                src="/corporate-gifting-banner.jpeg"
                alt="Curated sustainable corporate gifting collections"
                className="w-full h-[320px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      to top,
                      rgba(24, 38, 20, 0.88) 10%,
                      rgba(44, 71, 35, 0.72) 45%,
                      rgba(44, 71, 35, 0.32) 70%,
                      rgba(44, 71, 35, 0.12) 100%
                    )
                  `,
                }}
              />

              {/* Floating Caption */}
              <div className="absolute bottom-0 left-0 p-8 md:p-10 max-w-2xl">

                <p className="text-white text-sm uppercase tracking-widest font-medium mb-3">
                  Purposeful Corporate Gifting
                </p>

                <h3 className="font-heading text-2xl md:text-4xl font-semibold text-white leading-tight">
                  Crafted experiences that reflect your organization’s values
                </h3>

              </div>

            </div>

          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: "Leadership & Executive Gifts",
                desc: "Premium handcrafted collections designed for CXOs, keynote speakers, board members, and high-value client relationships.",
                tags: ["Premium", "Artisanal", "High-Impact"],
              },
              {
                title: "Festive & Celebration Hampers",
                desc: "Curated festive gifting experiences that blend Indian craft traditions with thoughtful modern presentation.",
                tags: ["Diwali", "Celebrations", "Custom Packaging"],
              },
              {
                title: "Employee Welcome Kits",
                desc: "Purpose-driven onboarding experiences featuring sustainable products, artisan-crafted accessories, and branded essentials.",
                tags: ["Onboarding", "Culture", "Retention"],
              },
              {
                title: "Client Appreciation Gifts",
                desc: "Distinctive handcrafted gifts that strengthen partnerships while reflecting your organization’s values and identity.",
                tags: ["Relationship Building", "Brand Recall", "Customization"],
              },
              {
                title: "Conference & Event Gifting",
                desc: "Scalable gifting solutions for conferences, summits, CSR events, speaker kits, and organizational gatherings.",
                tags: ["Bulk Orders", "Branding", "Pan-India Delivery"],
              },
              {
                title: "Wellness & Mindful Living Collections",
                desc: "Thoughtful wellness combinations designed to encourage balance, sustainability, and conscious everyday living.",
                tags: ["Wellness", "Self-Care", "Mindful Living"],
              },
            ].map((collection, i) => (

              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-3xl p-8 border border-olive hover:shadow-xl transition-all duration-300"
              >

                <h3 className="font-heading text-2xl font-semibold text-foreground leading-snug">
                  {collection.title}
                </h3>

                <p className="mt-5 text-foreground leading-relaxed">
                  {collection.desc}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">

                  {collection.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#3A5E2E] text-white text-xs"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Custom Corporate Solutions */}
      <section className="pt-0 pb-24 bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] px-8 py-12 md:px-14 md:py-16 text-white"
            style={{
              background: `
                linear-gradient(
                  135deg,
                  #3A5E2E 0%,
                  #2F4D25 100%
                )
              `,
            }}
          >

            {/* Subtle Accent Glow */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
              style={{ backgroundColor: "#E47125" }}
            />

            <div className="relative z-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">

              {/* Left */}
              <div>
                <p className="text-white/70 text-sm uppercase tracking-[0.2em] font-medium mb-4">
                  Tailored Corporate Solutions
                </p>
                <h3 className="font-heading text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
                  Custom corporate gifting designed around your organization
                </h3>
                <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-2xl">
                  From leadership gifting and festive hampers to large-scale employee engagement initiatives, we create handcrafted gifting experiences aligned with your brand identity, ESG goals, and recipient profile.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-secondary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Request Consultation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-5">
                {[
                  "Consultation — Share your brief",
                  "Curation — Tailored gifting concepts",
                  "Sampling & approval process",
                  "Pan-India fulfillment & ESG documentation",
                ].map((step, i) => (
                  <div
                    key={step}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary text-white text-sm font-semibold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-white/85 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
function CraftCarousel() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = direction === "left" ? -380 : 380;

    scrollRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  const crafts = [
    {
      title: "Etikoppaka",
      region: "Andhra Pradesh",
      desc: "Traditional lacquered wooden craft created using natural dyes and hand-turning techniques. Known for its vibrant forms and timeless appeal.",
      ideal: [
        "Leadership gifting",
        "Festive hampers",
        "Executive desk accessories",
      ],
    },
    {
      title: "Cheriyal",
      region: "Telangana",
      desc: "Narrative folk art tradition celebrated for its expressive storytelling, intricate detailing, and handcrafted visual identity.",
      ideal: [
        "Cultural gifting",
        "Office décor accents",
        "Brand storytelling experiences",
      ],
    },
    {
      title: "Kondapalli",
      region: "Andhra Pradesh",
      desc: "Handcrafted wooden toys and figurines known for their lightweight forms, artisanal charm, and traditional craftsmanship.",
      ideal: [
        "Festive gifting",
        "Employee appreciation",
        "Collectible keepsakes",
      ],
    },
    {
      title: "Channapatna",
      region: "Karnataka",
      desc: "Lacquered wooden craft recognized for its smooth finish, playful geometry, and sustainable handcrafted production methods.",
      ideal: [
        "Welcome kits",
        "Creative corporate gifting",
        "Sustainable office accessories",
      ],
    },
    {
      title: "Dhokra",
      region: "West Bengal",
      desc: "Ancient brass casting tradition preserving tribal metal artistry through handcrafted textures and sculptural forms.",
      ideal: [
        "Premium client gifting",
        "Leadership mementos",
        "Artistic installations",
      ],
    },
    {
      title: "Bidri",
      region: "Telangana",
      desc: "Intricate metal inlay craft distinguished by its deep black finish and fine silver detailing rooted in Deccan heritage.",
      ideal: [
        "Luxury corporate gifting",
        "Executive collectibles",
        "Commemorative gifts",
      ],
    },
  ];

  return (

    <div className="relative">

      {/* Buttons */}
      <div className="hidden md:flex items-center gap-3 absolute -top-20 right-0 z-10">

        <button
          onClick={() => scroll("left")}
          className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ChevronRight size={20} />
        </button>

      </div>

      {/* Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
      >

        {crafts.map((craft) => (

          <div
            key={craft.title}
            className="min-w-[320px] md:min-w-[360px] bg-[#3A5E2E] rounded-3xl p-8 border border-[#E8E5D6] shadow-sm hover:shadow-xl transition-all duration-300"
          >

            <p className="text-white/80 text-sm font-medium">
              {craft.region}
            </p>

            <h3 className="font-heading text-3xl font-semibold text-white mt-2">
              {craft.title}
            </h3>

            <p className="mt-5 text-white/90 leading-relaxed">
              {craft.desc}
            </p>

            <div className="mt-8">

              <p className="text-sm font-semibold text-white uppercase tracking-wide">
                Ideal For
              </p>

              <ul className="mt-4 space-y-3">

                {craft.ideal.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/90"
                  >

                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "#D26014" }}
                    />

                    {item}

                  </li>
                ))}

              </ul>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}
