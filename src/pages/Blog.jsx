import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "../lib/blogData";
import SectionHeading from "../components/SectionHeading";
import { useState } from "react";

const categories = ["All", "Indian Arts & Crafts", "Smart Notebooks"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-4">Insights & Stories</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              The Saakaara Journal
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Stories about India's living art traditions, sustainable innovation, and the people behind every handcrafted gift.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filtered.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/blog/${filtered[0].slug}`} className="group">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    {filtered[0].category}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold mt-4 group-hover:text-secondary transition-colors">
                    {filtered[0].title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{filtered[0].excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={14} />{filtered[0].date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} />{filtered[0].readTime}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-secondary font-medium text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(1).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold mt-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}