import { useState } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Users, Cpu, Palette, Heart, Leaf, Trophy, BookOpen, Music, Code, Wrench } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import ActivitySlideshow from "@/components/ActivitySlideshow";

const clubs = [
  {
    name: "Robotics Club", type: "Technical", icon: Cpu,
    incharge: "Er. Rajesh Kumar", role: "Assistant Professor, CSE Dept.",
    activities: ["Robotics workshops", "Line-follower competitions", "Arduino & IoT projects", "Inter-college tech fests"],
    schedule: "Every Saturday, 2:00 PM – 4:00 PM",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus, heroCampus],
  },
  {
    name: "Coding Club", type: "Technical", icon: Code,
    incharge: "Er. Manpreet Singh", role: "Lecturer, IT Dept.",
    activities: ["Weekly coding contests", "Hackathons", "DSA bootcamps", "Web development workshops"],
    schedule: "Every Wednesday, 3:00 PM – 5:00 PM",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus],
  },
  {
    name: "Cultural Society", type: "Cultural", icon: Music,
    incharge: "Mrs. Sunita Sharma", role: "Lecturer, Applied Sciences",
    activities: ["Annual cultural fest", "Dance & drama performances", "Poetry recitations", "Art exhibitions"],
    schedule: "Every Friday, 3:00 PM – 5:00 PM",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus, heroCampus],
  },
  {
    name: "Sports Club", type: "Sports", icon: Trophy,
    incharge: "Sh. Harjinder Singh", role: "Physical Training Instructor",
    activities: ["Cricket, volleyball & basketball tournaments", "Annual sports day", "Inter-college competitions", "Fitness drives"],
    schedule: "Daily, 5:00 PM – 7:00 PM",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus],
  },
  {
    name: "NSS Unit", type: "Social Service", icon: Heart,
    incharge: "Er. Gurpreet Kaur", role: "Programme Officer, NSS",
    activities: ["Blood donation camps", "Swachh Bharat drives", "Village adoption programme", "Awareness rallies"],
    schedule: "Every Sunday, 9:00 AM – 1:00 PM",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus, heroCampus],
  },
  {
    name: "Eco Club", type: "Environment", icon: Leaf,
    incharge: "Er. Paramjit Kaur", role: "Lecturer, Civil Dept.",
    activities: ["Tree plantation drives", "E-waste collection", "Environment day celebrations", "Green campus initiatives"],
    schedule: "Monthly drives & workshops",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus],
  },
  {
    name: "Literary Club", type: "Literary", icon: BookOpen,
    incharge: "Mrs. Harpreet Kaur", role: "Lecturer, Applied Sciences",
    activities: ["Debate competitions", "Essay writing", "Quiz competitions", "Book reading sessions"],
    schedule: "Alternate Saturdays, 2:00 PM – 4:00 PM",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus, heroCampus],
  },
  {
    name: "Fine Arts Club", type: "Creative", icon: Palette,
    incharge: "Sh. Amandeep Singh", role: "Lecturer, Arch. Dept.",
    activities: ["Poster making", "Rangoli competitions", "Photography contests", "Sketch exhibitions"],
    schedule: "Monthly events",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus],
  },
  {
    name: "Mechanical Workshop Club", type: "Technical", icon: Wrench,
    incharge: "Er. Sukhwinder Singh", role: "Workshop Superintendent",
    activities: ["Mini project building", "Lathe & welding demos", "Go-kart design", "Industry visits"],
    schedule: "Alternate Saturdays",
    gallery: [heroCampus, heroCampus, heroCampus, heroCampus, heroCampus],
  },
];

const typeColors: Record<string, string> = {
  Technical: "bg-primary/10 text-primary",
  Cultural: "bg-accent/10 text-accent",
  Sports: "bg-green-100 text-green-700",
  "Social Service": "bg-pink-100 text-pink-700",
  Environment: "bg-emerald-100 text-emerald-700",
  Literary: "bg-blue-100 text-blue-700",
  Creative: "bg-purple-100 text-purple-700",
};

const Clubs = () => {
  const [slideshow, setSlideshow] = useState<{ title: string; images: string[] } | null>(null);

  return (
      <Layout>
        <PageBanner
            title="Student Clubs & Societies"
            subtitle="Explore diverse clubs fostering technical skills, creativity, social responsibility, and leadership."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Students", href: "/students" }, { label: "Clubs & Societies" }]}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club, i) => (
                  <motion.div
                      key={club.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors cursor-pointer"
                          onClick={() => setSlideshow({ title: club.name, images: club.gallery })}
                      >
                        <club.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${typeColors[club.type] || "bg-muted text-muted-foreground"}`}>
                    {club.type}
                  </span>
                    </div>

                    <h3
                        className="font-serif font-bold text-lg text-foreground mb-3 cursor-pointer hover:text-primary transition-colors"
                        onClick={() => setSlideshow({ title: club.name, images: club.gallery })}
                    >
                      {club.name}
                    </h3>

                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-3.5 h-3.5 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{club.incharge}</span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-5.5">{club.role}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Activities</h4>
                      <ul className="space-y-1">
                        {club.activities.map((a) => (
                            <li key={a} className="text-sm text-foreground flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                              {a}
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* Gallery thumbnails */}
                    <div
                        className="flex gap-1.5 mb-4 cursor-pointer"
                        onClick={() => setSlideshow({ title: club.name, images: club.gallery })}
                    >
                      {club.gallery.slice(0, 4).map((img, idx) => (
                          <div key={idx} className="w-14 h-10 rounded overflow-hidden border border-border">
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </div>
                      ))}
                      {club.gallery.length > 4 && (
                          <div className="w-14 h-10 rounded bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground">
                            +{club.gallery.length - 4}
                          </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">Schedule:</span> {club.schedule}
                      </p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ActivitySlideshow
            open={!!slideshow}
            onOpenChange={(open) => !open && setSlideshow(null)}
            title={slideshow?.title || ""}
            images={slideshow?.images || []}
        />
      </Layout>
  );
};

export default Clubs;
