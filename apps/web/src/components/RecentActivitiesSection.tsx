import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCampus from "@/assets/hero-campus.jpg";
import ActivitySlideshow from "@/components/ActivitySlideshow";
import { useLanguage } from "@/contexts/LanguageContext";

const activities = [
  { title: "Annual Prize Distribution (GPC Bathinda)", date: "April 04, 2025", image: heroCampus, club: "College Event",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus, heroCampus] },
  { title: "Literary Club — Speech Competition (Women's Day)", date: "March 21, 2025", image: heroCampus, club: "Literary Club",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus] },
  { title: "Anti Drug Campaign — NSS Red Ribbon Club", date: "March 20, 2025", image: heroCampus, club: "NSS Club",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus, heroCampus] },
  { title: "Art and Hobby Club — Dance Competition", date: "Feb 20, 2025", image: heroCampus, club: "Art & Hobby Club",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus] },
  { title: "Rangoli Competition — Art & Hobby Club", date: "Aug 24, 2024", image: heroCampus, club: "Art & Hobby Club",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus, heroCampus] },
  { title: "Constitutional Day — 'Hamara Samvidhan Hamara Swabhimaan'", date: "Nov 24, 2024", image: heroCampus, club: "Science Club",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus] },
];

const RecentActivitiesSection = () => {
  const { t } = useLanguage();
  const [slideshow, setSlideshow] = useState<{ title: string; images: string[] } | null>(null);

  return (
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.activities.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.activities.sectionTitle}</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
                            onClick={() => setSlideshow({ title: item.title, images: item.gallery })}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{item.club}</div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                    <h4 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-snug">{item.title}</h4>
                  </div>
                </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/students#clubs" className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
              {t.activities.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/gallery" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              {t.activities.viewGallery || "View Gallery"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ActivitySlideshow open={!!slideshow} onOpenChange={(open) => !open && setSlideshow(null)} title={slideshow?.title || ""} images={slideshow?.images || []} />
      </section>
  );
};

export default RecentActivitiesSection;
