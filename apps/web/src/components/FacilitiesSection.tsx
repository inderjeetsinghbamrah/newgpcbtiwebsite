import { motion } from "framer-motion";

const facilities = [
  { icon: "🖥️", title: "Computer Labs", desc: "100+ workstations with high-speed internet and latest software." },
  { icon: "🔧", title: "Workshops", desc: "Fully equipped mechanical, electrical, and electronics workshops." },
  { icon: "📚", title: "Central Library", desc: "Vast collection of books, journals, and digital resources." },
  { icon: "🏟️", title: "Sports Complex", desc: "Multi-sport facilities including cricket, basketball, and volleyball." },
  { icon: "🏠", title: "Hostel Facility", desc: "Separate hostel accommodation for boys and girls." },
  { icon: "🧪", title: "Research Labs", desc: "Specialized laboratories for practical and project work." },
  { icon: "🌐", title: "Wi-Fi Campus", desc: "Complete campus coverage with high-speed wireless internet." },
  { icon: "🏥", title: "Medical Facility", desc: "On-campus health center with first-aid and medical support." },
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">World-Class Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Facilities</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card p-5 rounded-xl border border-border text-center hover:shadow-lg hover:border-gold/30 transition-all group"
            >
              <div className="text-3xl mb-2">{f.icon}</div>
              <h4 className="font-serif font-bold text-sm text-foreground group-hover:text-primary transition-colors">{f.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
