import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { FileText, Download, ExternalLink, CheckCircle, Calendar, Shield } from "lucide-react";

const affiliationBodies = {
    aicte: {
        name: "All India Council for Technical Education (AICTE)",
        short: "AICTE",
        description: "AICTE is the statutory body responsible for proper planning and coordinated development of technical education in India. GPC Bathinda has been continuously approved by AICTE since its establishment.",
        logo: "🏛️",
        status: "Approved",
        validTill: "2025-26",
        highlights: [
            "Extension of Approval (EOA) granted every academic year",
            "Compliance with AICTE norms for infrastructure & faculty",
            "Mandatory Disclosure updated annually",
            "All programs offered with AICTE-approved intake",
        ],
        letters: [
            { title: "AICTE Approval Letter 2024-25", date: "April 2024", type: "PDF" },
            { title: "AICTE EOA Letter 2023-24", date: "May 2023", type: "PDF" },
            { title: "AICTE EOA Letter 2022-23", date: "April 2022", type: "PDF" },
        ],
        circulars: [
            { title: "Revised AICTE Approval Process Handbook 2024-25", date: "Jan 2024" },
            { title: "AICTE Guidelines on Mandatory Disclosure", date: "Mar 2024" },
            { title: "AICTE Notification on Faculty Qualifications", date: "Nov 2023" },
        ],
    },
    pci: {
        name: "Pharmacy Council of India (PCI)",
        short: "PCI",
        description: "The Pharmacy Council of India is a statutory body governing pharmacy education in India. The D.Pharmacy program at GPC Bathinda is approved by PCI.",
        logo: "💊",
        status: "Approved",
        validTill: "2025-26",
        highlights: [
            "D.Pharmacy program approved with intake of 60 students",
            "Compliance with PCI infrastructure requirements",
            "Qualified pharmacist faculty as per PCI norms",
            "Well-equipped pharmacy lab and drug store",
        ],
        letters: [
            { title: "PCI Approval Letter 2024-25", date: "June 2024", type: "PDF" },
            { title: "PCI Renewal Letter 2023-24", date: "July 2023", type: "PDF" },
        ],
        circulars: [
            { title: "PCI Revised Syllabus Notification", date: "Feb 2024" },
            { title: "PCI Guidelines on Lab Infrastructure", date: "Aug 2023" },
        ],
    },
    coa: {
        name: "Council of Architecture (COA)",
        short: "COA",
        description: "The Council of Architecture regulates the education and practice of architecture in India. The Architectural Assistantship program at GPC Bathinda is recognized by COA.",
        logo: "🏗️",
        status: "Recognized",
        validTill: "2025-26",
        highlights: [
            "Architectural Assistantship program with intake of 40",
            "Design studios meeting COA specifications",
            "Faculty with registered architect credentials",
            "Regular inspection and compliance verification",
        ],
        letters: [
            { title: "COA Recognition Letter 2024-25", date: "May 2024", type: "PDF" },
            { title: "COA Recognition Letter 2023-24", date: "June 2023", type: "PDF" },
        ],
        circulars: [
            { title: "COA Updated Minimum Standards", date: "Jan 2024" },
            { title: "COA Circular on Studio Requirements", date: "Sep 2023" },
        ],
    },
};

type BodyKey = keyof typeof affiliationBodies;

const Affiliations = () => {
    const { body } = useParams<{ body: string }>();
    const data = affiliationBodies[(body as BodyKey) || "aicte"];

    if (!data) {
        return (
            <Layout>
                <PageBanner
                    title="Affiliations"
                    subtitle="Select an affiliation body to view details."
                    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Affiliations" }]}
                />
                <section className="py-20 text-center">
                    <p className="text-muted-foreground">Please select a valid affiliation body.</p>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageBanner
                title={data.short}
                subtitle={data.name}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Affiliations" }, { label: data.short }]}
            />

            {/* Status Banner */}
            <section className="py-6 bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <strong>Status:</strong> <span className="text-primary font-semibold">{data.status}</span>
            </span>
                        <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <strong>Valid Till:</strong> {data.validTill}
            </span>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="bg-card rounded-xl border border-border p-8">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">{data.logo}</span>
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-foreground mb-3">{data.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Highlights */}
            <section className="py-12 bg-muted/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-foreground font-serif">Key Highlights</h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {data.highlights.map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border"
                            >
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <p className="text-sm text-foreground">{h}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approval/Affiliation Letters */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Official Documents</span>
                        <h2 className="text-2xl font-bold text-foreground mt-2 mb-4 font-serif">Approval / Affiliation Letters</h2>
                        <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
                    </motion.div>

                    <div className="space-y-3">
                        {data.letters.map((letter, i) => (
                            <motion.a
                                key={letter.title}
                                href="#"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <Download className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground">{letter.title}</p>
                                    <p className="text-xs text-muted-foreground">{letter.date}</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Circulars */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Notifications</span>
                        <h2 className="text-2xl font-bold text-foreground mt-2 mb-4 font-serif">Circulars & Guidelines</h2>
                        <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
                    </motion.div>

                    <div className="space-y-3">
                        {data.circulars.map((c, i) => (
                            <motion.div
                                key={c.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border"
                            >
                                <FileText className="w-5 h-5 text-accent shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground">{c.title}</p>
                                    <p className="text-xs text-muted-foreground">{c.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Affiliations;
