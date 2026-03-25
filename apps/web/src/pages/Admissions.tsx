import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Calendar, IndianRupee, Award, ArrowRight } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "", father: "", email: "", phone: "", dob: "", category: "", course: "", tenthPercent: "", address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted", formData);
  };

  return (
      <Layout>
        <PageBanner
            title="Admissions"
            subtitle="Join Government Polytechnic College, Bathinda and shape your future in technical education"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
        />

        {/* Admission Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Step by Step</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Admission Process</h2>
              <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "01", icon: FileText, title: "Apply Online", desc: "Fill out the online application form with required details and documents." },
                { step: "02", icon: CheckCircle, title: "Counseling", desc: "Attend the counseling session conducted by Punjab State Board of Technical Education." },
                { step: "03", icon: Calendar, title: "Document Verification", desc: "Submit original documents for verification at the college." },
                { step: "04", icon: Award, title: "Admission Confirmed", desc: "Pay fees and collect your admission letter. Welcome to GPC!" },
              ].map((s, i) => (
                  <motion.div key={s.step} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-card p-6 rounded-xl border border-border shadow-sm text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                      {s.step}
                    </div>
                    <s.icon className="w-8 h-8 text-primary mx-auto mt-4 mb-3" />
                    <h4 className="font-serif font-bold text-foreground mb-1">{s.title}</h4>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility & Fee Structure */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                          className="bg-card p-8 rounded-xl border border-border shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Eligibility Criteria</h3>
                <div className="w-12 h-1 bg-gradient-gold rounded mb-6" />
                <ul className="space-y-3">
                  {[
                    "Passed 10th class (Matriculation) from a recognized board.",
                    "Minimum 35% aggregate marks in Science and Mathematics.",
                    "Relaxation in marks for SC/ST/OBC as per Punjab Government norms.",
                    "Age: No upper age limit for admission.",
                    "Lateral entry to 2nd year for ITI holders (10+2 or equivalent).",
                    "Domicile of Punjab preferred; open seats available for other states.",
                  ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                          className="bg-card p-8 rounded-xl border border-border shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Fee Structure</h3>
                <div className="w-12 h-1 bg-gradient-gold rounded mb-6" />
                <div className="space-y-3">
                  {[
                    { label: "Tuition Fee (per semester)", amount: "₹ 12,500" },
                    { label: "Development Fee", amount: "₹ 2,000" },
                    { label: "Library Fee", amount: "₹ 500" },
                    { label: "Laboratory Fee", amount: "₹ 1,500" },
                    { label: "Examination Fee", amount: "₹ 1,000" },
                    { label: "Hostel Fee (optional, per semester)", amount: "₹ 8,000" },
                  ].map((f) => (
                      <div key={f.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <span className="text-sm text-muted-foreground">{f.label}</span>
                        <span className="font-semibold text-foreground flex items-center gap-1">
                      {f.amount}
                    </span>
                      </div>
                  ))}
                  <div className="flex items-center justify-between py-2 bg-primary/5 rounded-lg px-3 mt-2">
                    <span className="text-sm font-bold text-foreground">Approx. Total (per semester)</span>
                    <span className="font-bold text-primary flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" /> 17,500
                  </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">* Fees subject to revision as per Punjab Government notification.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Financial Support</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Scholarships</h2>
              <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Post Matric Scholarship", desc: "For SC/ST students by Govt. of India. Covers tuition and maintenance.", icon: "🏛️" },
                { title: "OBC Scholarship", desc: "For Other Backward Classes under central & state schemes.", icon: "📋" },
                { title: "Merit Scholarship", desc: "For top performers in each department based on semester results.", icon: "🏅" },
                { title: "Fee Waiver Scheme", desc: "Full fee waiver for economically weaker sections (EWS).", icon: "💰" },
                { title: "Girl Students Scholarship", desc: "Special scholarship encouraging women in technical education.", icon: "👩‍🎓" },
                { title: "Minority Scholarship", desc: "For students belonging to minority communities under UGC scheme.", icon: "📚" },
              ].map((s, i) => (
                  <motion.div key={s.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl">{s.icon}</span>
                    <h4 className="font-serif font-bold text-foreground mt-3 mb-1">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Online Application Form</h2>
              <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
            </motion.div>

            <motion.form variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                         onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-border shadow-md">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", key: "name", type: "text", placeholder: "Enter full name" },
                  { label: "Father's Name", key: "father", type: "text", placeholder: "Enter father's name" },
                  { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
                  { label: "Phone Number", key: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { label: "Date of Birth", key: "dob", type: "date", placeholder: "" },
                  { label: "10th Percentage", key: "tenthPercent", type: "number", placeholder: "e.g., 75" },
                ].map((f) => (
                    <div key={f.key}>
                      <label className="text-sm font-medium text-foreground mb-1 block">{f.label}</label>
                      <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={formData[f.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          required
                      />
                    </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Category</label>
                  <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                  >
                    <option value="">Select Category</option>
                    <option>General</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>OBC</option>
                    <option>EWS</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Preferred Course</label>
                  <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                  >
                    <option value="">Select Course</option>
                    <option>Computer Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Electrical Engineering</option>
                    <option>Electronics & Communication</option>
                    <option>Civil Engineering</option>
                    <option>Chemical Engineering</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-foreground mb-1 block">Address</label>
                <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Enter your full address"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    required
                />
              </div>
              <button type="submit" className="mt-6 bg-gradient-gold text-accent-foreground px-8 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                Submit Application <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-muted-foreground mt-3">* All fields are mandatory. You will receive a confirmation on your email.</p>
            </motion.form>
          </div>
        </section>
      </Layout>
  );
};

export default Admissions;
