import { motion } from "framer-motion";
import { ExternalLink, Globe, BookOpen, GraduationCap, Briefcase, FileText, Shield, Award, Building2, Users } from "lucide-react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const usefulLinkGroups = [
    {
        title: "Regulatory & Affiliating Bodies",
        icon: Building2,
        links: [
            { name: "AICTE - All India Council for Technical Education", url: "https://www.aicte-india.org" },
            { name: "PSBTE - Punjab State Board of Technical Education", url: "https://www.psbte.gov.in" },
            { name: "DTE Punjab - Dept. of Technical Education", url: "https://www.dtepunjab.gov.in" },
            { name: "UGC - University Grants Commission", url: "https://www.ugc.gov.in" },
            { name: "PCI - Pharmacy Council of India", url: "https://www.pci.nic.in" },
            { name: "COA - Council of Architecture", url: "https://www.coa.gov.in" },
        ],
    },
    {
        title: "Government Portals",
        icon: Globe,
        links: [
            { name: "Government of Punjab", url: "https://punjab.gov.in" },
            { name: "Government of India", url: "https://www.india.gov.in" },
            { name: "Ministry of Education", url: "https://www.education.gov.in" },
            { name: "Digital India", url: "https://www.digitalindia.gov.in" },
            { name: "National Portal of India", url: "https://www.india.gov.in" },
        ],
    },
    {
        title: "Scholarships & Financial Aid",
        icon: Award,
        links: [
            { name: "National Scholarship Portal", url: "https://scholarships.gov.in" },
            { name: "Post Matric Scholarship (SC/ST)", url: "https://scholarships.gov.in" },
            { name: "Punjab Scholarship Portal", url: "https://punjabscholarships.gov.in" },
            { name: "AICTE Pragati & Saksham Scholarships", url: "https://www.aicte-india.org/schemes/students-development-schemes" },
        ],
    },
    {
        title: "Examination & Results",
        icon: FileText,
        links: [
            { name: "PSBTE Results", url: "https://www.psbte.gov.in" },
            { name: "PSBTE Date Sheet", url: "https://www.psbte.gov.in" },
            { name: "PSBTE Syllabus", url: "https://www.psbte.gov.in" },
            { name: "Diploma Admission Portal", url: "https://www.psbte.gov.in" },
        ],
    },
    {
        title: "E-Learning & Resources",
        icon: BookOpen,
        links: [
            { name: "NPTEL - Online Courses", url: "https://nptel.ac.in" },
            { name: "SWAYAM - Free Online Education", url: "https://swayam.gov.in" },
            { name: "Spoken Tutorial (IIT Bombay)", url: "https://spoken-tutorial.org" },
            { name: "e-PG Pathshala", url: "https://epgp.inflibnet.ac.in" },
            { name: "National Digital Library", url: "https://ndl.iitkgp.ac.in" },
            { name: "DELNET - Library Network", url: "https://delnet.in" },
        ],
    },
    {
        title: "Career & Placement",
        icon: Briefcase,
        links: [
            { name: "National Career Service Portal", url: "https://www.ncs.gov.in" },
            { name: "Skill India", url: "https://www.skillindia.gov.in" },
            { name: "Punjab Rojgar Portal", url: "https://punjabrojgar.gov.in" },
            { name: "Apprenticeship India", url: "https://www.apprenticeshipindia.gov.in" },
        ],
    },
    {
        title: "Student Safety & Welfare",
        icon: Shield,
        links: [
            { name: "Anti-Ragging Portal (UGC)", url: "https://www.antiragging.in" },
            { name: "Women Helpline", url: "https://www.ncw.nic.in" },
            { name: "Cyber Crime Portal", url: "https://cybercrime.gov.in" },
            { name: "Right to Information", url: "https://rtionline.gov.in" },
        ],
    },
    {
        title: "Higher Education & Competitive Exams",
        icon: GraduationCap,
        links: [
            { name: "IKG Punjab Technical University", url: "https://www.ptu.ac.in" },
            { name: "GATE Exam", url: "https://gate2026.iisc.ac.in" },
            { name: "LEET (Lateral Entry)", url: "https://www.ptu.ac.in" },
            { name: "JEE Main", url: "https://jeemain.nta.nic.in" },
        ],
    },
];

const UsefulLinks = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Topbar />
            <Navbar />
            <main className="flex-1">
                <PageBanner title={t.usefulLinks?.pageTitle || "Useful Links"} />

                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.usefulLinks?.tag || "Quick Access"}</span>
                            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">{t.usefulLinks?.title || "Important Links & Resources"}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mb-4" />
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">{t.usefulLinks?.desc || "Access important government portals, regulatory bodies, scholarship platforms, e-learning resources, and career portals — all in one place."}</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {usefulLinkGroups.map((group, gi) => (
                                <motion.div key={gi} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.05 }} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
                                    <div className="bg-primary/5 px-5 py-3 flex items-center gap-3 border-b border-border">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <group.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <h3 className="font-serif font-bold text-foreground text-sm">{group.title}</h3>
                                    </div>
                                    <ul className="p-4 space-y-1.5">
                                        {group.links.map((link, li) => (
                                            <li key={li}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors group/link">
                                                    <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover/link:opacity-100 transition-opacity" />
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default UsefulLinks;
