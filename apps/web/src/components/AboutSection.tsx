import { motion } from "framer-motion";
import principalImg from "@/assets/principal.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Principal's Message */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img src={principalImg} alt="Principal" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                <p className="text-background font-serif font-bold">Er. Principal Name</p>
                <p className="text-background/70 text-sm">Principal, GPC Bathinda</p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">From the Principal's Desk</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Principal's Message</h2>
            <div className="w-16 h-1 bg-gradient-gold rounded mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to Government Polytechnic College, Bathinda. Since our establishment in 1985, 
              we have been dedicated to nurturing talented young minds and transforming them into skilled 
              professionals who contribute meaningfully to society.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our institution stands as a beacon of technical education in the region, equipped with 
              state-of-the-art facilities, experienced faculty, and a curriculum designed to meet 
              the evolving demands of the industry.
            </p>
            <p className="text-muted-foreground leading-relaxed italic border-l-4 border-gold pl-4">
              "Education is the most powerful weapon which you can use to change the world. We strive to 
              provide exactly that — an education that empowers."
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <div className="w-12 h-1 bg-gradient-gold rounded mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              To impart quality technical education, foster innovation, and develop skilled professionals 
              who are industry-ready and contribute to the socio-economic development of the nation. 
              We aim to create an environment that encourages learning, research, and ethical values.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔭</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <div className="w-12 h-1 bg-gradient-gold rounded mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              To emerge as a premier institute of technical education, recognized for excellence in 
              teaching, learning, and innovation. To develop globally competent professionals with 
              strong ethical foundation, ready to serve the nation and the world.
            </p>
          </motion.div>
        </div>

        {/* History */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Since 1985</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Rich Heritage</h2>
          <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Government Polytechnic College, Bathinda was established in 1985 under the Department of 
            Technical Education, Punjab. Over nearly four decades, the institute has grown from a modest 
            beginning to become one of the leading polytechnic colleges in the state.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The college has consistently produced skilled diploma holders who have made significant 
            contributions in various industries across India and abroad. With modern labs, workshops, 
            and a dedicated faculty, GPC Bathinda continues its journey of academic excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
