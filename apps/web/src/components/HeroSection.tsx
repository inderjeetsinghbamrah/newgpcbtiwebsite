import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-campus.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const newsItems = [
  "📢 PSBTE Admissions 2025-26 to Diploma Courses — Apply Now!",
  "📅 Academic Calendar 2025-26 (Odd Semester) Released",
  "🏆 Excellent Performance at PTIS TechFest 2024-25",
  "📝 Guidelines for Industrial Training in Final Year Courses",
  "🎓 Annual Prize Distribution Ceremony — April 04, 2025",
  "📢 AICTE Scholarship/Fellowship Schemes — Apply Now",
  "📋 Conduct of PSBTE May-June 2025 Examination",
  "🏅 Literary Club Organized Speech Competition — Women's Day",
  "🔬 Essay Writing Competition on 'ਯੁੱਧ ਨਸ਼ਿਆਂ ਵਿਰੁੱਧ'",
  "📣 Placement Portal and Mobile App — DTE Punjab",
  "🌐 PMS Facilitation Center — Dr. Rupinder Singh Chahal (93169-06633)",
];

const HeroSection = () => {
  const { t } = useLanguage();
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setOffsetY(window.scrollY * 0.4);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
              transform: `translateY(${offsetY}px)`,
              willChange: "transform",
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/40" />

        <div className="relative container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
            <span className="inline-block bg-accent/90 text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              {t.hero.badge}
            </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-4">
                {t.hero.title1}
                <br />
                <span className="text-gradient-gold">{t.hero.title2}</span>
              </h1>
              <p className="text-background/80 text-lg md:text-xl max-w-xl mb-8 font-sans leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                    to="/admissions"
                    className="bg-gradient-gold text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
                >
                  {t.hero.applyAdmission} <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                    to="/courses"
                    className="border border-background/30 text-background px-6 py-3 rounded-lg font-semibold text-sm hover:bg-background/10 transition-all"
                >
                  {t.hero.exploreCourses}
                </Link>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { number: "40+", label: t.hero.yearsExcellence },
                { number: "10000+", label: t.hero.alumniNetwork },
                { number: "9", label: t.hero.diplomaPrograms },
                { number: "100%", label: t.hero.placementRate },
              ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-gold">{stat.number}</p>
                    <p className="text-xs text-background/70">{stat.label}</p>
                  </div>
              ))}
            </motion.div>
          </div>

          <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full lg:w-[26rem] glass rounded-xl overflow-hidden"
          >
            <div className="bg-primary/90 text-primary-foreground px-4 py-2.5 flex items-center gap-2">
              <Bell className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold font-serif">{t.hero.newsTitle}</span>
            </div>
            <div className="h-72 overflow-hidden relative">
              <div className="animate-scroll-up py-2">
                {[...newsItems, ...newsItems].map((item, i) => (
                    <div
                        key={i}
                        className="px-4 py-2.5 text-xs text-foreground/90 border-b border-border/50 hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      {item}
                    </div>
                ))}
              </div>
            </div>
            <div className="px-4 py-2 bg-muted/50 text-center">
              <Link to="/news" className="text-xs text-primary font-medium hover:text-gold transition-colors">
                {t.hero.viewAllNotices}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default HeroSection;
