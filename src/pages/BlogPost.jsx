import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../lib/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-heading text-3xl font-semibold">Article Not Found</h1>
        <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-secondary">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6">
            <ArrowLeft size={16} /> Back to Journal
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-secondary">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          {/* CTA */}
          <div className="mt-16 p-8 bg-muted rounded-2xl text-center">
            <h3 className="font-heading text-2xl font-semibold">Interested in Sustainable Corporate Gifting?</h3>
            <p className="mt-2 text-muted-foreground">
              Explore how Saakaara can align your corporate gifts with your values.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
            >
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-semibold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group flex gap-4 items-center bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                  <img src={r.image} alt={r.title} className="w-24 h-24 object-cover rounded-lg shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm font-semibold group-hover:text-secondary transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">{r.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}