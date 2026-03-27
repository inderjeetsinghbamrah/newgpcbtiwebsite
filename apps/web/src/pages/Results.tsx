import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { ExternalLink, FileText, GraduationCap, Calendar, Search } from "lucide-react";

const resultLinks = [
  {
    title: "PSBTE Diploma Results",
    desc: "Punjab State Board of Technical Education & Industrial Training official result portal.",
    url: "https://www.psbte.gov.in",
    tag: "PSBTE",
  },
  {
    title: "Revaluation / Re-checking",
    desc: "Apply for revaluation or re-checking of answer sheets through the PSBTE portal.",
    url: "https://www.psbte.gov.in",
    tag: "Revaluation",
  },
  {
    title: "Examination Date Sheets",
    desc: "Download latest examination date sheets for all diploma programs.",
    url: "https://www.psbte.gov.in",
    tag: "Date Sheet",
  },
];

const recentResults = [
  { exam: "Diploma 6th Semester (May 2025)", status: "Declared", date: "June 15, 2025" },
  { exam: "Diploma 4th Semester (May 2025)", status: "Declared", date: "June 18, 2025" },
  { exam: "Diploma 2nd Semester (May 2025)", status: "Declared", date: "June 20, 2025" },
  { exam: "D.Pharm 2nd Year (May 2025)", status: "Declared", date: "June 22, 2025" },
  { exam: "Diploma Backlog Papers (May 2025)", status: "Awaited", date: "—" },
];

const Results = () => (
  <Layout>
    <PageBanner
      title="Examination Results"
      subtitle="Access your PSBTE diploma examination results and related information."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Corner" }, { label: "Results" }]}
    />

    {/* Quick Links */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Quick Access</span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">Result Portals</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {resultLinks.map((link, i) => (
            <motion.a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group block">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">{link.tag}</span>
              <h3 className="font-serif font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{link.desc}</p>
              <span className="text-xs text-primary font-semibold flex items-center gap-1">
                Visit Portal <ExternalLink className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    {/* Recent Results Table */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Updates</span>
            <h2 className="text-2xl font-bold text-foreground mt-2 mb-4 font-serif">Recent Examination Results</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </div>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-primary/5 px-6 py-3 border-b border-border">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Examination</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider text-center">Status</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider text-right">Date</span>
            </div>
            {recentResults.map((r, i) => (
              <div key={r.exam} className={`grid grid-cols-3 px-6 py-4 ${i < recentResults.length - 1 ? "border-b border-border" : ""} hover:bg-muted/50 transition-colors`}>
                <span className="text-sm text-foreground font-medium">{r.exam}</span>
                <span className="text-center">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${r.status === "Declared" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"}`}>
                    {r.status}
                  </span>
                </span>
                <span className="text-sm text-muted-foreground text-right">{r.date}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Note */}
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-primary/5 rounded-xl border border-primary/10 p-6 max-w-2xl mx-auto">
          <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            All results are declared by the <strong className="text-foreground">Punjab State Board of Technical Education & Industrial Training (PSBTE&IT)</strong>. 
            Students can check results on the official PSBTE website using their roll number.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Results;
