import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, IndianRupee, Award, Users, ShieldCheck, BookOpen, X, Phone, Mail, MapPin, Globe, Clock, FileText, Download, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

type ScholarshipDetail = {
  eligibility: string[];
  circulars: { title: string; date: string }[];
};

const scholarshipDetails: Record<string, ScholarshipDetail> = {
  "OBC Scholarship": {
    eligibility: [
      "Belong to Other Backward Class (OBC) category",
      "Family income below ₹3 lakh per annum",
      "Minimum 50% marks in previous qualifying exam",
      "Must be a domicile of Punjab",
      "Not availing any other scholarship simultaneously",
    ],
    circulars: [
      { title: "OBC Scholarship Guidelines 2025-26", date: "Jan 15, 2025" },
      { title: "Revised Income Ceiling Notification", date: "Dec 10, 2024" },
      { title: "List of Selected Candidates (2024-25)", date: "Nov 20, 2024" },
    ],
  },
  "Merit Scholarship": {
    eligibility: [
      "Secured 75% or above in previous semester exams",
      "No backlog in any subject",
      "Regular attendance (minimum 80%)",
      "Active participation in college activities preferred",
      "Open to all categories",
    ],
    circulars: [
      { title: "Merit Scholarship Criteria 2025-26", date: "Feb 1, 2025" },
      { title: "Merit List — Semester IV (2024-25)", date: "Jan 5, 2025" },
    ],
  },
  "EWS Fee Waiver": {
    eligibility: [
      "Family income below ₹1 lakh per annum",
      "Valid EWS certificate from competent authority",
      "Must be a resident of Punjab",
      "Enrolled in any diploma program at GPC Bathinda",
      "Renewal subject to passing all subjects each semester",
    ],
    circulars: [
      { title: "EWS Fee Waiver Scheme Details 2025-26", date: "Feb 10, 2025" },
      { title: "Application Proforma & Documents Required", date: "Jan 25, 2025" },
      { title: "Punjab Govt. EWS Notification", date: "Dec 1, 2024" },
    ],
  },
  "Girl Students Scholarship": {
    eligibility: [
      "Female students enrolled in any diploma program",
      "Family income below ₹4.5 lakh per annum",
      "Domicile of Punjab",
      "Minimum 60% attendance in previous semester",
      "Not availing Post Matric Scholarship or other state scholarships",
    ],
    circulars: [
      { title: "Punjab Govt. Girl Scholarship Circular 2025", date: "Feb 5, 2025" },
      { title: "Application Last Date Extended Notice", date: "Jan 20, 2025" },
    ],
  },
  "Minority Scholarship": {
    eligibility: [
      "Belong to a notified minority community (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)",
      "Family income below ₹2 lakh per annum",
      "Minimum 50% marks in previous qualifying exam",
      "Enrolled in a recognized technical institution",
      "Apply through National Scholarship Portal",
    ],
    circulars: [
      { title: "UGC Minority Scholarship Notification 2025-26", date: "Mar 1, 2025" },
      { title: "Revised Guidelines & FAQ", date: "Feb 15, 2025" },
      { title: "Selected Candidates List (2024-25)", date: "Dec 20, 2024" },
    ],
  },
};

const scholarships = [
  { icon: ShieldCheck, title: "Post Matric Scholarship", beneficiary: "SC/ST Students", benefit: "Full tuition + maintenance allowance", tag: "Govt. of India", hasModal: true },
  { icon: Users, title: "OBC Scholarship", beneficiary: "OBC Category", benefit: "Tuition fee reimbursement", tag: "Central Scheme" },
  { icon: Award, title: "Merit Scholarship", beneficiary: "Top Performers", benefit: "₹5,000 – ₹10,000 per year", tag: "Institute" },
  { icon: IndianRupee, title: "EWS Fee Waiver", beneficiary: "Economically Weaker", benefit: "100% fee waiver", tag: "State Govt." },
  { icon: GraduationCap, title: "Girl Students Scholarship", beneficiary: "Female Students", benefit: "Special financial assistance", tag: "Punjab Govt." },
  { icon: BookOpen, title: "Minority Scholarship", beneficiary: "Minority Communities", benefit: "Tuition + maintenance", tag: "UGC Scheme" },
];

const benefits = [
  "Free Wi-Fi campus for all students",
  "Subsidized hostel and mess facility",
  "Free bus service from Bathinda city",
  "Book bank facility for economically weaker students",
  "Industry-sponsored project grants",
  "Free access to online learning platforms",
];

