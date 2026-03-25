import { motion } from "framer-motion";
import { BookOpen, Trophy, Users, Calendar, ArrowRight, Newspaper, ShieldAlert, FileText, AlertTriangle, ExternalLink } from "lucide-react";
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

  const studentNews = [
    { date: t.studentCorner.news1Date, title: t.studentCorner.news1Title, tag: t.studentCorner.newsTagExam },
    { date: t.studentCorner.news2Date, title: t.studentCorner.news2Title, tag: t.studentCorner.newsTagPlacement },
    { date: t.studentCorner.news3Date, title: t.studentCorner.news3Title, tag: t.studentCorner.newsTagEvent },
    { date: t.studentCorner.news4Date, title: t.studentCorner.news4Title, tag: t.studentCorner.newsTagScholarship },
    { date: t.studentCorner.news5Date, title: t.studentCorner.news5Title, tag: t.studentCorner.newsTagSports },
  ];

  const cyberSafetyItems = [
    { icon: FileText, title: t.studentCorner.cyberCircular1, type: t.studentCorner.cyberTypeCircular, link: "https://gpcbathinda.ac.in/aicte_req/cybersecurity_measures" },
    { icon: ShieldAlert, title: t.studentCorner.cyberGuideline1, type: t.studentCorner.cyberTypeGuideline, link: "https://cybercrime.gov.in/Webform/CrimeCatDes.aspx" },
    { icon: AlertTriangle, title: t.studentCorner.cyberCircular2, type: t.studentCorner.cyberTypeCircular, link: "https://cybercrime.gov.in/Accept.aspx" },
    { icon: FileText, title: t.studentCorner.cyberGuideline2, type: t.studentCorner.cyberTypeGuideline, link: "https://cybercrime.gov.in/Webform/CyberVolunteerinstruction.aspx" },
  ];

  return (
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.studentCorner.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.studentCorner.sectionTitle}</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          {/* Quick Links Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

          {/* Student News & Cyber Safety */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Student News */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-5">
                <Newspaper className="w-5 h-5 text-gold" />
                <h3 className="font-serif font-bold text-lg text-foreground">{t.studentCorner.studentNewsTitle}</h3>
              </div>
              <div className="space-y-3">
                {studentNews.map((news, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <div className="text-center shrink-0 w-12">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gold">{news.date}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">{news.title}</p>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1 inline-block bg-muted px-2 py-0.5 rounded-full">{news.tag}</span>
                      </div>
                    </motion.div>
                ))}
              </div>
              <Link to="/news" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-gold mt-4 transition-colors">
                {t.studentCorner.viewAllNews} <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            {/* Cyber Safety & Awareness */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-5">
                <ShieldAlert className="w-5 h-5 text-destructive" />
                <h3 className="font-serif font-bold text-lg text-foreground">{t.studentCorner.cyberSafetyTitle}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5">{t.studentCorner.cyberSafetyDesc}</p>

              <div className="space-y-3 mb-5">
                {cyberSafetyItems.map((item, i) => (
                    <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-destructive/5 transition-colors cursor-pointer group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-destructive" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground leading-snug">{item.title}</p>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-destructive/70">{item.type}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-destructive transition-colors shrink-0" />
                    </motion.a>
                ))}
              </div>

              {/* Helpline Box */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-destructive mb-2">{t.studentCorner.cyberHelplineTitle}</h4>
                <div className="space-y-1.5">
                  <p className="text-sm text-foreground font-medium">📞 {t.studentCorner.cyberHelplinePhone}</p>
                  <p className="text-sm text-foreground font-medium">🌐 {t.studentCorner.cyberHelplineWebsite}</p>
                  <p className="text-xs text-muted-foreground">{t.studentCorner.cyberHelplineNote}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default StudentCorner;
