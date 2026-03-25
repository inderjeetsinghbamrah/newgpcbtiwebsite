import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Mail, Phone, Wrench, Users, Target, Image } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface WorkshopStaff {
    name: string;
    designation: string;
    qualification: string;
    trade: string;
    email: string;
    phone: string;
    isIncharge?: boolean;
}

const workshopStaff: WorkshopStaff[] = [
    {
        name: "Sh. Jagtar Singh",
        designation: "Workshop Superintendent",
        qualification: "B.Tech (Mechanical)",
        trade: "Overall Workshop Management",
        email: "workshop@gpcbathinda.ac.in",
        phone: "0164-2246394",
        isIncharge: true,
    },
    {
        name: "Sh. Paramjeet Singh",
        designation: "Foreman (Fitting Shop)",
        qualification: "Diploma (Mechanical)",
        trade: "Fitting & Assembly",
        email: "workshop@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Sukhdev Singh",
        designation: "Foreman (Welding Shop)",
        qualification: "Diploma (Mechanical), ITI Welder",
        trade: "Arc & Gas Welding",
        email: "workshop@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Ranjit Singh",
        designation: "Foreman (Machine Shop)",
        qualification: "Diploma (Mechanical)",
        trade: "Lathe, Milling & Drilling",
        email: "workshop@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Mohinder Pal",
        designation: "Foreman (Carpentry Shop)",
        qualification: "ITI (Carpenter), Diploma",
        trade: "Wood Working & Carpentry",
        email: "workshop@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Harjinder Singh",
        designation: "Instructor (Smithy Shop)",
        qualification: "ITI (Fitter), Diploma",
        trade: "Blacksmithy & Forging",
        email: "workshop@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
    {
        name: "Sh. Kulwant Singh",
        designation: "Instructor (Electrical Shop)",
        qualification: "Diploma (Electrical)",
        trade: "Electrical Wiring & Installation",
        email: "workshop@gpcbathinda.ac.in",
        phone: "0164-2246394",
    },
];

const workshopSections = [
    {
        name: "Fitting Shop",
        description: "Students learn precision fitting, filing, drilling, tapping, and assembly of mechanical components. Equipped with bench vices, drilling machines, and precision measuring instruments.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    },
    {
        name: "Welding Shop",
        description: "Comprehensive training in arc welding, gas welding, brazing, and soldering. Includes modern MIG and TIG welding setups for advanced fabrication work.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    },
    {
        name: "Machine Shop",
        description: "Equipped with centre lathes, milling machines, drilling machines, shaping machines, and grinding machines for machining operations and precision manufacturing.",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop",
    },
    {
        name: "Carpentry Shop",
        description: "Training in wood working operations including planning, sawing, chiseling, and joint making. Students create wooden models and learn furniture construction techniques.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    },
    {
        name: "Smithy & Forging Shop",
        description: "Hands-on experience in blacksmithy operations — heating, bending, drawing, upsetting, and forging of metals using anvils, hammers, and furnaces.",
        image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&h=400&fit=crop",
    },
    {
        name: "Electrical Shop",
        description: "Practical training in domestic and industrial wiring, motor connections, transformer testing, and electrical installation practices.",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
    },
];

const Workshop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <PageBanner
                title="Workshop"
                subtitle="🔧 Central Workshop • Hands-on Practical Training for All Branches"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Departments", href: "/courses" },
                    { label: "Workshop" },
                ]}
            />

            {/* Role of Workshop */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Target className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-foreground">Role of the Workshop</h2>
                        </div>
                        <div className="bg-card rounded-xl border border-border p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-primary/40 rounded-l-xl" />
                            <div className="pl-4 space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    The Central Workshop of Government Polytechnic College, Bathinda plays a vital role in imparting practical skills to diploma students across all engineering branches. It provides foundational hands-on training in manufacturing processes, material handling, and fabrication techniques that complement theoretical classroom learning.
                                </p>
                                <p>
                                    Workshop practice is a compulsory component in the first year for all engineering diploma programs. Students rotate through various shops — Fitting, Welding, Machine, Carpentry, Smithy, and Electrical — gaining exposure to diverse trades and developing manual dexterity, safety awareness, and an understanding of industrial processes.
                                </p>
                                <p>
                                    The workshop also supports departmental projects, college maintenance work, and inter-college technical competitions. It serves as a bridge between academic theory and real-world engineering practice.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Workshop Sections with Images */}
            <section className="py-14 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Image className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-foreground">Workshop Sections</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {workshopSections.map((section, i) => (
                                <motion.div
                                    key={section.name}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={section.image}
                                            alt={section.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-serif font-bold text-foreground text-lg flex items-center gap-2">
                                            <Wrench className="w-4 h-4 text-primary" />
                                            {section.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{section.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Staff */}
            <section className="py-14 bg-muted/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Users className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-foreground">Workshop Staff</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {workshopStaff.map((staff, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                                        <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xl font-bold">
                                            {staff.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                        </div>
                                        {staff.isIncharge && (
                                            <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                        IN-CHARGE
                      </span>
                                        )}
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <h4 className="font-serif font-bold text-foreground">{staff.name}</h4>
                                        <p className="text-xs text-primary font-medium">{staff.designation}</p>
                                        <div className="space-y-1 text-xs text-muted-foreground">
                                            <p><span className="font-medium text-foreground/70">Qualification:</span> {staff.qualification}</p>
                                            <p><span className="font-medium text-foreground/70">Trade:</span> {staff.trade}</p>
                                        </div>
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
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Workshop;