const ScholarshipsSection = () => {
  const [showPmsModal, setShowPmsModal] = useState(false);
  const [activeScholarship, setActiveScholarship] = useState<string | null>(null);

  const handleCardClick = (title: string, hasModal?: boolean) => {
    if (hasModal) {
      setShowPmsModal(true);
    } else if (scholarshipDetails[title]) {
      setActiveScholarship(title);
    }
  };

  const activeDetail = activeScholarship ? scholarshipDetails[activeScholarship] : null;
  const activeScholarshipData = activeScholarship ? scholarships.find(s => s.title === activeScholarship) : null;

  return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Financial Support</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Scholarships & Benefits</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {scholarships.map((s, i) => (
                <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-card p-6 rounded-xl border border-border hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all group cursor-pointer"
                    onClick={() => handleCardClick(s.title, s.hasModal)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <s.icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded-full">{s.tag}</span>
                  </div>
                  <h4 className="font-serif font-bold text-foreground mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">For: {s.beneficiary}</p>
                  <p className="text-sm font-semibold text-primary">{s.benefit}</p>
                  <p className="text-[10px] text-gold mt-2 font-semibold uppercase tracking-wider">
                    {s.hasModal ? "Click for Nodal Officer Details →" : "Click for Eligibility & Circulars →"}
                  </p>
                </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">Additional Student Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    {b}
                  </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
              >
                View Full Scholarship Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* PMS Nodal Officer Modal */}
        <AnimatePresence>
          {showPmsModal && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
                  onClick={() => setShowPmsModal(false)}
              >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                    className="bg-card rounded-2xl border border-border shadow-2xl w-full max-w-lg overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="bg-primary p-6 relative">
                    <button
                        onClick={() => setShowPmsModal(false)}
                        className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-primary-foreground">Post Matric Scholarship</h3>
                        <p className="text-xs text-primary-foreground/70">Government of India — SC/ST Welfare</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-5">
                    {/* Nodal Officer */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">PMS Nodal Officer</h4>
                      <div className="bg-muted/50 rounded-xl p-4 space-y-2.5">
                        <p className="font-serif font-bold text-foreground">Er. Rajinder Singh</p>
                        <p className="text-xs text-muted-foreground">Lecturer, Department of Mechanical Engineering</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-3.5 h-3.5 text-primary" />
                          <a href="tel:+911642240112" className="hover:text-primary transition-colors">+91-164-2240112 (Ext. 205)</a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-3.5 h-3.5 text-primary" />
                          <a href="mailto:pms.gpcbti@gmail.com" className="hover:text-primary transition-colors">pms.gpcbti@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span>Room No. 12, Admin Block, GPC Bathinda</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          <span>Mon–Fri, 10:00 AM – 4:00 PM</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Info */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Key Information</h4>
                      <div className="space-y-2">
                        {[
                          "Apply online at scholarships.gov.in (National Scholarship Portal)",
                          "Income ceiling: ₹2.5 lakh per annum for SC/ST candidates",
                          "Covers: Tuition fee, maintenance allowance, book grant",
                          "Renewal: Maintain minimum 50% attendance & pass all subjects",
                          "Documents: Caste certificate, income certificate, Aadhaar, bank passbook",
                        ].map((info, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <FileText className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                              {info}
                            </div>
                        ))}
                      </div>
                    </div>

                    {/* Apply Link */}
                    <a
                        href="https://scholarships.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-gradient-gold text-accent-foreground py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <Globe className="w-4 h-4" /> Apply on National Scholarship Portal <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* Generic Scholarship Detail Modal */}
        <AnimatePresence>
          {activeScholarship && activeDetail && activeScholarshipData && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
                  onClick={() => setActiveScholarship(null)}
              >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                    className="bg-card rounded-2xl border border-border shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="bg-primary p-6 relative">
                    <button
                        onClick={() => setActiveScholarship(null)}
                        className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                        <activeScholarshipData.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-primary-foreground">{activeScholarship}</h3>
                        <p className="text-xs text-primary-foreground/70">{activeScholarshipData.tag} — {activeScholarshipData.beneficiary}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-5">
                    {/* Eligibility */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Eligibility Criteria</h4>
                      <div className="space-y-2">
                        {activeDetail.eligibility.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                              {item}
                            </div>
                        ))}
                      </div>
                    </div>

                    {/* Circulars */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Circulars & Notifications</h4>
                      <div className="space-y-2">
                        {activeDetail.circulars.map((c, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between bg-muted/50 rounded-lg p-3 hover:bg-muted transition-colors group/circ cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                  <FileText className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground leading-snug">{c.title}</p>
                                  <p className="text-[10px] text-muted-foreground">{c.date}</p>
                                </div>
                              </div>
                              <Download className="w-4 h-4 text-muted-foreground group-hover/circ:text-primary transition-colors shrink-0" />
                            </div>
                        ))}
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-2 italic">* PDF circulars will be available for download once uploaded by admin.</p>
                    </div>

                    {/* Benefit highlight */}
                    <div className="bg-gold/10 rounded-lg p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Benefit</p>
                      <p className="font-serif font-bold text-foreground">{activeScholarshipData.benefit}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
};

export default ScholarshipsSection;
