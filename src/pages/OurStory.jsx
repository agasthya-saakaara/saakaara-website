import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import CTASection from "../components/CTASection";

const timelineEvents = [
  {
    year: "2015",
    title: "The Beginning",
    content: "Vasundhara Mavilla left a stable career to pursue a bold question: \"What if the gifts of Mother Earth could replace the harm we cause her every day?\" Growing up in village India and working as a nutrition advisor, she'd spent years seeing corporate India consuming at a pace our planet couldn't sustain."
  },
  {
    year: "2016",
    title: "The Birth of Saakaara",
    content: "Reaching out to artisans met during travels across rural India — weavers, potters, painters, metalworkers who were masters of crafts passed down through generations. Connecting with women's self-help groups and non-profit organizations supporting persons with special needs."
  },
  {
    year: "2017",
    title: "Shankar Foundation Partnership",
    content: "One of our proudest moments — collaborating with Shankar Foundation, a Hyderabad non-profit supporting children and adults with special needs. We gave them meaningful work — assembling notebooks, creating hand-drawn art, packaging products. Not as charity, but as equals in a supply chain built on dignity."
  },
  {
    year: "2018",
    title: "The First Big Breakthrough",
    content: "One of the world's largest multinational corporations took a chance on us. They replaced their entire corporate gifting program with our handcrafted solutions, transitioned thousands of employees to reusable notebooks, and decorated their offices with artisan art."
  },
  {
    year: "Today",
    title: "A Decade-Long Movement",
    content: "Serving purpose-driven corporations across India's major metros, startups building sustainable cultures, HR and procurement teams who believe business can be a force for good. A team with 50+ years of combined expertise, partnering with award-winning artisans and certified non-profits."
  },
];

export default function OurStory() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">Our Story</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                From Dream to Movement
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Founded in 2015 by Vasundhara Mavilla, Saakaara has grown from a dream of sustainable living 
                into India's trusted sustainable corporate gifting partner.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <img src="/ourstoryimage.jpeg" alt="Vasundhara Mavilla, Founder" className="rounded-2xl shadow-2xl max-h-96 mx-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Quote */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={40} className="text-secondary/30 mx-auto mb-6" />
          <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground leading-relaxed">
            "What if every corporate decision — from the gifts we give to the notebooks we use — 
            could support both people and planet?"
          </blockquote>
          <p className="mt-6 text-muted-foreground">— Vasundhara Mavilla, Founder</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0 border-l-2 border-secondary/30"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{event.year.slice(-2)}</span>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <span className="text-secondary text-sm font-medium">{event.year}</span>
                  <h3 className="font-heading text-xl font-semibold mt-1">{event.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{event.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shankar Foundation Quote */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={32} className="text-secondary mx-auto mb-4" />
          <blockquote className="font-heading text-xl md:text-2xl italic text-primary-foreground/90 leading-relaxed">
            "The work order made a big difference in their behavior, especially in self-esteem. 
            Each task helped them reshape their own identities. Words are not adequate to express our 
            deep gratitude for maximizing strengths and minimizing limitations of people with special needs."
          </blockquote>
          <p className="mt-6 text-primary-foreground/60 text-sm">— Sridevi, Founder, Shankar Foundation</p>
        </div>
      </section>

      {/* Happy Coincidence */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">A Happy Coincidence</p>
              <h2 className="font-heading text-3xl font-semibold">Vasundhara Means "Earth"</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My name, Vasundhara, means "earth" in Sanskrit. I didn't think about the symbolism when I started. 
                But now I see it as a reminder: This is my responsibility. To save trees. To reduce waste. 
                To support livelihoods. To help our children inherit a planet that still thrives.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed italic">
                It's a lofty dream. But I'm determined to do my bit.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img src="/motherearthimage.jpeg" alt="Vasundhara in a flower field" className="rounded-2xl shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decade of Impact — HERO STATEMENT */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">A Decade of Impact</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              50,000+ Person Hours.<br className="hidden md:block" /> One Unwavering Mission.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Over the past decade, Saakaara generated over <strong className="text-foreground">50,000 person hours</strong> of meaningful work for artisans, people with disabilities, and women's self-help groups — supporting livelihoods, preserving traditional arts, and driving community empowerment.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              This was made possible through deep collaborations with progressive corporates, NGOs, and sustainability-focused makers and marketers — demonstrating that social responsibility and environmental consciousness can be seamlessly integrated into the everyday choices of products, décor, and gifting.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50,000+", label: "Person Hours of Work Created" },
              { value: "10+", label: "Years of Sustained Impact" },
              { value: "3", label: "Communities Empowered" },
              { value: "100%", label: "Traceable Supply Chains" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-6 text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-secondary">{stat.value}</p>
                <p className="mt-2 text-muted-foreground text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Three pillars of impact */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Artisan Livelihoods", desc: "Skilled craftspeople from rural India earning fair wages for heritage work" },
              { title: "People with Disabilities", desc: "Dignified, paid employment through our Shankar Foundation partnership" },
              { title: "Women's Self-Help Groups", desc: "Economic independence for women-led cooperatives across Telangana and beyond" },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="w-3 h-3 rounded-full bg-secondary mb-4" />
                <h4 className="font-heading text-lg font-semibold text-foreground">{pillar.title}</h4>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking For */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Join the Movement</h2>
          <p className="mt-4 text-muted-foreground">I'm looking for:</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Organizations ready to replace disposable stationery with reusable smart notebooks",
              "Procurement teams who want gifting that reflects their values",
              "HR leaders building employee experiences rooted in purpose",
              "Startup CEOs who believe growth and planetary health go hand in hand",
              "Collaborators who can expand our portfolio of sustainable solutions",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                <ArrowRight size={16} className="text-secondary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="If That's You, Let's Talk"
        subtitle="Partner with Saakaara to make sustainability the obvious choice for your organization."
        primaryLabel="Contact Vasundhara"
      />
    </div>
  );
}
