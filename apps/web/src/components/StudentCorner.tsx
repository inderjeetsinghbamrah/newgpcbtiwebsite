import { motion } from "framer-motion";
import { BookOpen, Trophy, Users, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const StudentCorner = () => {
  const { t } = useLanguage();

  const studentItems = [
    { icon: Trophy, title: t.studentCorner.achievements, desc: t.studentCorner.achievementsDesc, link: "/students#achievements" },
    { icon: Users, title: t.studentCorner.clubsSocieties, desc: t.studentCorner.clubsDesc, link: "/students#clubs" },
    { icon: BookOpen, title: t.studentCorner.placements, desc: t.studentCorner.placementsDesc, link: "/students#placements" },
    { icon: Calendar, title: t.studentCorner.eventsFests, desc: t.studentCorner.eventsDesc, link: "/students#events" },
  ];

  return (
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.studentCorner.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.studentCorner.sectionTitle}</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentItems.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link to={item.link} className="block bg-card p-6 rounded-xl border border-border hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all group h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                    <span className="text-xs font-semibold text-primary group-hover:text-gold flex items-center gap-1 transition-colors">
                  {t.studentCorner.explore} <ArrowRight className="w-3 h-3" />
                </span>
                  </Link>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default StudentCorner;
