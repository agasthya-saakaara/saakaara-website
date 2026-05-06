import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection({
  title = "Ready to Align Your Gifting With Your Values?",
  subtitle = "Request a customized corporate gifting consultation or explore our smart stationery solutions for your organization.",
  primaryLabel = "Schedule a Consultation",
  primaryLink = "/contact",
  secondaryLabel = "Explore Products",
  secondaryLink = "/products",
}) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-primary-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            {primaryLabel}
            <ArrowRight size={18} />
          </Link>
          <Link
            to={secondaryLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-medium rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
        <div className="mt-10 text-sm text-primary-foreground/50">
          <p>Corporate Gifting: Vasundhara Mavilla · vasundhara@saakaara.com · +91 89775 44958</p>
        </div>
      </div>
    </section>
  );
}