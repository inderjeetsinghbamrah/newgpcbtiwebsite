import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Bus, MapPin, Clock, Shield, Phone, Route, Users, IndianRupee } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const routes = [
  { route: "Route 1", area: "Bathinda City – Civil Lines – GPC", timing: "8:00 AM / 4:00 PM" },
  { route: "Route 2", area: "Goniana Road – Bibi Wala – GPC", timing: "7:45 AM / 4:00 PM" },
  { route: "Route 3", area: "Rampura Phul – Sangat – GPC", timing: "7:30 AM / 4:00 PM" },
  { route: "Route 4", area: "Mansa Road – Kot Shamir – GPC", timing: "7:30 AM / 4:00 PM" },
  { route: "Route 5", area: "Dabwali Road – Rama Mandi – GPC", timing: "7:45 AM / 4:00 PM" },
];

const features = [
  { icon: Bus, title: "College Bus Fleet", desc: "Well-maintained fleet of buses covering major city and rural routes." },
  { icon: MapPin, title: "Wide Coverage", desc: "Routes spanning Bathinda city and surrounding areas within 40 km radius." },
  { icon: Clock, title: "Punctual Service", desc: "Fixed arrival and departure schedules ensuring timely commute." },
  { icon: Shield, title: "Safe Travel", desc: "Experienced drivers, GPS tracking, and emergency support systems." },
  { icon: Users, title: "Affordable Fees", desc: "Subsidized transport charges for government polytechnic students." },
  { icon: Route, title: "Multiple Routes", desc: "5+ routes covering all major residential areas and nearby towns." },
];

const Transport = () => (
  <Layout>
    <PageBanner
      title="Transport Facility"
      subtitle="Safe, reliable, and affordable transport connecting students from across the region."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Campus Life" }, { label: "Transport" }]}
    />

    {/* Intro */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={heroCampus} alt="GPC Bathinda Transport" className="rounded-xl shadow-lg w-full h-72 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Connectivity</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">College Transport</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Government Polytechnic College, Bathinda operates a dedicated bus service for the convenience of day-scholar students. The transport facility covers major routes across Bathinda city and nearby towns, ensuring students can commute safely and affordably.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All buses are maintained regularly and driven by experienced staff. The college administration ensures strict adherence to schedules and safety norms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Services</span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">Transport Highlights</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Route Table */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-serif text-center">Bus Routes & Timings</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-primary/5 px-6 py-3 border-b border-border">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Route</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Coverage Area</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider text-right">Pickup / Drop</span>
            </div>
            {routes.map((r, i) => (
              <div key={r.route} className={`grid grid-cols-3 px-6 py-4 ${i < routes.length - 1 ? "border-b border-border" : ""} hover:bg-muted/50 transition-colors`}>
                <span className="text-sm font-semibold text-foreground">{r.route}</span>
                <span className="text-sm text-muted-foreground">{r.area}</span>
                <span className="text-sm text-primary font-medium text-right">{r.timing}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Phone className="w-4 h-4" />
          <span className="text-sm">For transport inquiries, contact the college office at <strong className="text-foreground">0164-2240364</strong></span>
        </div>
      </div>
    </section>
  </Layout>
);

export default Transport;
