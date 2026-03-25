import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import principalImg from "@/assets/principal.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
      <Layout>
        <PageBanner
            title="About Us"
            subtitle="Established in 1985, Government Polytechnic College Bathinda has been a cornerstone of technical education in Punjab."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />

        {/* Principal's Message */}
        <section id="principal" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-xl">
                  <img src={principalImg} alt="Principal" className="w-full h-96 object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card rounded-xl shadow-lg border border-border p-4">
                  <p className="font-serif font-bold text-foreground text-sm">Er. Principal Name</p>
                  <p className="text-xs text-muted-foreground">M.Tech, Ph.D</p>
                  <p className="text-xs text-gold font-medium">Principal, GPC Bathinda</p>
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">From the Principal's Desk</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Principal's Message</h2>
                <div className="w-16 h-1 bg-gradient-gold rounded mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dear Students, Parents, and Well-wishers,
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to Government Polytechnic College, Bathinda. It gives me immense pleasure to lead an institution
                  that has been at the forefront of technical education in Punjab for nearly four decades. Since our inception
                  in 1985, we have consistently strived to provide world-class diploma education that bridges the gap between
                  academic knowledge and industrial requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our dedicated faculty members, state-of-the-art laboratories, and industry-aligned curriculum ensure that
                  every student who graduates from GPC Bathinda is well-prepared to face the challenges of the professional world.
                  We take pride in our excellent placement record and the success stories of our alumni spread across the globe.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe in holistic development — not just academic excellence, but also character building, sports,
                  cultural activities, and community service. Our NSS unit, technical clubs, and annual festivals provide
                  ample opportunities for students to discover their potential beyond textbooks.
                </p>
                <p className="text-muted-foreground leading-relaxed italic border-l-4 border-gold pl-4">
                  "Education is the most powerful weapon which you can use to change the world. At GPC Bathinda,
                  we strive to provide exactly that — an education that transforms and empowers."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Mission & Vision</h2>
              <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                          className="bg-card p-8 rounded-xl shadow-md border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <div className="w-12 h-1 bg-gradient-gold rounded mb-4" />
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To impart quality technical education that produces skilled professionals ready for industry.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To foster an environment of innovation, research, and continuous learning.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To develop strong ethical values and social responsibility among students.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To establish industry-academia collaborations for real-world exposure.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To promote inclusive education accessible to all sections of society.
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                          className="bg-card p-8 rounded-xl shadow-md border border-border">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🔭</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <div className="w-12 h-1 bg-gradient-gold rounded mb-4" />
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To be recognized as a premier polytechnic institution in North India.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To produce globally competent technicians and engineers.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To create a knowledge-driven society through accessible technical education.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To be at the forefront of technological innovation and skill development.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    To contribute meaningfully to nation-building through human resource development.
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Core Values */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">Core Values</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { icon: "🎓", label: "Excellence" },
                  { icon: "🤝", label: "Integrity" },
                  { icon: "💡", label: "Innovation" },
                  { icon: "🌍", label: "Inclusivity" },
                  { icon: "📈", label: "Growth" },
                ].map((v) => (
                    <div key={v.label} className="bg-card p-4 rounded-xl border border-border text-center hover:shadow-md transition-shadow">
                      <span className="text-2xl">{v.icon}</span>
                      <p className="text-sm font-serif font-bold text-foreground mt-2">{v.label}</p>
                    </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* History */}
        <section id="history" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Since 1985</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Rich Heritage</h2>
              <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <img src={heroCampus} alt="GPC Campus" className="rounded-xl shadow-lg w-full h-72 object-cover" />
                </motion.div>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Government Polytechnic College, Bathinda was established in 1985 under the Department of Technical
                    Education & Industrial Training, Government of Punjab. The institution was set up to cater to the
                    growing demand for skilled technical manpower in the Malwa region.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Starting with just three diploma programs, the college has expanded over the years to offer
                    eight full-time diploma courses across multiple engineering disciplines. The institution
                    is approved by AICTE and is affiliated with the Punjab State Board of Technical Education.
                  </p>
                </motion.div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
                {[
                  { year: "1985", title: "Foundation Year", desc: "GPC Bathinda established with Mechanical, Electrical, and Civil Engineering departments." },
                  { year: "1992", title: "Expansion", desc: "Electronics & Communication Engineering and Computer Engineering departments added." },
                  { year: "2000", title: "Infrastructure Growth", desc: "New academic block, computer labs, and central library inaugurated." },
                  { year: "2010", title: "Modern Upgrades", desc: "Wi-Fi campus, smart classrooms, and advanced workshops established." },
                  { year: "2018", title: "Recognition", desc: "Ranked among top polytechnic colleges in Punjab. Chemical Engineering introduced." },
                  { year: "2024", title: "Digital Transformation", desc: "Complete digitization of records, online admissions, and modern ERP system deployed." },
                ].map((item, i) => (
                    <motion.div
                        key={item.year}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`flex items-center gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <div className="bg-card p-5 rounded-xl border border-border shadow-sm inline-block max-w-md">
                          <span className="text-gold font-bold font-serif text-lg">{item.year}</span>
                          <h4 className="font-serif font-bold text-foreground mt-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                      <div className="hidden md:flex w-4 h-4 rounded-full bg-gold border-4 border-background shrink-0 relative z-10" />
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section id="infrastructure" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Campus</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Infrastructure</h2>
              <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🏛️", title: "Academic Blocks", desc: "Multiple well-ventilated academic blocks with spacious classrooms equipped with projectors and smart boards." },
                { icon: "🖥️", title: "Computer Center", desc: "Over 100 computers with latest software, high-speed internet, and dedicated server room." },
                { icon: "🔧", title: "Workshops & Labs", desc: "Fully equipped workshops for mechanical, electrical, electronics, and civil engineering practicals." },
                { icon: "📚", title: "Central Library", desc: "10,000+ books, national/international journals, digital library with DELNET membership." },
                { icon: "🏟️", title: "Sports Facilities", desc: "Cricket ground, basketball court, volleyball court, athletics track, and indoor games." },
                { icon: "🏠", title: "Hostels", desc: "Separate hostel facilities for boys and girls with mess, recreation rooms, and 24/7 security." },
                { icon: "🌐", title: "Wi-Fi Campus", desc: "Entire campus covered with high-speed wireless internet for academic and research purposes." },
                { icon: "🏥", title: "Health Center", desc: "On-campus medical facility with first aid, regular health check-ups, and emergency support." },
                { icon: "☕", title: "Canteen", desc: "Hygienic canteen serving nutritious meals and refreshments at subsidized rates." },
              ].map((f, i) => (
                  <motion.div
                      key={f.title}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all"
                  >
                    <span className="text-3xl">{f.icon}</span>
                    <h4 className="font-serif font-bold text-foreground mt-3 mb-2">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section id="accreditations" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Recognition</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Accreditations & Affiliations</h2>
              <div className="w-16 h-1 bg-gradient-gold rounded mx-auto" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { title: "AICTE", desc: "All India Council for Technical Education — Approved" },
                { title: "PSBTE", desc: "Punjab State Board of Technical Education — Affiliated" },
                { title: "DTE Punjab", desc: "Department of Technical Education, Govt. of Punjab" },
                { title: "NSQF", desc: "National Skills Qualifications Framework — Aligned" },
              ].map((a) => (
                  <motion.div key={a.title} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                              className="bg-card p-6 rounded-xl border border-border text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-serif font-bold text-primary text-lg">{a.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{a.desc}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default About;
