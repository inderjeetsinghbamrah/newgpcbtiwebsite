import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, Building2, Users, GraduationCap, BookOpen, MapPin } from "lucide-react";

const disclosureData = [
    {
        category: "Institution Details",
        icon: Building2,
        items: [
            { label: "Name of the Institution", value: "Government Polytechnic College, Bathinda" },
            { label: "Address", value: "Bathinda, Punjab - 151001, India" },
            { label: "Type of Institution", value: "Government" },
            { label: "Year of Establishment", value: "1985" },
            { label: "AICTE Permanent ID", value: "1-445678923" },
            { label: "AICTE Approval Status", value: "Approved (Extended)" },
        ],
    },
    {
        category: "Affiliation & Approvals",
        icon: FileText,
        items: [
            { label: "Affiliated To", value: "State Board of Technical Education & Industrial Training, Chandigarh" },
            { label: "AICTE Approved", value: "Yes" },
            { label: "PCI Approved (D.Pharmacy)", value: "Yes" },
            { label: "COA Approved (Architecture)", value: "Yes" },
        ],
    },
    {
        category: "Programs Offered",
        icon: GraduationCap,
        items: [
            { label: "Diploma in Civil Engineering", value: "Intake: 60" },
            { label: "Diploma in Computer Science & Engg.", value: "Intake: 60" },
            { label: "Diploma in Electrical Engineering", value: "Intake: 60" },
            { label: "Diploma in Electronics & Comm. Engg.", value: "Intake: 60" },
            { label: "Diploma in Mechanical Engineering", value: "Intake: 60" },
            { label: "Diploma in Mech. Engg. (Production)", value: "Intake: 60" },
            { label: "Diploma in Information Technology", value: "Intake: 60" },
            { label: "Diploma in Architectural Assistantship", value: "Intake: 40" },
            { label: "Diploma in Pharmacy", value: "Intake: 60" },
        ],
    },
    {
        category: "Faculty & Staff",
        icon: Users,
        items: [
            { label: "Total Teaching Faculty", value: "45+" },
            { label: "Faculty with Ph.D.", value: "8" },
            { label: "Faculty with M.Tech/M.E.", value: "25+" },
            { label: "Non-Teaching Staff", value: "30+" },
            { label: "Student-Faculty Ratio", value: "15:1" },
        ],
    },
    {
        category: "Infrastructure",
        icon: MapPin,
        items: [
            { label: "Total Campus Area", value: "25 Acres" },
            { label: "Built-Up Area", value: "15,000+ sq.m." },
            { label: "Library Books", value: "25,000+" },
            { label: "Computer Labs", value: "5 (200+ systems)" },
            { label: "Workshops", value: "8" },
            { label: "Smart Classrooms", value: "12" },
        ],
    },
];

const documents = [
    { label: "AICTE Approval Letter (2024-25)", type: "PDF" },
    { label: "AICTE Extension of Approval (EOA)", type: "PDF" },
    { label: "Mandatory Disclosure Format", type: "PDF" },
    { label: "Annual Report", type: "PDF" },
    { label: "Audited Statement of Accounts", type: "PDF" },
    { label: "Result Analysis", type: "PDF" },
];

const MandatoryDisclosure = () => {
    return (
        <Layout>
            <PageBanner
                title="AICTE Mandatory Disclosure"
                subtitle="Mandatory information disclosure as per AICTE norms for transparency and accountability."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Mandatory Disclosure" }]}
            />

            {/* Notice */}
            <section className="py-8 bg-accent/10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 justify-center text-center">
                        <FileText className="w-5 h-5 text-accent shrink-0" />
                        <p className="text-sm text-foreground">
                            This page is maintained as per <strong>AICTE Approval Process Handbook</strong> and is updated annually.
                        </p>
                    </div>
                </div>
            </section>

            {/* Disclosure Tables */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-5xl space-y-10">
                    {disclosureData.map((section, i) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-card rounded-xl border border-border overflow-hidden"
                        >
                            <div className="bg-secondary/5 px-6 py-4 flex items-center gap-3 border-b border-border">
                                <section.icon className="w-5 h-5 text-primary" />
                                <h3 className="font-serif font-bold text-foreground">{section.category}</h3>
                            </div>
                            <div className="divide-y divide-border">
                                {section.items.map((item) => (
                                    <div key={item.label} className="flex flex-col sm:flex-row sm:items-center px-6 py-3 gap-1 sm:gap-0">
                                        <span className="text-sm text-muted-foreground sm:w-1/2">{item.label}</span>
                                        <span className="text-sm font-medium text-foreground sm:w-1/2">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Downloadable Documents */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Downloads</span>
                        <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Disclosure Documents</h2>
                        <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {documents.map((doc, i) => (
                            <motion.a
                                key={doc.label}
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
                                    <p className="text-sm font-medium text-foreground truncate">{doc.label}</p>
                                    <p className="text-xs text-muted-foreground">{doc.type}</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MandatoryDisclosure;
