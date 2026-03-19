import { motion } from "framer-motion";
import { Phone, Mail, Clock, MessageCircle, HelpCircle, FileQuestion, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HelpdeskSection = () => {
  const { t } = useLanguage();

  const helpdeskItems = [
    { icon: Phone, title: t.helpdesk.admissionHelpline, info: "+91-164-2240112", desc: t.helpdesk.admissionDesc, action: "tel:+911642240112" },
    { icon: Mail, title: t.helpdesk.emailSupport, info: "info@gpcbathinda.ac.in", desc: t.helpdesk.emailDesc, action: "mailto:info@gpcbathinda.ac.in" },
    { icon: MessageCircle, title: t.helpdesk.studentGrievance, info: t.helpdesk.grievanceInfo, desc: t.helpdesk.grievanceDesc, action: "/contact" },
    { icon: FileQuestion, title: t.helpdesk.rti, info: t.helpdesk.rtiInfo, desc: t.helpdesk.rtiDesc, action: "/contact" },
  ];

  const faqs = [
    { q: t.helpdesk.faqQ1, a: t.helpdesk.faqA1 },
    { q: t.helpdesk.faqQ2, a: t.helpdesk.faqA2 },
    { q: t.helpdesk.faqQ3, a: t.helpdesk.faqA3 },
  ];

  return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.helpdesk.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.helpdesk.sectionTitle}</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {helpdeskItems.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-gold" /> {t.helpdesk.faq}
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
                {t.helpdesk.moreQuestions} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default HelpdeskSection;
