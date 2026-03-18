import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajveer Singh",
    course: "Computer Engineering, 2020",
    text: "GPC Bathinda gave me the foundation I needed. The practical approach and supportive faculty helped me secure a great placement at an MNC.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    course: "Electronics & Communication, 2019",
    text: "The labs and workshops are excellent. I learned more through hands-on practice here than any theory could teach. Forever grateful!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    course: "Mechanical Engineering, 2021",
    text: "The campus life was amazing. From sports to technical fests, GPC Bathinda provides a holistic development environment.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">What Our Alumni Say</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Testimonials</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl p-6 hover:bg-card/20 transition-all"
            >
              <Quote className="w-8 h-8 text-gold/50 mb-3" />
              <p className="text-sm leading-relaxed opacity-90 mb-4 font-sans">{t.text}</p>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif font-bold text-sm">{t.name}</p>
              <p className="text-xs opacity-70">{t.course}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
