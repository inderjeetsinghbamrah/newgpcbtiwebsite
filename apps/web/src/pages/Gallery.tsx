import { useState } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const categories = ["All", "Campus", "Labs", "Events", "Sports", "Workshops"];

const galleryItems = [
  { src: heroCampus, category: "Campus", title: "Aerial View of Campus" },
  { src: heroCampus, category: "Campus", title: "Main Academic Block" },
  { src: heroCampus, category: "Campus", title: "College Garden" },
  { src: heroCampus, category: "Labs", title: "Computer Lab" },
  { src: heroCampus, category: "Labs", title: "Electronics Lab" },
  { src: heroCampus, category: "Labs", title: "Mechanical Workshop" },
  { src: heroCampus, category: "Events", title: "Annual Tech Fest" },
  { src: heroCampus, category: "Events", title: "Cultural Night" },
  { src: heroCampus, category: "Events", title: "Guest Lecture" },
  { src: heroCampus, category: "Sports", title: "Cricket Tournament" },
  { src: heroCampus, category: "Sports", title: "Basketball Match" },
  { src: heroCampus, category: "Workshops", title: "AI/ML Workshop" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <Layout>
      <PageBanner
        title="Gallery"
        subtitle="A visual journey through our campus, events, and activities"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === c
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[4/3]"
                onClick={() => setLightbox(i)}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-background text-sm font-serif font-bold">{item.title}</p>
                    <p className="text-background/70 text-xs">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-background hover:text-gold transition-colors">
            <X className="w-8 h-8" />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.title}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-center text-background">
            <p className="font-serif font-bold">{filtered[lightbox]?.title}</p>
            <p className="text-xs opacity-70">{filtered[lightbox]?.category}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
