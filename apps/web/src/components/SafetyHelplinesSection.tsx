import { motion } from "framer-motion";
import { Phone, Shield, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SafetyHelplinesSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-8 bg-destructive/5 border-y border-destructive/20">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Anti-Ragging */}
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl border-2 border-destructive/20 p-5 flex items-start gap-4 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 animate-pulse">
                            <Shield className="w-6 h-6 text-destructive" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-destructive uppercase tracking-wider mb-1">{t.safetyHelplines.antiRaggingLabel}</p>
                            <a href="tel:18001805522" className="text-xl font-bold text-foreground hover:text-destructive transition-colors block">1800-180-5522</a>
                            <p className="text-xs text-muted-foreground mt-1">{t.safetyHelplines.antiRaggingNote}</p>
                            <Link to="/anti-ragging" className="text-xs font-semibold text-primary hover:text-gold transition-colors mt-2 inline-flex items-center gap-1">
                                {t.safetyHelplines.moreInfo} <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Women Helpdesk */}
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-xl border-2 border-accent/40 p-5 flex items-start gap-4 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 animate-pulse">
                            <Heart className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-accent-foreground uppercase tracking-wider mb-1">{t.safetyHelplines.womenHelpdeskLabel}</p>
                            <a href="tel:+911642240113" className="text-xl font-bold text-foreground hover:text-accent-foreground transition-colors block">+91-164-2240113</a>
                            <p className="text-xs text-muted-foreground mt-1">{t.safetyHelplines.womenHelpdeskContact}</p>
                            <p className="text-xs text-muted-foreground">{t.safetyHelplines.womenHelpdeskNote}</p>
                        </div>
                    </motion.div>

                    {/* College Emergency */}
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-card rounded-xl border-2 border-primary/20 p-5 flex items-start gap-4 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{t.safetyHelplines.collegeHelplineLabel}</p>
                            <a href="tel:+911642240112" className="text-xl font-bold text-foreground hover:text-primary transition-colors block">+91-164-2240112</a>
                            <p className="text-xs text-muted-foreground mt-1">{t.safetyHelplines.collegeHelplineNote}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SafetyHelplinesSection;
