import { motion } from "framer-motion";
import { Clock, Users, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Computer Engineering",
    icon: "💻",
    duration: "3 Years",
    seats: 60,
    desc: "Programming, networking, databases, web development, and software engineering.",
  },
  {
    title: "Mechanical Engineering",
    icon: "⚙️",
    duration: "3 Years",
    seats: 120,
    desc: "Manufacturing, thermodynamics, machine design, and industrial automation.",
  },
  {
    title: "Electrical Engineering",
    icon: "⚡",
    duration: "3 Years",
    seats: 60,
    desc: "Power systems, electrical machines, control systems, and renewable energy.",
  },
  {
    title: "Electronics & Communication",
    icon: "📡",
    duration: "3 Years",
    seats: 60,
    desc: "Analog & digital electronics, communication systems, and embedded systems.",
  },
  {
    title: "Civil Engineering",
    icon: "🏗️",
    duration: "3 Years",
    seats: 60,
    desc: "Structural engineering, surveying, construction management, and urban planning.",
  },
  {
    title: "Chemical Engineering",
    icon: "🧪",
    duration: "3 Years",
    seats: 40,
    desc: "Chemical processes, plant design, environmental engineering, and petrochemicals.",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Academic Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Diploma Courses Offered</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AICTE-approved diploma programs are designed to provide hands-on technical education with industry-relevant curriculum.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl shadow-md border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="text-4xl mb-3">{course.icon}</div>
              <h3 className="text-lg font-bold font-serif text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-4 leading-relaxed">{course.desc}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.seats} Seats</span>
                <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />Diploma</span>
              </div>
              <Link to="/courses" className="text-xs font-semibold text-primary hover:text-gold flex items-center gap-1 transition-colors">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
