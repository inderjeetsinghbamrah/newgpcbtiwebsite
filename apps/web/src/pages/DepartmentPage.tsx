import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { getDepartmentById } from "@/data/departments";
import { motion } from "framer-motion";
import {
    Mail, Phone, GraduationCap, Wrench, Target, BookOpen,
    FlaskConical, MessageSquareQuote, Download, CheckCircle,
    Star, Users, Clock, ChevronRight
} from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DepartmentPage = () => {
    const { id } = useParams<{ id: string }>();
    const dept = getDepartmentById(id || "");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!dept) {
        return (
            <Layout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Department Not Found</h2>
                        <Link to="/courses" className="text-primary hover:underline">← Back to Courses</Link>
                    </div>
                </div>
            </Layout>
        );
    }

    const hod = dept.faculty.find((f) => f.isHod);

    return (
        <Layout>
            <PageBanner
                title={dept.title}
                subtitle={`${dept.icon} ${dept.segment === "pharmacy" ? "Diploma in Pharmacy" : dept.segment === "common" ? "Common Department • Engineering" : `Diploma in ${dept.title}`} • AICTE Approved`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Departments", href: "/courses" },
                    { label: dept.shortName },
                ]}
            />

            {/* Quick Stats */}
            <section className="py-8 bg-muted/40 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: <Clock className="w-5 h-5" />, label: "Duration", value: dept.duration },
                            { icon: <Users className="w-5 h-5" />, label: "Intake", value: dept.seats > 0 ? `${dept.seats} Seats` : "All Branches" },
                            { icon: <GraduationCap className="w-5 h-5" />, label: "Established", value: dept.established },
                            { icon: <Star className="w-5 h-5" />, label: "Program", value: "Diploma" },
                        ].map((s) => (
                            <div key={s.label} className="flex items-center gap-3 bg-card rounded-lg border border-border p-4">
                                <div className="text-primary">{s.icon}</div>
                                <div>
                                    <p className="text-xs text-muted-foreground">{s.label}</p>
                                    <p className="text-sm font-semibold text-foreground">{s.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-14 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeading icon={<BookOpen />} title="Department Introduction" />
                        <p className="text-muted-foreground leading-relaxed text-base">{dept.introduction}</p>
                    </motion.div>
                </div>
            </section>

            {/* HOD's Message */}
            <section className="py-14 bg-muted/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeading icon={<MessageSquareQuote />} title="HOD's Message" />
                        <div className="bg-card rounded-xl border border-border p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-primary/40 rounded-l-xl" />
                            <div className="pl-4">
                                <p className="text-muted-foreground leading-relaxed italic text-base">"{dept.hodMessage}"</p>
                                {hod && (
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                            {hod.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">{hod.name}</p>
                                            <p className="text-xs text-muted-foreground">{hod.designation}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Features & Key Skills */}
            <section className="py-14 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-10">
                        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <SectionHeading icon={<Star />} title="Key Features" />
                            <ul className="space-y-3">
                                {dept.keyFeatures.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <SectionHeading icon={<Wrench />} title="Key Skills" />
                            <div className="flex flex-wrap gap-2">
                                {dept.keySkills.map((s, i) => (
                                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                    {s}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Program Outcomes */}
            <section className="py-14 bg-muted/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeading icon={<Target />} title="Program Outcomes" />
                        <div className="grid sm:grid-cols-2 gap-4">
                            {dept.programOutcomes.map((po, i) => (
                                <div key={i} className="bg-card rounded-lg border border-border p-4 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{po}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Faculty Details */}
            <section className="py-14 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeading icon={<Users />} title="Faculty Members" />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dept.faculty.map((f, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {/* Photo placeholder */}
                                    <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                                        <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-primary text-2xl font-bold">
                                            {f.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                        </div>
                                        {f.isHod && (
                                            <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                        HOD
                      </span>
                                        )}
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <h4 className="font-serif font-bold text-foreground">{f.name}</h4>
                                        <p className="text-xs text-primary font-medium">{f.designation}</p>
                                        <div className="space-y-1.5 text-xs text-muted-foreground">
                                            <p><span className="font-medium text-foreground/70">Qualification:</span> {f.qualification}</p>
                                            <p><span className="font-medium text-foreground/70">Interest:</span> {f.areaOfInterest}</p>
                                            <div className="flex items-center gap-1.5 pt-1">
                                                <Mail className="w-3 h-3" />
                                                <a href={`mailto:${f.email}`} className="hover:text-primary transition-colors truncate">{f.email}</a>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Phone className="w-3 h-3" />
                                                <span>{f.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Labs */}
            <section className="py-14 bg-muted/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeading icon={<FlaskConical />} title="Laboratories" />
                        <div className="space-y-4">
                            {dept.labs.map((lab, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <FlaskConical className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-serif font-bold text-foreground">{lab.name}</h4>
                                            <p className="text-sm text-muted-foreground mt-1">{lab.description}</p>
                                            <div className="flex flex-wrap gap-1.5 mt-3">
                                                {lab.equipment.map((eq, j) => (
                                                    <span key={j} className="text-[11px] bg-muted px-2 py-0.5 rounded text-muted-foreground">
                            {eq}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Syllabus Links */}
            <section className="py-14 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeading icon={<Download />} title="Syllabus & Curriculum" />
                        <div className="grid sm:grid-cols-3 gap-4">
                            {dept.syllabusLinks.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-card rounded-xl border border-border p-5 flex items-center justify-between hover:border-primary/40 hover:shadow-sm transition-all"
                                >
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">{s.batch}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Download Syllabus PDF</p>
                                    </div>
                                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-primary/5 border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">Interested in {dept.title}?</h3>
                    <p className="text-sm text-muted-foreground mb-5">Apply now for the upcoming session or contact us for more information.</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <Link
                            to="/admissions"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            Apply Now <ChevronRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                        >
                            Contact Department
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

const SectionHeading = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
        <h2 className="text-2xl font-serif font-bold text-foreground">{title}</h2>
    </div>
);

export default DepartmentPage;
