import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import principalImg from "@/assets/principal.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  { name: "Rajveer Singh", course: "Computer Engineering, 2020", text: "GPC Bathinda gave me the foundation I needed. The practical approach and supportive faculty helped me secure a great placement at an MNC.", rating: 5, photo: heroCampus },
  { name: "Priya Sharma", course: "Electronics & Communication, 2019", text: "The labs and workshops are excellent. I learned more through hands-on practice here than any theory could teach. Forever grateful!", rating: 5, photo: principalImg },
  { name: "Amit Kumar", course: "Mechanical Engineering, 2021", text: "The campus life was amazing. From sports to technical fests, GPC Bathinda provides a holistic development environment.", rating: 4, photo: heroCampus },
  { name: "Gurleen Kaur", course: "Architecture, 2022", text: "The design studios and site visits opened my eyes to real-world architecture. The mentorship here is unparalleled.", rating: 5, photo: principalImg },
  { name: "Harmandeep Singh", course: "Civil Engineering, 2020", text: "From surveying camps to concrete labs, every experience at GPC Bathinda prepared me for the industry. Proud alumnus!", rating: 5, photo: heroCampus },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)), []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const item = testimonials[current];

  return (
      <section className="py-20 bg-gradient-primary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.testimonials.sectionTag}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t.testimonials.sectionTitle}</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
          </motion.div>
          <div className="max-w-3xl mx-auto relative">
            <button onClick={prev} className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-20 bg-card/10 hover:bg-card/20 backdrop-blur-sm border border-secondary-foreground/10 text-secondary-foreground rounded-full p-2 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={next} className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-20 bg-card/10 hover:bg-card/20 backdrop-blur-sm border border-secondary-foreground/10 text-secondary-foreground rounded-full p-2 transition-colors"><ChevronRight className="w-5 h-5" /></button>
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold/30 shadow-lg">
                    <img src={item.photo} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-8 h-8 text-gold/50 mb-3 mx-auto md:mx-0" />
                  <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4 font-sans">{item.text}</p>
                  <div className="flex gap-0.5 mb-3 justify-center md:justify-start">
                    {Array.from({ length: item.rating }).map((_, j) => (<Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />))}
                  </div>
                  <p className="font-serif font-bold text-sm">{item.name}</p>
                  <p className="text-xs opacity-70">{item.course}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-gold w-6" : "bg-secondary-foreground/30 hover:bg-secondary-foreground/50"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default TestimonialsSection;
