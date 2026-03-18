import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import {
  Monitor, Wrench, BookOpen, Trophy, Home, FlaskConical, Wifi, HeartPulse,
  Bus, Utensils, ShieldCheck, Zap, Droplets, ParkingCircle
} from "lucide-react";

const mainFacilities = [
  {
    icon: Monitor,
    title: "Computer Labs",
    desc: "100+ workstations equipped with high-speed internet, latest software, and dedicated labs for each department.",
    highlights: ["Internet-enabled PCs", "Licensed software", "LAN networking"],
  },
  {
    icon: Wrench,
    title: "Workshops",
    desc: "Fully equipped mechanical, electrical, and electronics workshops for hands-on practical training.",
    highlights: ["CNC machines", "Welding units", "Electrical panels"],
  },
  {
    icon: BookOpen,
    title: "Central Library",
    desc: "25,000+ books, e-journals, and digital resources with a spacious reading hall.",
    highlights: ["DELNET member", "Digital library", "Book bank scheme"],
    link: "/library",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    desc: "Specialized labs across all departments — Physics, Chemistry, Electronics, Networking, and more.",
    highlights: ["Well-equipped", "Modern instruments", "Project labs"],
  },
  {
    icon: Trophy,
    title: "Sports Complex",
    desc: "Multi-sport facilities with cricket ground, basketball & volleyball courts, and indoor games.",
    highlights: ["Cricket ground", "Basketball court", "Table tennis"],
  },
  {
    icon: Home,
    title: "Hostel Facility",
    desc: "Separate hostel accommodation for boys and girls with mess, common rooms, and 24/7 security.",
    highlights: ["Boys & girls hostels", "Mess facility", "Wi-Fi enabled"],
  },
  {
    icon: Wifi,
    title: "Wi-Fi Campus",
    desc: "Complete campus coverage with high-speed wireless internet for students and faculty.",
    highlights: ["Full coverage", "High bandwidth", "Free access"],
  },
  {
    icon: HeartPulse,
    title: "Medical Facility",
    desc: "On-campus health center with first-aid, basic medical support, and tie-ups with nearby hospitals.",
    highlights: ["First-aid centre", "Health check-ups", "Emergency support"],
  },
];

const additionalFacilities = [
  { icon: Bus, title: "Transportation", desc: "College bus service covering major city routes" },
  { icon: Utensils, title: "Canteen", desc: "Hygienic canteen with affordable meals and snacks" },
  { icon: ShieldCheck, title: "Security", desc: "24/7 CCTV surveillance and security personnel" },
  { icon: Zap, title: "Power Backup", desc: "Uninterrupted power supply with generator backup" },
  { icon: Droplets, title: "RO Water", desc: "Purified drinking water available across campus" },
  { icon: ParkingCircle, title: "Parking", desc: "Spacious parking for students and staff vehicles" },
];

const Facilities = () => {
  return (
    <Layout>
      <PageBanner
        title="Campus Facilities"
        subtitle="World-class infrastructure supporting academic excellence and holistic development."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />

      {/* Main Facilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Key Facilities</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mainFacilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <f.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{f.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.highlights.map((h) => (
                        <span key={h} className="text-[10px] font-semibold bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Amenities</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Additional Amenities</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {additionalFacilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-5 text-center hover:shadow-md transition-all"
              >
                <f.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-foreground mb-1">{f.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
