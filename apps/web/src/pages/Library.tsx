import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { BookOpen, Clock, Wifi, Users, Monitor, Archive, Download, ExternalLink } from "lucide-react";

const libraryStats = [
  { label: "Total Books", value: "25,000+", icon: BookOpen },
  { label: "E-Journals", value: "500+", icon: Monitor },
  { label: "Periodicals", value: "50+", icon: Archive },
  { label: "Daily Visitors", value: "200+", icon: Users },
];

const facilities = [
  "Spacious reading hall with 150+ seating capacity",
  "Digital library with internet-enabled workstations",
  "OPAC (Online Public Access Catalogue) system",
  "Separate reference section for competitive exams",
  "Reprography & printing facilities",
  "DELNET membership for inter-library loan",
  "Book bank scheme for SC/ST and economically weaker students",
  "Wi-Fi enabled premises",
];

const sections = [
  { title: "General Section", desc: "Engineering textbooks, reference books across all branches" },
  { title: "Reference Section", desc: "Encyclopedias, handbooks, competitive exam guides" },
  { title: "Periodicals Section", desc: "National & international journals, magazines, newspapers" },
  { title: "Digital Library", desc: "E-books, e-journals, NPTEL videos, online databases" },
  { title: "Book Bank", desc: "Semester-wise book sets issued to eligible students" },
];

const Library = () => {
  return (
    <Layout>
      <PageBanner
        title="Central Library"
        subtitle="A knowledge hub fostering academic excellence and research through vast resources."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Library" }]}
      />

      {/* Librarian's Message */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-xl border border-border p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">Message from the Librarian</span>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <blockquote className="text-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4 mb-4">
                    "The library at Government Polytechnic College, Bathinda is committed to supporting the academic
                    and intellectual growth of our students. We continuously strive to expand our collection and
                    embrace digital resources to keep pace with modern education. I encourage every student to
                    make the library their second home — a place of discovery, learning, and innovation."
                  </blockquote>
                  <p className="font-serif font-bold text-foreground">Sh. Mohinder Pal</p>
                  <p className="text-sm text-muted-foreground">Librarian, GPC Bathinda</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {libraryStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-5 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Collections</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Library Sections</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-5 rounded-xl border border-border hover:shadow-md transition-all"
              >
                <h4 className="font-serif font-bold text-foreground mb-1">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Infrastructure</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Library Facilities</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            {facilities.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <p className="text-sm text-foreground">{f}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-xl border border-border p-8 text-center">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl text-foreground mb-4">Library Timings</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Monday – Friday</span>
                <span className="font-semibold text-foreground">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-semibold text-foreground">9:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Sunday & Holidays</span>
                <span className="font-semibold text-destructive">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Library;
