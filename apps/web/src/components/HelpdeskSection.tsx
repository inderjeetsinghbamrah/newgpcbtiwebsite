import { motion } from "framer-motion";
import { Phone, Mail, Clock, MessageCircle, HelpCircle, FileQuestion, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const helpdeskItems = [
  { icon: Phone, title: "Admission Helpline", info: "+91-164-2240112", desc: "Mon–Sat, 9 AM – 5 PM", action: "tel:+911642240112" },
  { icon: Mail, title: "Email Support", info: "info@gpcbathinda.ac.in", desc: "Response within 24 hours", action: "mailto:info@gpcbathinda.ac.in" },
  { icon: MessageCircle, title: "Student Grievance", info: "Online Portal", desc: "Track your complaint status", action: "/contact" },
  { icon: FileQuestion, title: "RTI & Queries", info: "Right to Information", desc: "File RTI requests online", action: "/contact" },
];

const faqs = [
  { q: "When do admissions open?", a: "Admissions for session 2025-26 open in June through PSBTE counseling." },
  { q: "Is hostel facility available?", a: "Yes, separate hostels for boys and girls with mess facility." },
  { q: "What is the fee structure?", a: "Approx. ₹17,500 per semester including tuition, lab, and library fees." },
];

const HelpdeskSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">We're Here to Help</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Helpdesk</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helpdeskItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item.action.startsWith("/") ? (
                <Link to={item.action} className="block bg-card p-6 rounded-xl border border-border hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                  </div>
                  <h4 className="font-serif font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm font-semibold text-primary">{item.info}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </Link>
              ) : (
                <a href={item.action} className="block bg-card p-6 rounded-xl border border-border hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                  </div>
                  <h4 className="font-serif font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm font-semibold text-primary">{item.info}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-gold" /> Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card p-4 rounded-lg border border-border">
                <p className="text-sm font-semibold text-foreground">{faq.q}</p>
                <p className="text-xs text-muted-foreground mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/contact" className="text-sm font-semibold text-primary hover:text-gold transition-colors inline-flex items-center gap-1">
              Have more questions? Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpdeskSection;
