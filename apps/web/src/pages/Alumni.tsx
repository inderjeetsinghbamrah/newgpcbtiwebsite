import { useEffect, useState, useCallback } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Calendar, Award, ArrowRight, Mail, Phone, GraduationCap, Star, HandHeart, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


type AlumniItem = { name: string; batch: string; role: string; message: string; photo: string };

const DistinguishedAlumniCarousel = ({ alumni, batchLabel, tag, title }: { alumni: AlumniItem[]; batchLabel: string; tag: string; title: string }) => {
    const [current, setCurrent] = useState(0);
    const next = useCallback(() => setCurrent((c) => (c + 1) % alumni.length), [alumni.length]);
    const prev = useCallback(() => setCurrent((c) => (c === 0 ? alumni.length - 1 : c - 1)), [alumni.length]);

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    const item = alumni[current];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
            <Award className="w-4 h-4 inline mr-1" /> {tag}
          </span>
                    <h2 className="text-3xl font-serif font-bold text-foreground">{title}</h2>
                </div>
                <div className="max-w-2xl mx-auto relative">
                    <button onClick={prev} className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-20 bg-muted hover:bg-muted/80 border border-border text-foreground rounded-full p-2 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-20 bg-muted hover:bg-muted/80 border border-border text-foreground rounded-full p-2 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <Card className="overflow-hidden shadow-lg">
                                <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                                    <img src={item.photo} alt={item.name} className="w-28 h-28 rounded-xl object-cover shrink-0 border-4 border-primary/20" />
                                    <div className="flex-1">
                                        <h3 className="font-serif font-bold text-foreground text-xl">{item.name}</h3>
                                        <p className="text-sm text-primary font-medium mt-1">{item.role}</p>
                                        <p className="text-xs text-muted-foreground mb-3">{batchLabel}: {item.batch}</p>
                                        <p className="text-sm text-muted-foreground italic leading-relaxed">"{item.message}"</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-center gap-2 mt-6">
                        {alumni.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Alumni = () => {
    const { t } = useLanguage();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const distinguishedAlumni = [
        {
            name: t.alumni.alumni1Name,
            batch: "1990",
            role: t.alumni.alumni1Role,
            message: t.alumni.alumni1Message,
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
        },
        {
            name: t.alumni.alumni2Name,
            batch: "1995",
            role: t.alumni.alumni2Role,
            message: t.alumni.alumni2Message,
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
        },
        {
            name: t.alumni.alumni3Name,
            batch: "2000",
            role: t.alumni.alumni3Role,
            message: t.alumni.alumni3Message,
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        },
        {
            name: t.alumni.alumni4Name,
            batch: "2005",
            role: t.alumni.alumni4Role,
            message: t.alumni.alumni4Message,
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        },
    ];

    const committee = [
        { name: t.alumni.committeePres, role: t.alumni.committeePresRole, contact: "+91-98765-43210" },
        { name: t.alumni.committeeVP, role: t.alumni.committeeVPRole, contact: "+91-98765-43211" },
        { name: t.alumni.committeeSec, role: t.alumni.committeeSecRole, contact: "+91-98765-43212" },
        { name: t.alumni.committeeTreas, role: t.alumni.committeeTreasRole, contact: "+91-98765-43213" },
    ];

    const reunionEvents = [
        { title: t.alumni.reunion1Title, date: t.alumni.reunion1Date, desc: t.alumni.reunion1Desc },
        { title: t.alumni.reunion2Title, date: t.alumni.reunion2Date, desc: t.alumni.reunion2Desc },
        { title: t.alumni.reunion3Title, date: t.alumni.reunion3Date, desc: t.alumni.reunion3Desc },
    ];

    const galleryImages = [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
    ];

    const impactStats = [
        { icon: <GraduationCap className="w-8 h-8" />, value: "10,000+", label: t.alumni.totalAlumni },
        { icon: <Building2 className="w-8 h-8" />, value: "500+", label: t.alumni.companiesRepresented },
        { icon: <Star className="w-8 h-8" />, value: "50+", label: t.alumni.countriesWorldwide },
        { icon: <HandHeart className="w-8 h-8" />, value: "₹25L+", label: t.alumni.contributionsRaised },
    ];

    const contributions = [
        { title: t.alumni.infraFund, desc: t.alumni.infraFundDesc, icon: <Building2 className="w-6 h-6" /> },
        { title: t.alumni.scholarshipFund, desc: t.alumni.scholarshipFundDesc, icon: <Award className="w-6 h-6" /> },
        { title: t.alumni.labUpgrade, desc: t.alumni.labUpgradeDesc, icon: <Star className="w-6 h-6" /> },
        { title: t.alumni.mentorship, desc: t.alumni.mentorshipDesc, icon: <Users className="w-6 h-6" /> },
    ];

    return (
        <Layout>
            <PageBanner
                title={t.alumni.pageTitle}
                breadcrumbs={[
                    { label: t.nav.home, href: "/" },
                    { label: t.alumni.pageTitle },
                ]}
            />

            {/* Introduction */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t.alumni.introTag}
            </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">{t.alumni.introTitle}</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">{t.alumni.introPara1}</p>
                        <p className="text-muted-foreground leading-relaxed mt-4">{t.alumni.introPara2}</p>
                    </div>
                </div>
            </section>

            {/* Alumni Impact Stats */}
            <section className="py-12 bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {impactStats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-3">
                                    {stat.icon}
                                </div>
                                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Distinguished Alumni - Auto-sliding Carousel */}
            <DistinguishedAlumniCarousel alumni={distinguishedAlumni} batchLabel={t.alumni.batch} tag={t.alumni.distinguishedTag} title={t.alumni.distinguishedTitle} />

            {/* Alumni Committee */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
              <Users className="w-4 h-4 inline mr-1" /> {t.alumni.committeeTag}
            </span>
                        <h2 className="text-3xl font-serif font-bold text-foreground">{t.alumni.committeeTitle}</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{t.alumni.committeeDesc}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {committee.map((m, i) => (
                            <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-foreground">{m.name}</h3>
                                    <p className="text-sm text-primary font-medium mt-1">{m.role}</p>
                                    <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
                                        <Phone className="w-3 h-3" /> {m.contact}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Reunion Events */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
              <Calendar className="w-4 h-4 inline mr-1" /> {t.alumni.reunionTag}
            </span>
                        <h2 className="text-3xl font-serif font-bold text-foreground">{t.alumni.reunionTitle}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {reunionEvents.map((e, i) => (
                            <Card key={i} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-semibold text-primary">{e.date}</span>
                                    </div>
                                    <h3 className="font-bold text-foreground text-lg mb-2">{e.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Gallery */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-foreground">{t.alumni.galleryTitle}</h2>
                        <p className="text-muted-foreground mt-2">{t.alumni.galleryDesc}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {galleryImages.map((src, i) => (
                            <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] group">
                                <img src={src} alt={`Alumni event ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contributions */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-3">
              <Heart className="w-4 h-4 inline mr-1" /> {t.alumni.contributionsTag}
            </span>
                        <h2 className="text-3xl font-serif font-bold text-foreground">{t.alumni.contributionsTitle}</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{t.alumni.contributionsDesc}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {contributions.map((c, i) => (
                            <Card key={i} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                        {c.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Card className="inline-block bg-primary/5 border-primary/20">
                            <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
                                <HandHeart className="w-10 h-10 text-primary" />
                                <div className="text-left">
                                    <h3 className="font-bold text-foreground">{t.alumni.contributeNow}</h3>
                                    <p className="text-sm text-muted-foreground">{t.alumni.contributeDesc}</p>
                                </div>
                                <a href="mailto:alumni.gpcbathinda@gmail.com" className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap">
                                    <Mail className="w-4 h-4" /> {t.alumni.contactAlumniCell}
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Alumni;
