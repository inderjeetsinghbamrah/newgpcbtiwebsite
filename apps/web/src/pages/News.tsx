import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Calendar, Bell, Megaphone, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const newsItems = [
  { id: 1, type: "notice", title: "Admissions Open for 2025-26 Session", date: "March 10, 2025", desc: "Applications are invited for admission to various diploma courses for the academic session 2025-26. Eligible candidates can apply online through the official PSBTE portal.", important: true },
  { id: 2, type: "event", title: "Annual Technical Fest 'TechnoVision 2025'", date: "March 5, 2025", desc: "The annual technical fest is scheduled for March 20-22. Events include coding competitions, robotics, project exhibitions, and guest lectures by industry experts." },
  { id: 3, type: "notice", title: "Semester Examination Schedule Released", date: "February 28, 2025", desc: "The date sheet for semester examinations has been released. Students can download the schedule from the examination section." },
  { id: 4, type: "event", title: "Campus Placement Drive by TCS", date: "February 25, 2025", desc: "TCS is conducting a campus placement drive on March 25, 2025. Eligible final year students of Computer and Electronics departments can register." },
  { id: 5, type: "announcement", title: "Workshop on AI & Machine Learning", date: "February 20, 2025", desc: "A two-day workshop on Artificial Intelligence and Machine Learning will be conducted by experts from IIT Delhi. Registration is open till March 15." },
  { id: 6, type: "notice", title: "Fee Payment Deadline Extended", date: "February 15, 2025", desc: "The last date for fee payment for the current semester has been extended to March 31, 2025. Students are advised to pay fees before the deadline." },
  { id: 7, type: "announcement", title: "New Computer Lab Inaugurated", date: "February 10, 2025", desc: "A state-of-the-art computer lab with 100+ workstations has been inaugurated. The lab is equipped with high-speed internet and latest software." },
  { id: 8, type: "event", title: "NSS Camp at Village Rampura", date: "February 5, 2025", desc: "NSS volunteers conducted a week-long camp at Village Rampura, organizing health camps, cleanliness drives, and awareness programs." },
  { id: 9, type: "notice", title: "Anti-Ragging Committee Meeting", date: "January 30, 2025", desc: "A meeting of the Anti-Ragging Committee was held to review measures and ensure a safe campus environment for all students." },
];

const typeConfig = {
  notice: { icon: Bell, color: "text-primary", bg: "bg-primary/10", label: "Notice" },
  event: { icon: Calendar, color: "text-gold", bg: "bg-gold/10", label: "Event" },
  announcement: { icon: Megaphone, color: "text-maroon-light", bg: "bg-maroon-light/10", label: "Announcement" },
};

const News = () => {
  return (
      <Layout>
        <PageBanner
            title="News & Notices"
            subtitle="Stay updated with the latest news, events, and announcements from GPC Bathinda"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Notices" }]}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {newsItems.map((item, i) => {
                const config = typeConfig[item.type as keyof typeof typeConfig];
                const Icon = config.icon;
                return (
                    <motion.div
                        key={item.id}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow ${
                            item.important ? "border-gold/50 ring-1 ring-gold/20" : "border-border"
                        }`}
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-lg ${config.bg} flex items-center justify-center shrink-0`}>
                            <Icon className={`w-5 h-5 ${config.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`text-[10px] font-semibold uppercase tracking-wider ${config.color} ${config.bg} px-2 py-0.5 rounded-full`}>
                            {config.label}
                          </span>
                              {item.important && (
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-foreground bg-gradient-gold px-2 py-0.5 rounded-full">
                              Important
                            </span>
                              )}
                              <span className="text-xs text-muted-foreground">{item.date}</span>
                            </div>
                            <h3 className="font-serif font-bold text-foreground text-lg">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                            <button className="text-xs font-semibold text-primary hover:text-gold flex items-center gap-1 mt-3 transition-colors">
                              Read More <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default News;
