import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import principalImg from "@/assets/principal.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  { name: "Aman Jindal", course: "Civil Engineering, Batch 2014-2017", text: "I am selected as an SDO in Water Supply and Sanitation Department. The teaching faculty of the Civil department helped me a lot in achieving my goal. GPC Bathinda is the best college in Punjab for engineering courses.", rating: 5, photo: heroCampus },
  { name: "Jitin Kansal", course: "Civil Engineering, Batch 2010-2013", text: "I am currently working as SDO in Municipal Corporation, Ludhiana. Teaching skills and guidance of faculty members at GPC Bathinda helped me clear the government job exam without any additional coaching.", rating: 5, photo: principalImg },
  { name: "Manik Bansal", course: "D-Pharmacy, Batch 2019-2021", text: "The teaching faculty and the college have moulded us to become better pharmacists. Presently, I am serving as Veterinary Pharmacist in Deptt. of Animal Husbandry, Punjab.", rating: 5, photo: heroCampus },
  { name: "Lakhveer Singh", course: "Electrical Engg., Batch 2013-2016", text: "Despite surge in competition, I cracked the exam and secured a job as SSA in PSPCL in the first attempt. This was possible due to the experienced teachers of GPC Bathinda.", rating: 5, photo: principalImg },
  { name: "Deepak Bansal", course: "Mechanical Engg., Batch 2007-2010", text: "My diploma at GPC Bathinda helped me do B.Tech with good marks, clear GATE, and pursue M.Tech from IIT Roorkee. Now I serve as Lecturer at the same place where my journey started.", rating: 5, photo: heroCampus },
  { name: "Jaspreet Singh", course: "Electrical Engg., Batch 2013-2016", text: "I am working as JE in PSTCL for more than five years. The skills gained at GPC Bathinda helped me land this job. I will always be thankful to the faculty and Principal.", rating: 5, photo: principalImg },
  { name: "Ravinderjeet Singh", course: "Civil Engineering, Batch 2009-2012", text: "I got selected in the Water Resources Department as a Junior Engineer. In 2022 I got promoted and currently working as SDO. Consistency, focus, and smart use of opportunities are key.", rating: 5, photo: heroCampus },
  { name: "Harkesh Kumar", course: "Information Technology, Batch 2016-2019", text: "My passion in Graphic Designing evolved into a career with constant guidance from faculty and the Principal. I am a UI/UX Designer at Stackgeeks Lab, Chandigarh.", rating: 5, photo: principalImg },
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
