import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Cloud, RefreshCcw } from "lucide-react";

export default function Impact() {
  useEffect(() => {
    document.title = "Your Impact | Saakaara";
  }, []);

  return (
    <main
      className="min-h-screen bg-background overflow-hidden"
      style={{
        backgroundImage: `
            linear-gradient(
            rgba(250,248,244,0.96),
            rgba(250,248,244,0.96)
            ),
            url('/white-paper-texture.jpg')
        `,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO */}

        <section className="min-h-[90vh] flex items-center">

          <div className="max-w-4xl mx-auto text-center">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary uppercase tracking-[0.25em] font-medium"
            >
              Thank you for being here
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary mt-6 leading-tight"
            >
              Every notebook begins with a blank page. Yours begins with an impact.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Every notebook has the power to replace thousands of
              disposable pages.

              Whether you chose this notebook yourself or received it
              as a gift, you're now part of a growing movement making
              everyday work a little more thoughtful—for forests,
              and for the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-20"
            >
              <p className="uppercase tracking-[0.2em] text-primary text-sm">
                Scroll to discover your impact
              </p>

              <div className="mt-4 text-primary text-3xl animate-bounce">
                ↓
              </div>
            </motion.div>

          </div>

        </section>

                {/* IMPACT */}

        <section className="pb-24">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-primary uppercase tracking-[0.2em] text-sm">
              Every notebook makes a difference.
            </p>

            <h2 className="font-heading text-4xl md:text-5xl mt-4">
              Small decisions create lasting change.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <Leaf size={34} />,
                value: "34,941",
                title: "Trees Protected",
              },
              {
                icon: <Cloud size={34} />,
                value: "1,747",
                title: "Tonnes of CO₂ Avoided",
              },
              {
                icon: <RefreshCcw size={34} />,
                value: "100+",
                title: "Reuses Per Page",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-3xl border border-border p-10 text-center shadow-sm"
              >

                <div className="flex justify-center text-secondary mb-6">
                  {item.icon}
                </div>

                <h3 className="font-heading text-5xl text-primary">
                  {item.value}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </section>

                {/* TREE JOURNEY */}

        <section className="pb-24">

          <div
            className="rounded-[2rem] p-10 md:p-16 text-white"
            style={{
              background:
                "linear-gradient(135deg,#3A5E2E,#2C4723)",
            }}
          >

            <div className="max-w-4xl mx-auto text-center">

              <p className="uppercase tracking-[0.2em] text-white/70 text-sm">
                Our Goal
              </p>

              <h2 className="font-heading text-4xl md:text-6xl mt-4">
                The One Million Tree Journey
              </h2>

              <p className="mt-6 text-white/80 text-lg leading-relaxed">
                Every reusable notebook moves us one step closer toward
                protecting one million trees through conscious design,
                responsible consumption, and everyday choices.
              </p>

              <div className="mt-12">

                <div className="w-full h-5 rounded-full bg-white/15 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "3.5%" }}
                    transition={{
                        duration: 1.4,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-secondary rounded-full"
                    />

                </div>

                <p className="mt-4 text-white/80">
                  34,941 Trees Protected
                </p>

              </div>

            </div>

          </div>

        </section>

                {/* ABOUT */}

        <section className="pb-24">

          <div className="max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[0.2em] text-secondary text-sm">
              About Saakaara
            </p>

            <h2 className="font-heading text-4xl md:text-5xl mt-4">
              Thoughtful products. Meaningful impact.
            </h2>

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Since 2016, Saakaara has helped organizations create sustainable
              corporate gifting, eco-conscious stationery, and handcrafted
              workplace experiences rooted in Indian craftsmanship and
              measurable environmental impact.
            </p>

          </div>

        </section>

        {/* CTA */}

        <section className="pb-32">

          <div
            className="rounded-[2rem] text-center px-8 py-16"
            style={{
              backgroundColor: "#F4EFE4",
            }}
          >

            <h2 className="font-heading text-4xl md:text-5xl text-primary">
              Curious what else we're building?
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Discover sustainable corporate gifting, workplace décor,
              eco-conscious stationery, and the stories behind everything
              we create.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-10 bg-secondary text-white px-8 py-4 rounded-full hover:opacity-90 transition"
            >
              Explore Saakaara

              <ArrowRight size={18} />

            </Link>

          </div>

        </section>

      </div>

    </main>

  );

}