import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Heart, Users, Target, Award, Calendar, MapPin } from "lucide-react";

const objectives = [
  "Understand the community in which they work",
  "Understand themselves in relation to their community",
  "Identify the needs and problems of the community",
  "Develop among themselves a sense of social and civic responsibility",
  "Apply their education in practical solutions to community problems",
  "Develop competence required for group-living and sharing responsibilities",
  "Gain skills in mobilising community participation",
  "Acquire leadership qualities and democratic attitudes",
];

const activities = [
  { title: "Blood Donation Camps", desc: "Regular blood donation drives in association with local hospitals and blood banks.", icon: Heart },
  { title: "Swachh Bharat Abhiyan", desc: "Cleanliness drives within campus and adopted villages.", icon: Target },
  { title: "Tree Plantation Drives", desc: "Environmental awareness campaigns and plantation programmes.", icon: MapPin },
  { title: "Health & Hygiene Camps", desc: "Free health check-ups and awareness programs in rural areas.", icon: Award },
  { title: "Literacy Programs", desc: "Teaching underprivileged children and adult education drives.", icon: Users },
  { title: "Special Camps", desc: "7-day residential camps in adopted villages with community development.", icon: Calendar },
];

const team = [
  { name: "Er. Gurpreet Kaur", role: "Programme Officer", dept: "Applied Sciences" },
  { name: "Er. Paramjit Kaur", role: "Assistant Programme Officer", dept: "Civil Engineering" },
];

const NSS = () => {
  return (
    <Layout>
      <PageBanner
        title="NSS — National Service Scheme"
        subtitle='"Not Me But You" — Developing personality through community service'
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "NSS" }]}
      />

      {/* About NSS */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-xl text-foreground">About NSS at GPC Bathinda</h2>
                  <p className="text-sm text-muted-foreground">Estd. under Ministry of Youth Affairs & Sports</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                The NSS unit of Government Polytechnic College, Bathinda has been actively contributing to
                community development and social welfare. Our volunteers participate in various programs aimed
                at creating awareness, building community infrastructure, and developing a sense of social
                responsibility among students.
              </p>
              <p className="text-foreground leading-relaxed">
                With a strength of 100+ volunteers, the unit regularly organises camps, rallies, and community
                outreach programs in adopted villages and surrounding areas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NSS Team */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Leadership</span>
            <h2 className="text-2xl font-bold text-foreground mt-2">NSS Team</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-serif font-bold text-foreground">{t.name}</h4>
                <p className="text-sm text-primary font-semibold">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.dept}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Mission</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Objectives of NSS</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <Target className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Outreach</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Key Activities</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-serif font-bold text-foreground mb-1">{a.title}</h4>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NSS;
