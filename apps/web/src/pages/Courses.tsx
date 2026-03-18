import { useState } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Clock, Users, GraduationCap, BookOpen, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const courses = [
  {
    id: "cse",
    title: "Computer Engineering",
    icon: "💻",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    hod: "Er. Rajesh Kumar",
    eligibility: "10th Pass with Science & Mathematics (min 35%)",
    desc: "The Computer Engineering department offers a comprehensive diploma program covering programming languages, database management, web development, networking, and software engineering. Students gain hands-on experience with modern technologies.",
    subjects: ["C/C++ Programming", "Data Structures", "Database Management", "Web Technologies", "Computer Networks", "Operating Systems", "Java Programming", "Software Engineering", "Cyber Security", "Cloud Computing"],
    labs: ["Programming Lab", "Network Lab", "Database Lab", "Web Development Lab", "Project Lab"],
    careers: ["Software Developer", "Web Developer", "Network Administrator", "System Analyst", "IT Support"],
  },
  {
    id: "mech",
    title: "Mechanical Engineering",
    icon: "⚙️",
    duration: "3 Years (6 Semesters)",
    seats: 120,
    hod: "Er. Sukhdev Singh",
    eligibility: "10th Pass with Science & Mathematics (min 35%)",
    desc: "One of the founding departments, Mechanical Engineering at GPC Bathinda provides strong foundations in manufacturing, thermodynamics, machine design, and industrial automation with extensive workshop training.",
    subjects: ["Engineering Mechanics", "Thermodynamics", "Manufacturing Technology", "Machine Design", "Fluid Mechanics", "Industrial Automation", "CAD/CAM", "Refrigeration & AC", "Workshop Technology", "Quality Control"],
    labs: ["Machine Shop", "Welding Shop", "CAD Lab", "Thermal Engineering Lab", "Material Testing Lab"],
    careers: ["Design Engineer", "Production Engineer", "Quality Inspector", "Maintenance Engineer", "CAD Designer"],
  },
  {
    id: "eee",
    title: "Electrical Engineering",
    icon: "⚡",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    hod: "Er. Gurpreet Kaur",
    eligibility: "10th Pass with Science & Mathematics (min 35%)",
    desc: "The Electrical Engineering department equips students with knowledge of power systems, electrical machines, control systems, and renewable energy technologies.",
    subjects: ["Electrical Machines", "Power Systems", "Control Systems", "Power Electronics", "Electrical Measurements", "Switchgear & Protection", "Renewable Energy", "PLC & SCADA", "Wiring & Estimation", "Industrial Drives"],
    labs: ["Electrical Machines Lab", "Power Electronics Lab", "Control Systems Lab", "Wiring Lab", "Simulation Lab"],
    careers: ["Electrical Supervisor", "Power Plant Engineer", "Maintenance Engineer", "Energy Auditor", "Wireman Contractor"],
  },
  {
    id: "ece",
    title: "Electronics & Communication",
    icon: "📡",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    hod: "Er. Manpreet Singh",
    eligibility: "10th Pass with Science & Mathematics (min 35%)",
    desc: "This department focuses on analog and digital electronics, communication systems, microprocessors, embedded systems, and modern telecommunication technologies.",
    subjects: ["Analog Electronics", "Digital Electronics", "Communication Systems", "Microprocessors", "Embedded Systems", "Signal Processing", "VLSI Design", "Antenna & Wave Propagation", "Optical Communication", "IoT"],
    labs: ["Analog Lab", "Digital Lab", "Communication Lab", "Microprocessor Lab", "PCB Design Lab"],
    careers: ["Electronics Technician", "Telecom Engineer", "Embedded Developer", "PCB Designer", "Service Engineer"],
  },
  {
    id: "civil",
    title: "Civil Engineering",
    icon: "🏗️",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    hod: "Er. Harjinder Singh",
    eligibility: "10th Pass with Science & Mathematics (min 35%)",
    desc: "The Civil Engineering department covers structural engineering, surveying, building construction, transportation, and environmental engineering with extensive field work.",
    subjects: ["Surveying", "Building Construction", "Structural Analysis", "Concrete Technology", "Soil Mechanics", "Transportation Engineering", "Water Supply & Sanitation", "Estimating & Costing", "AutoCAD", "Environmental Engineering"],
    labs: ["Survey Lab", "Soil Mechanics Lab", "Concrete Lab", "Material Testing Lab", "CAD Lab"],
    careers: ["Site Supervisor", "Quantity Surveyor", "Draftsman", "Building Inspector", "Construction Manager"],
  },
  {
    id: "chem",
    title: "Chemical Engineering",
    icon: "🧪",
    duration: "3 Years (6 Semesters)",
    seats: 40,
    hod: "Er. Navdeep Kaur",
    eligibility: "10th Pass with Science & Mathematics (min 35%)",
    desc: "The Chemical Engineering department provides training in chemical processes, plant design, environmental engineering, and petrochemical technologies.",
    subjects: ["Chemical Process Calculations", "Fluid Mechanics", "Heat Transfer", "Mass Transfer", "Chemical Reaction Engineering", "Process Control", "Environmental Engineering", "Petrochemical Technology", "Plant Design", "Industrial Safety"],
    labs: ["Chemistry Lab", "Process Control Lab", "Environmental Lab", "Fluid Mechanics Lab", "Unit Operations Lab"],
    careers: ["Process Technician", "Lab Technician", "Quality Analyst", "Plant Operator", "Environmental Officer"],
  },
];

