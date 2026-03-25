import { motion } from "framer-motion";
import { Shield, Phone, Mail, FileText, ExternalLink, AlertTriangle, Users, Scale, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const AntiRagging = () => {
    const { t } = useLanguage();

    const guidelines = [
        { icon: AlertTriangle, title: t.antiRagging.guideline1Title, desc: t.antiRagging.guideline1Desc },
        { icon: Scale, title: t.antiRagging.guideline2Title, desc: t.antiRagging.guideline2Desc },
        { icon: Users, title: t.antiRagging.guideline3Title, desc: t.antiRagging.guideline3Desc },
        { icon: Shield, title: t.antiRagging.guideline4Title, desc: t.antiRagging.guideline4Desc },
    ];

    const circulars = [
        { title: t.antiRagging.circular1, date: "2025-07-15" },
        { title: t.antiRagging.circular2, date: "2025-06-01" },
        { title: t.antiRagging.circular3, date: "2025-03-20" },
        { title: t.antiRagging.circular4, date: "2024-08-10" },
    ];

    const committeeMembers = [
        { name: t.antiRagging.member1Name, role: t.antiRagging.member1Role, phone: "+91-164-2240112" },
        { name: t.antiRagging.member2Name, role: t.antiRagging.member2Role, phone: "+91-98765-43210" },
        { name: t.antiRagging.member3Name, role: t.antiRagging.member3Role, phone: "+91-98765-43211" },
        { name: t.antiRagging.member4Name, role: t.antiRagging.member4Role, phone: "+91-98765-43212" },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Topbar />
            <Navbar />
            <main className="flex-1">
                <PageBanner title={t.antiRagging.pageTitle} />

                {/* Emergency Helpline Banner */}
                <section className="bg-destructive/10 border-b-2 border-destructive/30">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse">
                                    <Phone className="w-6 h-6 text-destructive" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-destructive uppercase tracking-wider">{t.antiRagging.tollFreeLabel}</p>
                                    <a href="tel:18001805522" className="text-2xl font-bold text-destructive hover:underline">1800-180-5522</a>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-10 bg-destructive/30" />
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-destructive" />
                                <a href="mailto:helpline@antiragging.in" className="text-sm font-semibold text-destructive hover:underline">helpline@antiragging.in</a>
                            </div>
                            <div className="hidden md:block w-px h-10 bg-destructive/30" />
                            <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                                <ExternalLink className="w-4 h-4" /> {t.antiRagging.portalLink}
                            </a>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.antiRagging.introTag}</span>
                            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">{t.antiRagging.introTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mb-6" />
                            <p className="text-muted-foreground leading-relaxed">{t.antiRagging.introPara1}</p>
                            <p className="text-muted-foreground leading-relaxed mt-3">{t.antiRagging.introPara2}</p>
                        </motion.div>
                    </div>
                </section>

                {/* Guidelines */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.antiRagging.guidelinesTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {guidelines.map((g, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                                        <g.icon className="w-6 h-6 text-destructive" />
                                    </div>
                                    <h4 className="font-serif font-bold text-foreground mb-2">{g.title}</h4>
                                    <p className="text-xs text-muted-foreground">{g.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Anti-Ragging Committee */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.antiRagging.committeeTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {committeeMembers.map((m, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-5 rounded-xl border border-border flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">{m.name}</p>
                                        <p className="text-xs text-muted-foreground">{m.role}</p>
                                        <a href={`tel:${m.phone}`} className="text-xs text-primary hover:underline">{m.phone}</a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Circulars & Downloads */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.antiRagging.circularsTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="space-y-3">
                            {circulars.map((c, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-4 rounded-lg border border-border flex items-center justify-between hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-5 h-5 text-gold shrink-0" />
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">{c.title}</p>
                                            <p className="text-xs text-muted-foreground">{c.date}</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-gold transition-colors">
                                        <Download className="w-4 h-4" /> PDF
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Affidavit & Forms */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-2xl font-bold text-foreground font-serif mb-4">{t.antiRagging.affidavitTitle}</h2>
                            <p className="text-muted-foreground text-sm mb-6">{t.antiRagging.affidavitDesc}</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="https://www.antiragging.in/affidavit_registration_main_page.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                                    <ExternalLink className="w-4 h-4" /> {t.antiRagging.fillAffidavit}
                                </a>
                                <a href="https://www.ugc.gov.in/pdfnews/7203627_UGC-Regulations-on-Curbing-the-Menace-of-Ragging-in-HEIs-2009.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-md transition-all">
                                    <Download className="w-4 h-4" /> {t.antiRagging.ugcRegulations}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AntiRagging;
