import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Trophy, Target, Medal, Dumbbell, Users, Calendar, MapPin } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const sports = [
  { name: "Cricket", desc: "Full-size cricket ground with practice nets and regular inter-college tournaments.", image: heroCampus },
  { name: "Basketball", desc: "Standard basketball court with floodlights for evening practice sessions.", image: heroCampus },
  { name: "Volleyball", desc: "Dedicated volleyball court hosting inter-department and inter-college matches.", image: heroCampus },
  { name: "Kabaddi", desc: "Traditional kabaddi ground promoting indigenous sports among students.", image: heroCampus },
  { name: "Athletics", desc: "400m track for running, sprinting events, and annual sports day competitions.", image: heroCampus },
  { name: "Table Tennis", desc: "Indoor table tennis facility available for students throughout the day.", image: heroCampus },
];

const achievements = [
  "State-level winners in Inter-Polytechnic Cricket Tournament 2024",
  "Runners-up in PSBTE Volleyball Championship 2023-24",
  "Multiple medalists in Punjab State Athletics Meet",
  "Active participation in Khelo India & Fit India campaigns",
  "Annual Sports Day with 20+ events and 500+ participants",
];

const Sports = () => (
  <Layout>
    <PageBanner
      title="Sports & Athletics"
      subtitle="Fostering sportsmanship, fitness, and competitive spirit through world-class facilities."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Campus Life" }, { label: "Sports" }]}
    />

    {/* Intro */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={heroCampus} alt="GPC Bathinda Sports" className="rounded-xl shadow-lg w-full h-72 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Athletics</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">Sports at GPC Bathinda</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Government Polytechnic College, Bathinda places great emphasis on physical fitness and sports alongside academics. The college boasts a sprawling sports complex with facilities for multiple outdoor and indoor games.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Under the guidance of our dedicated Physical Training Instructor, students regularly participate in inter-polytechnic, state-level, and national tournaments, bringing laurels to the institution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Sports Grid */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Facilities</span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">Our Sports Facilities</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sports.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all group">
              <div className="h-40 overflow-hidden">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-foreground mb-1">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Pride</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">Achievements & Highlights</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="space-y-4">
              {achievements.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Sports In-Charge */}
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-card rounded-xl border border-border p-6 max-w-md mx-auto">
          <Dumbbell className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-serif font-bold text-foreground">Sh. Harjinder Singh</h3>
          <p className="text-sm text-muted-foreground">Physical Training Instructor</p>
          <p className="text-xs text-muted-foreground mt-2">Sports Office, GPC Bathinda</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Sports;
