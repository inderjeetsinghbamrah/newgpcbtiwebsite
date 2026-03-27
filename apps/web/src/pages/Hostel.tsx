import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Home, Utensils, Wifi, ShieldCheck, Users, Bed, Clock, Phone } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const hostelFeatures = [
  { icon: Bed, title: "Comfortable Rooms", desc: "Well-furnished rooms with proper ventilation, study tables, and storage." },
  { icon: Utensils, title: "Mess Facility", desc: "Hygienic mess providing nutritious vegetarian and non-vegetarian meals." },
  { icon: Wifi, title: "Wi-Fi Enabled", desc: "High-speed internet connectivity across all hostel blocks." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Round-the-clock CCTV surveillance and security personnel at gates." },
  { icon: Users, title: "Warden In-Charge", desc: "Dedicated wardens for boys and girls hostels ensuring discipline." },
  { icon: Clock, title: "Fixed Timings", desc: "Structured schedule for meals, study hours, and recreational activities." },
];

const hostelInfo = [
  { label: "Boys Hostel Capacity", value: "200 Students" },
  { label: "Girls Hostel Capacity", value: "100 Students" },
  { label: "Mess Timings (Breakfast)", value: "7:30 AM – 9:00 AM" },
  { label: "Mess Timings (Lunch)", value: "12:30 PM – 2:00 PM" },
  { label: "Mess Timings (Dinner)", value: "7:30 PM – 9:00 PM" },
  { label: "Visiting Hours", value: "Sunday 10:00 AM – 5:00 PM" },
];

const Hostel = () => (
  <Layout>
    <PageBanner
      title="Hostel Facility"
      subtitle="A home away from home — safe, comfortable, and well-managed hostels for students."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Campus Life" }, { label: "Hostel" }]}
    />

    {/* Hero Image & Intro */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={heroCampus} alt="GPC Bathinda Hostel" className="rounded-xl shadow-lg w-full h-72 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Residential Campus</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">Hostel Accommodation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Government Polytechnic College, Bathinda provides separate hostel facilities for boys and girls within the campus premises. The hostels are designed to offer a secure, comfortable, and academically conducive environment for outstation students.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each hostel is managed by a resident warden and support staff, ensuring round-the-clock availability of essential services including mess, laundry, and medical assistance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Amenities</span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">Hostel Features</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hostelFeatures.map((f, i) => (
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

    {/* Info Table */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-serif text-center">Hostel Details</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            {hostelInfo.map((item, i) => (
              <div key={item.label} className={`flex justify-between items-center px-6 py-4 ${i < hostelInfo.length - 1 ? "border-b border-border" : ""}`}>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                <span className="text-sm text-primary font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Contact */}
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Phone className="w-4 h-4" />
          <span className="text-sm">For hostel inquiries, contact the college office at <strong className="text-foreground">0164-2240364</strong></span>
        </div>
      </div>
    </section>
  </Layout>
);

export default Hostel;
