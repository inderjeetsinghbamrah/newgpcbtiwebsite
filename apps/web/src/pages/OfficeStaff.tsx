import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Mail, Phone, Users, Briefcase } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface StaffMember {
    name: string;
    designation: string;
    section: string;
    qualification: string;
    email: string;
    phone: string;
}

const officeStaff: StaffMember[] = [
    {
        name: "Sh. Ravinder Kumar",
        designation: "Superintendent",
        section: "Administration",
        qualification: "M.A., PGDCA",
        email: "admin@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Sukhwinder Singh",
        designation: "Senior Assistant",
        section: "Accounts",
        qualification: "B.Com",
        email: "accounts@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Smt. Paramjit Kaur",
        designation: "Junior Assistant",
        section: "Establishment",
        qualification: "B.A., PGDCA",
        email: "establishment@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Gurpreet Singh",
        designation: "Clerk",
        section: "Store / Purchase",
        qualification: "B.A.",
        email: "store@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Hardeep Singh",
        designation: "Clerk",
        section: "Student Section",
        qualification: "B.Com, PGDCA",
        email: "students@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Smt. Kulwinder Kaur",
        designation: "Steno-Typist",
        section: "Principal Office",
        qualification: "B.A., Stenography",
        email: "principal@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Balwinder Singh",
        designation: "Library Restorer",
        section: "Library",
        qualification: "B.Lib",
        email: "library@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Jaswinder Singh",
        designation: "Peon / Attendant",
        section: "General",
        qualification: "10th Pass",
        email: "admin@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
];

const OfficeStaff = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <PageBanner
                title="Office Staff"
                subtitle="Administrative & Support Staff • Government Polytechnic College, Bathinda"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Office Staff" },
                ]}
            />

            {/* Overview */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-foreground">Administrative Office</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            The administrative office of Government Polytechnic College, Bathinda ensures the smooth functioning of all academic and non-academic activities. Our dedicated office staff handles admissions, accounts, establishment, store management, student records, and day-to-day administrative operations of the institution.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* All Staff */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {officeStaff.map((staff, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xl font-bold">
                                        {staff.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                    </div>
                                </div>
                                <div className="p-4 space-y-2">
                                    <h4 className="font-serif font-bold text-foreground">{staff.name}</h4>
                                    <p className="text-xs text-primary font-medium">{staff.designation}</p>
                                    <p className="text-xs text-muted-foreground">
                                        <span className="font-medium text-foreground/70">Qualification:</span> {staff.qualification}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        <span className="font-medium text-foreground/70">Section:</span> {staff.section}
                                    </p>
                                    <div className="space-y-1.5 text-xs text-muted-foreground pt-1">
                                        <div className="flex items-center gap-1.5">
                                            <Mail className="w-3 h-3" />
                                            <a href={`mailto:${staff.email}`} className="hover:text-primary transition-colors truncate">
                                                {staff.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Phone className="w-3 h-3" />
                                            <span>{staff.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default OfficeStaff;
