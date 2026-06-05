import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Leaf, Cloud, RefreshCcw, Smartphone } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

export default function EcoStationery() {
  useEffect(() => {
  document.title =
    "Eco-Conscious Stationery | Rewritable, Cork & Seed Paper Notebooks";
}, []);
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/public\trees-impact.png"
            alt="Eco-conscious stationery in nature"
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
              Sustainable · Reusable · Regenerative
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Rethinking stationery for a more sustainable workplace
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl"
            >
              Every notebook carries an environmental footprint. We help organizations reduce it through reusable, renewable, and regenerative stationery solutions designed for modern teams.
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
                Explore Solutions
              </Link>

            </motion.div>

          </div>

        </div>

      </section>
      {/* Why Eco-Conscious Stationery Matters */}
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
                Why Eco-Conscious Stationery Matters
              </p>

              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground leading-tight">
                Small workplace choices create lasting environmental impact
              </h2>

              <p className="mt-6 text-foreground text-lg leading-relaxed">
                From onboarding kits and meeting rooms to employee workstations, stationery remains one of the most frequently used resources in modern organizations. Thoughtful procurement choices can significantly reduce waste, conserve resources, and reinforce sustainability commitments across the workplace.
              </p>

              <p className="mt-5 text-foreground leading-relaxed">
                At Saakaara, we believe sustainability is not achieved through a single initiative, but through thousands of conscious decisions made every day.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">

                {[
                  "Reduce paper consumption",
                  "Support responsible sourcing",
                  "Encourage circular use",
                  "Align procurement with ESG goals",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "#D9772B" }}
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
              className="relative max-w-[760px] ml-auto"
            >
              <img
                src="/stationery-main.png"
                alt="A rewritable book, bamboo book, seed paper book and a cork book"
                className="w-full h-full rounded-3xl shadow-2xl object-cover object-center"
              />

              <div
              className="hidden md:block absolute -bottom-12 -left-6 text-white p-6 rounded-2xl shadow-xl max-w-xs"
                style={{ backgroundColor: "#2C4723" }}
              >
                <p className="font-heading text-2xl font-bold">
                  Eco-Conscious Stationery
                </p>

                <p className="text-xs text-white/80 font-medium mt-1">
                  The solutions that Saakaara provides for your corporate needs
                </p>
              </div>

              <div className="md:hidden mt-4">
                <div
                  className="bg-[#2C4723] text-white rounded-2xl p-5 shadow-lg"
                >
                  <h3 className="font-heading text-2xl font-semibold">
                    Eco-Conscious Stationery
                  </h3>

                  <p className="mt-2 text-sm text-white/90 leading-relaxed">
                    Sustainable stationery solutions designed for organizations seeking measurable environmental impact.
                  </p>
                </div>
              </div>

              </motion.div>

          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-[#3A5E2E] text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-[#E47125] font-medium tracking-widest text-sm uppercase mb-4">
              Environmental Impact
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-semibold">
              The impact of conscious stationery choices
            </h2>

            <p className="mt-6 text-white/75 text-lg leading-relaxed">
              Every notebook, diary, and writing surface carries an environmental footprint.
              Through reusable, renewable, and regenerative alternatives, organizations can
              significantly reduce resource consumption while encouraging more sustainable habits.
            </p>

          </div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                value: "34,941",
                label: "Trees Protected",
              },
              {
                value: "2.91B",
                label: "Litres of Water Conserved",
              },
              {
                value: "1,747",
                label: "Tonnes of CO₂ Avoided",
              },
            ].map((stat) => (

              <div
                key={stat.label}
                className="text-center"
              >

                <p className="font-heading text-3xl md:text-5xl font-semibold text-[#F2ECE4]">
                  {stat.value}
                </p>

                <p className="mt-3 text-white/75 text-sm">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

          <p className="text-center mt-12 text-white/60 text-sm max-w-4xl mx-auto">
            Generated through sustainable stationery programs, reusable products,
            conscious procurement decisions, and collaborations with socially and environmentally
            responsible producer communities.
          </p>

        </div>

      </section>
      {/* Sustainable Stationery Collections */}
      <section className="py-16 md:py-24 bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
              Sustainable Stationery Collections
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-semibold">
              Three pathways to more sustainable workplaces
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Different organizations have different sustainability goals.
              Our stationery solutions support a range of approaches—from reducing
              consumption to embracing renewable and regenerative materials.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-8">

            {[
              {
                title: "Rewritable Notebooks",
                image: "/rewritable-notebook.png",
                desc: "Designed to replace repeated notebook consumption through reusable pages and digital note integration. Ideal for organizations seeking measurable reductions in paper use.",
                tags: ["Reusable", "Digital Integration", "Long-Term Impact"],
              },
              {
                title: "Bamboo Notebooks",
                image: "/bamboo-notebook.png",
                desc: "Crafted from sustainably sourced bamboo, these notebooks combine natural elegance, everyday durability, and responsible material choices for conscious professionals and organizations.",
                tags: ["Sustainably Sourced", "Natural Elegance", "Durable Design"],
              },
              {
                title: "Seed Paper Notebooks",
                image: "/seed-paper-notebook.png",
                desc: "Handmade notebooks featuring customizable seed paper elements that can be planted after use, creating a meaningful symbol of growth and regeneration.",
                tags: ["Plantable", "Handmade", "Regenerative Design"],
              },
              {
                title: "Cork Notebooks",
                image: "/cork-notebook.png",
                desc: "Crafted using renewable cork materials and designed for professionals who value natural textures, durability, and responsible sourcing.",
                tags: ["Renewable Materials", "Natural Texture", "Premium Finish"],
              },
    
            ].map((item) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[2rem] border border-border bg-background hover:shadow-xl transition-all duration-300"
              >

                <div className="h-64 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="font-heading text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#3A5E2E] text-white text-xs"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      {/* Choosing The Right Solution */}
      <section className="py-16 md:py-24 bg-[#F2ECE4]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
              Choosing The Right Solution
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-semibold">
              Different goals, different approaches
            </h2>

          </div>

          <div className="grid lg:grid-cols-4 gap-8">

            {[
              {
                title: "Rewritable Notebooks",
                best: "Organizations pursuing measurable sustainability targets and long-term reductions in paper consumption.",
              },
              {
                title: "Cork Notebooks",
                best: "Professionals seeking premium natural materials and environmentally conscious everyday stationery.",
              },
              {
                title: "Seed Paper Notebooks",
                best: "Events, campaigns, onboarding initiatives, and organizations looking to create memorable sustainability touchpoints.",
              },
              {
                title: "Bamboo Notebooks",
                best: "Organizations seeking durable, renewable alternatives that combine contemporary design with a strong commitment to sustainable sourcing.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="bg-[#3A5E2E] rounded-3xl p-8"
              >

                <h3 className="font-heading text-2xl font-semibold text-[#F2ECE4]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm uppercase tracking-wide text-white font-medium">
                  Best For
                </p>

                <p className="mt-3 text-white/80 leading-relaxed">
                  {item.best}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* Enterprise Programs */}
      <section className="py-16 md:py-24 bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
              Enterprise Programs
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-semibold">
              Designed for organizations of every size
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Whether you're procuring stationery for 50 employees or 5,000,
              our solutions can be customized to reflect your organization's
              identity, sustainability priorities, and employee experience goals.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Logo Branding",
              "Custom Packaging",
              "Welcome & Onboarding Kits",
              "Bulk Procurement Programs",
              "ESG Impact Reporting",
              "Dedicated Account Management",
            ].map((item) => (

              <div
                key={item}
                className="bg-[#231F20] rounded-2xl p-6"
              >
                <p className="font-medium text-[#F2ECE4]">
                  {item}
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>
      <CTASection
        title="Ready to make everyday choices more sustainable?"
        subtitle="Explore stationery solutions that reduce environmental impact while creating meaningful experiences for employees, clients, and stakeholders."
        secondaryLabel=""
      />

          </div>
  );
}
