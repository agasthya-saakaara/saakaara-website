import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Leaf, Cloud, RefreshCcw, Smartphone } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { useEffect } from "react";


export default function Decor() {
   useEffect(() => {
    document.title =
      "Sustainable Corporate Décor | Artisan-Led Workplace Design & Installations";
  }, []);
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/public/kalahasti-decor.png"
            alt="Indian Kalahasti Painting in corporate learning center"
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
              Handcrafted · Experiential · Spatial Storytelling
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Transform workspaces into meaningful cultural experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl"
            >
              Handcrafted décor, artisan installations, and culturally rooted spatial experiences designed for modern workplaces, hospitality spaces, events, and brand environments.
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
                Explore Installations
              </Link>

            </motion.div>

          </div>

        </div>

      </section>
      {/* Why Spatial Design Matters */}
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
                Why Spatial Design Matters
              </p>

              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground leading-tight">
                Spaces shape how people feel, connect, and remember
              </h2>

              <p className="mt-6 text-foreground text-lg leading-relaxed">
                In a world of mass-produced gifting, handcrafted Indian artistry creates emotional connection, cultural storytelling, and lasting brand memory.
              </p>

              <p className="mt-5 text-foreground leading-relaxed">
                Every Saakaara gift carries the hands, histories, and heritage of India’s artisan communities — thoughtfully adapted for modern organizations seeking deeper meaning in how they engage employees, clients, and stakeholders.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">

                {[
                  "Culturally rooted workplace experiences",
                  "Sustainable & artisan-led production",
                  "Custom spatial storytelling concepts",
                  "Designed for offices, hospitality & events",
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
                src="/konark-art-installation.jpeg"
                alt="An art installation of Konark Dance Festival"
                className="
                  rounded-3xl
                  shadow-2xl
                  object-cover
                  w-full
                  h-[280px]
                  md:h-auto
                "
              />

              <div
                  className="hidden md:block absolute -bottom-24 -left-6 text-white p-6 rounded-2xl shadow-xl max-w-xs"
                  style={{ backgroundColor: "#2C4723" }}
                >
                <p className="font-heading text-2xl font-bold">
                  Konark Dance Festival
                </p>

                <p className="text-xs text-white/80 font-medium mt-1">
                  A handcrafted wall installation  that we designed celebrating eight classical and folk dance traditions of India
                </p>
              </div>
            <div className="md:hidden mt-4">
              <div
                className="bg-[#2C4723] text-white rounded-2xl p-5 shadow-lg"
              >
                <h3 className="font-heading text-2xl font-semibold">
                  Konark Dance Festival
                </h3>

                <p className="mt-2 text-sm text-white/90 leading-relaxed">
                  A handcrafted wall installation that we designed celebrating eight classical and folk dance traditions of India.
                </p>
              </div>
            </div>

            </motion.div> 

          </div>
        </div>
      </section>
      
      {/* Designing Spaces With Purpose */}
      <section className="py-16 md:py-24 bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">
              Designing Spaces With Purpose
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground leading-tight">
              From everyday utility to immersive experiences
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We help organizations integrate sustainability, Indian craftsmanship, and cultural storytelling into workplaces, events, and customer-facing environments.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                title: "Workspace Décor & Utility",
                desc: "Handcrafted desk accessories, organizers, coasters, planters, trays, and functional décor that elevate everyday workspaces while reflecting organizational values.",
                tags: ["Desk Accessories", "Table Décor", "Utility Products"],
              },
              {
                title: "Reception & Common Areas",
                desc: "Culturally rooted displays, artisan showcases, and curated décor elements that create memorable first impressions and welcoming shared spaces.",
                tags: ["Reception Design", "Visitor Experience", "Brand Identity"],
              },
              {
                title: "Signature Installations",
                desc: "Large-format murals, artisan collaborations, heritage-inspired artworks, and landmark installations designed specifically for your organization.",
                tags: ["Murals", "Custom Artwork", "Spatial Storytelling"],
              },
            ].map((item, i) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="overflow-hidden rounded-[2rem] border border-border bg-background hover:shadow-xl transition-all duration-300"
              >

                <div className="p-8">

                  <h3 className="font-heading text-3xl font-semibold text-foreground">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-[#3A5E2E] rounded-[2rem] p-10 md:p-14 text-center"
          >

            <h3 className="font-heading text-3xl md:text-3xl font-semibold text-white">
              Let's create a space that reflects your values
            </h3>

            <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you're looking for handcrafted workplace décor, event styling, reception displays, or custom installations, we'll design a solution around your space, brand, and objectives.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-[#D9772B] text-white rounded-full text-sm font-medium hover:bg-[#C96B24] transition-colors"
            >
              Schedule a Décor Consultation
              <ArrowRight size={16} />
            </Link>

          </motion.div>

        </div>

      </section>

    </div>
  );
}
