import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const FacilitiesSection = () => {
  const { t } = useLanguage();

  const facilities = [
    { icon: "🖥️", title: t.facilitiesSection.computerLabs, desc: t.facilitiesSection.computerLabsDesc },
    { icon: "🔧", title: t.facilitiesSection.workshops, desc: t.facilitiesSection.workshopsDesc },
    { icon: "📚", title: t.facilitiesSection.centralLibrary, desc: t.facilitiesSection.centralLibraryDesc },
    { icon: "🏟️", title: t.facilitiesSection.sportsComplex, desc: t.facilitiesSection.sportsComplexDesc },
    { icon: "🏠", title: t.facilitiesSection.hostel, desc: t.facilitiesSection.hostelDesc },
    { icon: "🧪", title: t.facilitiesSection.researchLabs, desc: t.facilitiesSection.researchLabsDesc },
    { icon: "🌐", title: t.facilitiesSection.wifi, desc: t.facilitiesSection.wifiDesc },
    { icon: "🏥", title: t.facilitiesSection.medical, desc: t.facilitiesSection.medicalDesc },
  ];

  return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.facilitiesSection.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.facilitiesSection.sectionTitle}</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilities.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-5 rounded-xl border border-border text-center hover:shadow-lg hover:border-gold/30 transition-all group">
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <h4 className="font-serif font-bold text-sm text-foreground group-hover:text-primary transition-colors">{f.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default FacilitiesSection;
