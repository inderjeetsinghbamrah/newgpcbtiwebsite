import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Trophy, Users, Briefcase, Calendar, Medal, Star, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Students = () => {
  return (
    <Layout>
      <PageBanner
        title="Student Corner"
        subtitle="Discover the vibrant student life at GPC Bathinda"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Students" }]}
      />

      {/* Achievements */}
      <section id="achievements" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Pride of GPC</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Student Achievements</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "State Technical Fest 2024", desc: "1st position in coding competition at Punjab State Technical Festival.", year: "2024", badge: "Gold" },
              { icon: Medal, title: "National Skill Competition", desc: "Gold medal in CNC Programming at National Skill Competition, Delhi.", year: "2024", badge: "Gold" },
              { icon: Star, title: "Smart India Hackathon", desc: "Team 'InnovateBTI' selected for SIH 2024 Grand Finale.", year: "2024", badge: "Finalist" },
              { icon: Trophy, title: "Inter-College Sports", desc: "Overall championship in Punjab State Polytechnic Sports Meet.", year: "2023", badge: "Champion" },
              { icon: Medal, title: "Robotics Challenge", desc: "2nd prize in All India Robotics Challenge organized by IIT Ropar.", year: "2023", badge: "Silver" },
              { icon: Star, title: "Paper Presentation", desc: "Best paper award at ISTE National Convention on Green Technology.", year: "2023", badge: "Best Paper" },
            ].map((a, i) => (
              <motion.div key={a.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <a.icon className="w-8 h-8 text-gold" />
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{a.badge}</span>
                </div>
                <h4 className="font-serif font-bold text-foreground">{a.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{a.year}</p>
                <p className="text-sm text-muted-foreground mt-2">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section id="clubs" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Clubs & Societies</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💻", title: "Coding Club", desc: "Weekly coding contests, hackathons, and programming workshops.", members: "85+ members" },
              { icon: "🤖", title: "Robotics Club", desc: "Build robots, drones, and participate in national robotics competitions.", members: "40+ members" },
              { icon: "🎭", title: "Cultural Society", desc: "Drama, music, dance — organize annual cultural fest 'Tarang'.", members: "120+ members" },
              { icon: "📸", title: "Photography Club", desc: "Capture campus life, events, and participate in photo exhibitions.", members: "35+ members" },
              { icon: "🏏", title: "Sports Committee", desc: "Organize inter-department tournaments and represent at state level.", members: "100+ members" },
              { icon: "🌱", title: "NSS Unit", desc: "Community service, blood donation drives, cleanliness campaigns.", members: "200+ volunteers" },
              { icon: "📰", title: "Magazine Committee", desc: "Publish annual college magazine 'Polytechnic Times'.", members: "20+ members" },
              { icon: "🔬", title: "Science Club", desc: "Science exhibitions, guest lectures, and innovation projects.", members: "50+ members" },
            ].map((c, i) => (
              <motion.div key={c.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-5 rounded-xl border border-border text-center shadow-sm hover:shadow-md hover:border-gold/30 transition-all">
                <span className="text-3xl">{c.icon}</span>
                <h4 className="font-serif font-bold text-foreground mt-2 text-sm">{c.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
                <span className="inline-block mt-2 text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{c.members}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section id="placements" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Career Success</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Placements</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "90%+", label: "Placement Rate" },
              { value: "₹3.5L", label: "Avg. Package" },
              { value: "50+", label: "Recruiting Companies" },
              { value: "₹8L", label: "Highest Package" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-card p-5 rounded-xl border border-border text-center shadow-sm">
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-card p-8 rounded-xl border border-border shadow-sm">
            <h3 className="font-serif font-bold text-foreground text-xl mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-gold" /> Top Recruiters
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "TCS", "Infosys", "Wipro", "HCL", "L&T", "Mahindra", "BHEL", "NTPC",
                "Punjab State Power Corp.", "Indian Railways", "Maruti Suzuki", "Hero MotoCorp",
                "Airtel", "Jio", "Tech Mahindra", "Godrej", "Ambuja Cements", "UltraTech",
              ].map((c) => (
                <span key={c} className="text-xs bg-muted px-3 py-1.5 rounded-lg text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Campus Life</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Events & Activities</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: "Annual Tech Fest", date: "February", desc: "Three-day technical extravaganza with competitions, exhibitions, and guest lectures." },
              { icon: Users, title: "Cultural Festival 'Tarang'", date: "March", desc: "Music, dance, drama, and art — celebrating talent and creativity." },
              { icon: Trophy, title: "Sports Week", date: "March", desc: "Inter-department sports tournament covering 10+ sports disciplines." },
              { icon: Briefcase, title: "Placement Drive", date: "Throughout Year", desc: "Regular campus placement drives with top companies from various sectors." },
              { icon: Calendar, title: "Workshop Series", date: "Monthly", desc: "Hands-on workshops on latest technologies by industry experts." },
              { icon: Users, title: "Alumni Meet", date: "November", desc: "Annual reunion bringing alumni together to mentor current students." },
            ].map((e, i) => (
              <motion.div key={e.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <e.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-gold font-medium">{e.date}</span>
                </div>
                <h4 className="font-serif font-bold text-foreground">{e.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Students;
