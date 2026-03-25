import { useState } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Mail, GraduationCap, BookOpen } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const departments = ["All", "Computer", "Mechanical", "Electrical", "Electronics", "Civil", "Chemical"];

const facultyData = [
  { name: "Er. Rajesh Kumar", designation: "HOD & Sr. Lecturer", dept: "Computer", qual: "M.Tech (CSE)", exp: "22 Years", email: "rajesh.cse@gpcbti.edu", specialization: "Database Systems, Web Tech" },
  { name: "Er. Simran Kaur", designation: "Lecturer", dept: "Computer", qual: "M.Tech (IT)", exp: "12 Years", email: "simran.cse@gpcbti.edu", specialization: "Programming, Data Structures" },
  { name: "Er. Vikram Joshi", designation: "Lecturer", dept: "Computer", qual: "MCA", exp: "10 Years", email: "vikram.cse@gpcbti.edu", specialization: "Networking, Cyber Security" },
  { name: "Er. Sukhdev Singh", designation: "HOD & Sr. Lecturer", dept: "Mechanical", qual: "M.Tech (Mech)", exp: "25 Years", email: "sukhdev.me@gpcbti.edu", specialization: "Manufacturing, CAD/CAM" },
  { name: "Er. Harpreet Kaur", designation: "Lecturer", dept: "Mechanical", qual: "M.Tech (Production)", exp: "15 Years", email: "harpreet.me@gpcbti.edu", specialization: "Thermodynamics, Fluid Mechanics" },
  { name: "Er. Amandeep Singh", designation: "Workshop Instructor", dept: "Mechanical", qual: "B.Tech", exp: "18 Years", email: "amandeep.me@gpcbti.edu", specialization: "Workshop Practice, Welding" },
  { name: "Er. Gurpreet Kaur", designation: "HOD & Sr. Lecturer", dept: "Electrical", qual: "M.Tech (Power Systems)", exp: "20 Years", email: "gurpreet.ee@gpcbti.edu", specialization: "Power Systems, Machines" },
  { name: "Er. Ranjit Singh", designation: "Lecturer", dept: "Electrical", qual: "M.Tech (Control)", exp: "14 Years", email: "ranjit.ee@gpcbti.edu", specialization: "Control Systems, PLC" },
  { name: "Er. Manpreet Singh", designation: "HOD & Sr. Lecturer", dept: "Electronics", qual: "M.Tech (VLSI)", exp: "19 Years", email: "manpreet.ece@gpcbti.edu", specialization: "VLSI, Embedded Systems" },
  { name: "Er. Pooja Rani", designation: "Lecturer", dept: "Electronics", qual: "M.Tech (Comm)", exp: "11 Years", email: "pooja.ece@gpcbti.edu", specialization: "Communication, Signal Processing" },
  { name: "Er. Harjinder Singh", designation: "HOD & Sr. Lecturer", dept: "Civil", qual: "M.Tech (Structures)", exp: "23 Years", email: "harjinder.ce@gpcbti.edu", specialization: "Structural Analysis, RCC" },
  { name: "Er. Navneet Kaur", designation: "Lecturer", dept: "Civil", qual: "M.Tech (Env.)", exp: "13 Years", email: "navneet.ce@gpcbti.edu", specialization: "Environmental Eng., Surveying" },
  { name: "Er. Navdeep Kaur", designation: "HOD & Sr. Lecturer", dept: "Chemical", qual: "M.Tech (Chemical)", exp: "16 Years", email: "navdeep.ch@gpcbti.edu", specialization: "Process Design, Petrochemicals" },
  { name: "Er. Deepak Sharma", designation: "Lecturer", dept: "Chemical", qual: "M.Tech (Env. Eng.)", exp: "9 Years", email: "deepak.ch@gpcbti.edu", specialization: "Environmental Eng., Safety" },
];

const Faculty = () => {
  const [activeDept, setActiveDept] = useState("All");

  const filtered = activeDept === "All" ? facultyData : facultyData.filter((f) => f.dept === activeDept);

  return (
      <Layout>
        <PageBanner
            title="Our Faculty"
            subtitle="Meet our experienced and dedicated faculty members committed to academic excellence"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Department Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {departments.map((d) => (
                  <button
                      key={d}
                      onClick={() => setActiveDept(d)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeDept === d
                              ? "bg-primary text-primary-foreground shadow-md"
                              : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                      }`}
                  >
                    {d === "All" ? "All Departments" : `${d} Eng.`}
                  </button>
              ))}
            </div>

            {/* Faculty Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((f, i) => (
                  <motion.div
                      key={f.name}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-card rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
                  >
                    <div className="bg-gradient-primary h-20 relative">
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-card flex items-center justify-center shadow-md">
                        <span className="text-2xl font-serif font-bold text-primary">{f.name.charAt(4)}</span>
                      </div>
                    </div>
                    <div className="pt-10 pb-6 px-5 text-center">
                      <h4 className="font-serif font-bold text-foreground text-sm">{f.name}</h4>
                      <p className="text-xs text-gold font-medium mt-0.5">{f.designation}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{f.dept} Engineering</p>

                      <div className="mt-4 space-y-2 text-left">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <GraduationCap className="w-3 h-3 text-gold shrink-0" />
                          <span>{f.qual} • {f.exp}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <BookOpen className="w-3 h-3 text-gold shrink-0" />
                          <span>{f.specialization}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Mail className="w-3 h-3 text-gold shrink-0" />
                          <span className="truncate">{f.email}</span>
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

export default Faculty;
