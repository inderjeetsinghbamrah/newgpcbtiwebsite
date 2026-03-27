import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Building, Monitor, BookOpen, FlaskConical, Wifi, Shield } from "lucide-react";

const facilities = [
  {
    title: "Classrooms & Lecture Halls",
    icon: <Building className="w-6 h-6" />,
    description: "Spacious, well-ventilated classrooms equipped with smart boards and projectors. Total built-up area as per AICTE norms for all approved programs.",
    specs: ["Smart Board enabled", "40-60 seating capacity each", "Natural lighting & ventilation", "ICT-enabled teaching"],
  },
  {
    title: "Computer Labs & IT Infrastructure",
    icon: <Monitor className="w-6 h-6" />,
    description: "State-of-the-art computer laboratories with latest hardware and licensed software as per AICTE requirements.",
    specs: ["300+ computers with latest configuration", "Licensed software (AutoCAD, MATLAB, etc.)", "1:3 computer-to-student ratio", "Dedicated servers & LAN"],
  },
  {
    title: "Library & Information Centre",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Well-stocked library with textbooks, reference books, national & international journals, and digital resources.",
    specs: ["15,000+ books & volumes", "E-journal subscriptions (DELNET)", "Digital library section", "Reading hall with 100+ seating"],
  },
  {
    title: "Laboratories & Workshops",
    icon: <FlaskConical className="w-6 h-6" />,
    description: "Department-wise laboratories and a central workshop equipped with modern machines and equipment.",
    specs: ["Department-specific labs for all branches", "Central workshop with 6 sections", "Physics, Chemistry & Applied Science labs", "Regular equipment upgradation"],
  },
  {
    title: "Internet & Wi-Fi Campus",
    icon: <Wifi className="w-6 h-6" />,
    description: "Campus-wide internet connectivity through dedicated leased line and Wi-Fi access points.",
    specs: ["100 Mbps leased line", "Wi-Fi enabled campus", "NPTEL & SWAYAM access", "Online examination facility"],
  },
  {
    title: "Safety & Security",
    icon: <Shield className="w-6 h-6" />,
    description: "Comprehensive safety measures including CCTV surveillance, fire safety equipment, and security personnel.",
    specs: ["CCTV surveillance throughout campus", "Fire extinguishers in all buildings", "24x7 security guard", "First aid facility"],
  },
];

const AICTEInfrastructure = () => {
  return (
    <Layout>
      <PageBanner title="Infrastructure & Facilities" subtitle="Campus infrastructure meeting AICTE standards for quality technical education" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {facilities.map((facility, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/5 border-b border-border px-6 py-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{facility.icon}</div>
                  <h3 className="font-serif font-bold text-foreground">{facility.title}</h3>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm text-muted-foreground mb-3">{facility.description}</p>
                  <ul className="space-y-1.5">
                    {facility.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AICTEInfrastructure;
