import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionHeading from "../components/SectionHeading";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", interest: "", message: ""
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  toast.success("Thank you! We'll be in touch within 24 hours.");

  setFormData({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  });
};

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-muted"
      style={{ backgroundColor: "#3A5E2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-white font-medium tracking-widest text-sm uppercase mb-4">Get in Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Create Something Meaningful Together
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Request a corporate gifting consultation, explore smart notebook solutions, 
              or simply learn more about how Saakaara can align your procurement with your values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-semibold mb-6">Request a Consultation</h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                    <Input
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Work Email *</label>
                    <Input
                      name="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Organization name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">I'm Interested In *</label>
                  <Select value={formData.interest} onValueChange={(v) => setFormData({ ...formData, interest: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate-gifts">Sustainable Corporate Gifts</SelectItem>
                      <SelectItem value="smart-notebooks">Smart Reusable Notebooks</SelectItem>
                      <SelectItem value="corporate-decor">Corporate Décor & Installations</SelectItem>
                      <SelectItem value="custom-solution">Custom Gift Solution</SelectItem>
                      <SelectItem value="bulk-order">Bulk Order Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input
                        type="hidden"
                        name="interest"
                        value={formData.interest}
                      />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Tell Us More</label>
                  <Textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Budget range, quantity, timeline, specific requirements..."
                  />
                </div>
                <Button type="submit" disabled={sending} className="w-full sm:w-auto px-10 py-6 rounded-full text-base font-medium">
                  {sending ? "Sending..." : "Submit Inquiry"}
                  {!sending && <Send size={16} className="ml-2" />}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-semibold mb-6">Direct Contact</h2>
              <div className="space-y-8">
                <div className="bg-primary rounded-2xl p-6">
                  <h3 className="font-medium text-white/80 mb-1">Corporate Gifting</h3>
                  <p className="text-white text-sm mb-3">Vasundhara Mavilla, Founder</p>
                  <div className="space-y-2">
                    <a href="mailto:vasundhara@saakaara.com" className="flex items-center gap-2 text-sm text-white hover:text-secondary transition-colors">
                      <Mail size={14} className="text-secondary" /> vasundhara@saakaara.com
                    </a>
                    <a href="tel:+918977544958" className="flex items-center gap-2 text-sm text-white hover:text-secondary transition-colors">
                      <Phone size={14} className="text-secondary" /> +91 89775 44958
                    </a>
                  </div>
                </div>

                <div className="bg-primary rounded-2xl p-6">
                  <h3 className="font-medium text-white/80 mb-1">Eco-Conscious Stationery</h3>
                  <p className="text-white text-sm mb-3">Purvi Shah</p>
                  <div className="space-y-2">
                    <a href="mailto:purvi@saakaara.com" className="flex items-center gap-2 text-sm text-white hover:text-secondary transition-colors">
                      <Mail size={14} className="text-secondary" /> purvi@saakaara.com
                    </a>
                    <a href="tel:+919948478622" className="flex items-center gap-2 text-sm text-white hover:text-secondary transition-colors">
                      <Phone size={14} className="text-secondary" /> +91 99484 78622
                    </a>
                  </div>
                </div>

                <div className="bg-primary rounded-2xl p-6">
                  <h3 className="font-medium text-white mb-1">Location</h3>
                  <div className="flex items-start gap-2 mt-2">
                    <MapPin size={14} className="text-secondary mt-0.5" />
                    <p className="text-sm text-white">Hyderabad, Telangana, India</p>
                  </div>
                  <p className="mt-3 text-xs text-white/70">
                    Serving: Hyderabad · Bangalore · Mumbai · Delhi NCR · Chennai · Pune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-like Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">What Happens Next?</h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "We Listen", desc: "Within 24 hours, our team reviews your requirements and connects with you." },
              { step: "2", title: "We Curate", desc: "We present 2-3 tailored concepts with pricing, impact metrics, and timelines." },
              { step: "3", title: "We Deliver", desc: "After approval, we handle production, branding, and pan-India delivery." },
            ].map((s) => (
              <div key={s.step}>
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg flex items-center justify-center mx-auto">
                  {s.step}
                </div>
                <h3 className="font-heading text-lg font-semibold mt-4">{s.title}</h3>
                <p className="mt-2 text-primary-foreground/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}