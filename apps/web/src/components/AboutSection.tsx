import { motion } from "framer-motion";
import principalImg from "@/assets/principal.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const { t } = useLanguage();

  return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img src={principalImg} alt="Principal" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                  <p className="text-background font-serif font-bold">{t.about.principalName}</p>
                  <p className="text-background/70 text-sm">{t.about.principalRole}</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.about.principalDesk}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.about.principalMessage}</h2>
              <div className="w-16 h-1 bg-gradient-gold rounded mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">{t.about.principalPara1}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.about.principalPara2}</p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-gold pl-4">{t.about.principalQuote}</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">🎯</span></div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{t.about.ourMission}</h3>
              <div className="w-12 h-1 bg-gradient-gold rounded mb-4" />
              <p className="text-muted-foreground leading-relaxed">{t.about.missionText}</p>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4"><span className="text-2xl">🔭</span></div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{t.about.ourVision}</h3>
              <div className="w-12 h-1 bg-gradient-gold rounded mb-4" />
              <p className="text-muted-foreground leading-relaxed">{t.about.visionText}</p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.about.since1985}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.about.ourHeritage}</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">{t.about.heritagePara1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.about.heritagePara2}</p>
          </motion.div>
        </div>
      </section>
  );
};

export default AboutSection;