const Courses = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Layout>
      <PageBanner
        title="Courses & Programs"
        subtitle="AICTE-approved diploma programs designed to produce industry-ready professionals"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "🎓", value: "6", label: "Diploma Programs" },
              { icon: "👥", value: "400+", label: "Total Intake" },
              { icon: "📅", value: "3 Years", label: "Duration" },
              { icon: "✅", value: "AICTE", label: "Approved" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-card p-5 rounded-xl border border-border text-center shadow-sm">
                <span className="text-2xl">{s.icon}</span>
                <p className="text-2xl font-bold text-primary mt-2">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Course Cards */}
          <div id="departments" className="space-y-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => setExpanded(expanded === course.id ? null : course.id)}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{course.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-foreground">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{course.desc}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.seats} Seats</span>
                        <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />Diploma</span>
                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />HOD: {course.hod}</span>
                      </div>
                    </div>
                    <div className="shrink-0 text-muted-foreground">
                      {expanded === course.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {expanded === course.id && (
                  <div className="border-t border-border px-6 py-6 bg-muted/20 animate-fade-in-up">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-serif font-bold text-foreground mb-3 flex items-center gap-2">
                          <span className="text-gold">📋</span> Eligibility
                        </h4>
                        <p className="text-sm text-muted-foreground">{course.eligibility}</p>
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-foreground mb-3 flex items-center gap-2">
                          <span className="text-gold">📖</span> Key Subjects
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {course.subjects.map((s) => (
                            <span key={s} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-foreground mb-3 flex items-center gap-2">
                          <span className="text-gold">🔬</span> Laboratories
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {course.labs.map((l) => <li key={l} className="flex items-center gap-1"><ArrowRight className="w-3 h-3 text-gold" />{l}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-serif font-bold text-foreground mb-3 flex items-center gap-2">
                        <span className="text-gold">💼</span> Career Opportunities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.careers.map((c) => (
                          <span key={c} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Academic Structure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Curriculum Framework</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { sem: "Semester 1-2", focus: "Foundation", desc: "Mathematics, Physics, Chemistry, English, Engineering Drawing, Workshop Practice, Computer Fundamentals" },
              { sem: "Semester 3-4", focus: "Core Studies", desc: "Department-specific core subjects, laboratory practicals, industrial visits, and mini projects" },
              { sem: "Semester 5", focus: "Advanced & Electives", desc: "Advanced subjects, elective courses, major project work, and industry interaction seminars" },
              { sem: "Semester 6", focus: "Project & Training", desc: "Major project, industrial training (6-8 weeks), seminar presentation, and comprehensive viva" },
            ].map((s, i) => (
              <motion.div key={s.sem} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <span className="text-xs font-semibold text-gold uppercase">{s.focus}</span>
                <h4 className="font-serif font-bold text-foreground mt-1 mb-2">{s.sem}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
