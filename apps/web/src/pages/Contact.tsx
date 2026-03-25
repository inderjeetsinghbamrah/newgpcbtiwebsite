import { useState } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted", form);
  };

  return (
      <Layout>
        <PageBanner
            title="Contact Us"
            subtitle="Get in touch with us for any queries about admissions, courses, or general information"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Get In Touch</h3>
                  <div className="w-12 h-1 bg-gradient-gold rounded mb-6" />
                </motion.div>

                {[
                  { icon: MapPin, title: "Address", lines: ["Government Polytechnic College", "Bathinda, Punjab - 151001", "India"] },
                  { icon: Phone, title: "Phone", lines: ["+91-164-2240112", "+91-164-2240113"] },
                  { icon: Mail, title: "Email", lines: ["gpc.bathinda@gmail.com", "principal.gpcbti@punjab.gov.in"] },
                  { icon: Clock, title: "Office Hours", lines: ["Monday - Saturday", "9:00 AM - 5:00 PM", "Sunday: Closed"] },
                ].map((info, i) => (
                    <motion.div key={info.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-foreground text-sm">{info.title}</h4>
                        {info.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                      </div>
                    </motion.div>
                ))}

                {/* Social Links */}
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="p-4 bg-card rounded-xl border border-border">
                  <h4 className="font-serif font-bold text-foreground text-sm mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                        <a key={i} href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-all">
                          <Icon className="w-4 h-4" />
                        </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                          className="lg:col-span-2">
                <div className="bg-card p-8 rounded-xl border border-border shadow-md">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Send us a Message</h3>
                  <p className="text-sm text-muted-foreground mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                               placeholder="Your full name" required
                               className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Email Address</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                               placeholder="your@email.com" required
                               className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Phone Number</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                               placeholder="+91 XXXXX XXXXX"
                               className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                        <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required
                                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                          <option value="">Select Subject</option>
                          <option>Admission Inquiry</option>
                          <option>Course Information</option>
                          <option>Fee Related</option>
                          <option>Placement Query</option>
                          <option>General Inquiry</option>
                          <option>Complaint</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                      <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                placeholder="Write your message here..." rows={5} required
                                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                    </div>

                    <button type="submit" className="bg-gradient-gold text-accent-foreground px-8 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                </div>

                {/* Map */}
                <div className="mt-6 rounded-xl overflow-hidden border border-border shadow-sm">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8!2d74.95!3d30.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEyJzM2LjAiTiA3NMKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="GPC Bathinda Location"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default Contact;
