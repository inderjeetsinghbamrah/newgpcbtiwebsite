import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import aicteLogo from "@/assets/aicte-logo.png";
import psbteLogo from "@/assets/psbte-logo.png";
import dteLogo from "@/assets/dte-punjab-logo.png";

const affiliatingBodies = [
    { name: "PSBTE", fullName: "Punjab State Board of Technical Education & Industrial Training", logo: psbteLogo, url: "https://www.psbte.gov.in" },
    { name: "AICTE", fullName: "All India Council for Technical Education", logo: aicteLogo, url: "https://www.aicte-india.org" },
    { name: "DTE Punjab", fullName: "Department of Technical Education, Punjab", logo: dteLogo, url: "https://www.dtepunjab.gov.in" },
];

const AffiliatingBodiesSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-10 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.affiliatingBodies?.tag || "Affiliated With"}</span>
                    <h2 className="text-xl font-bold text-foreground mt-1 font-serif">{t.affiliatingBodies?.title || "Our Affiliating Bodies"}</h2>
                    <div className="w-12 h-1 bg-gradient-gold rounded mx-auto mt-2" />
                </motion.div>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {affiliatingBodies.map((body, i) => (
                        <motion.a
                            key={body.name}
                            href={body.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-card border border-border p-3 flex items-center justify-center group-hover:shadow-lg group-hover:border-gold/40 transition-all">
                                <img src={body.logo} alt={body.fullName} className="w-full h-full object-contain" loading="lazy" width={512} height={512} />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{body.name}</p>
                                <p className="text-[10px] text-muted-foreground max-w-[140px] leading-tight">{body.fullName}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AffiliatingBodiesSection;
