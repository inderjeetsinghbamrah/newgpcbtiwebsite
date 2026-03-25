import { motion } from "framer-motion";
import { BookOpen, Clock, Users, AlertTriangle, Award, CheckCircle, Smartphone, Shirt } from "lucide-react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const ruleIcons = [Clock, Shirt, Smartphone, Users, BookOpen, Award, AlertTriangle, CheckCircle];

const GeneralRules = () => {
    const { t } = useLanguage();

    const ruleCategories = [
        { title: t.generalRules.cat1Title, rules: [t.generalRules.cat1R1, t.generalRules.cat1R2, t.generalRules.cat1R3, t.generalRules.cat1R4] },
        { title: t.generalRules.cat2Title, rules: [t.generalRules.cat2R1, t.generalRules.cat2R2, t.generalRules.cat2R3] },
        { title: t.generalRules.cat3Title, rules: [t.generalRules.cat3R1, t.generalRules.cat3R2, t.generalRules.cat3R3] },
        { title: t.generalRules.cat4Title, rules: [t.generalRules.cat4R1, t.generalRules.cat4R2, t.generalRules.cat4R3] },
        { title: t.generalRules.cat5Title, rules: [t.generalRules.cat5R1, t.generalRules.cat5R2, t.generalRules.cat5R3] },
        { title: t.generalRules.cat6Title, rules: [t.generalRules.cat6R1, t.generalRules.cat6R2, t.generalRules.cat6R3] },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Topbar />
            <Navbar />
            <main className="flex-1">
                <PageBanner title={t.generalRules.pageTitle} />

                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.generalRules.introTag}</span>
                            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">{t.generalRules.introTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mb-6" />
                            <p className="text-muted-foreground leading-relaxed">{t.generalRules.introPara}</p>
                        </motion.div>

                        <div className="space-y-8">
                            {ruleCategories.map((cat, ci) => {
                                const Icon = ruleIcons[ci % ruleIcons.length];
                                return (
                                    <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.08 }} className="bg-card rounded-xl border border-border overflow-hidden">
                                        <div className="bg-primary/5 px-6 py-4 flex items-center gap-3 border-b border-border">
                                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-serif font-bold text-foreground">{cat.title}</h3>
                                        </div>
                                        <ul className="p-6 space-y-3">
                                            {cat.rules.map((rule, ri) => (
                                                <li key={ri} className="flex items-start gap-3">
                                                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{rule}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default GeneralRules;
