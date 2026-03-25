import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Users, FileText, Calendar as CalendarIcon, Camera, BarChart3, ExternalLink, ChevronLeft, ChevronRight, Download, Clock, MapPin, X } from "lucide-react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { useLanguage } from "@/contexts/LanguageContext";

// IIC Activity Calendar Data for 2025-26
const calendarActivities: Record<string, { title: string; type: string }[]> = {
    "2025-04-15": [{ title: "IIC Orientation Program", type: "meeting" }],
    "2025-05-10": [{ title: "Ideation Workshop", type: "workshop" }],
    "2025-06-20": [{ title: "Innovation Ambassador Training", type: "training" }],
    "2025-07-05": [{ title: "Q1 Review Meeting", type: "meeting" }],
    "2025-08-15": [{ title: "Independence Day Innovation Expo", type: "event" }],
    "2025-09-12": [{ title: "IPR & Patent Awareness Seminar", type: "workshop" }],
    "2025-10-03": [{ title: "Q2 Review Meeting", type: "meeting" }],
    "2025-10-15": [{ title: "National Innovation Day Celebration", type: "event" }],
    "2025-11-20": [{ title: "Startup Mentorship Session", type: "workshop" }],
    "2025-12-10": [{ title: "Hackathon — InnoVate 2025", type: "event" }],
    "2026-01-09": [{ title: "Q3 Review Meeting", type: "meeting" }],
    "2026-01-25": [{ title: "National Voters Day Innovation Rally", type: "event" }],
    "2026-02-14": [{ title: "Design Thinking Workshop", type: "workshop" }],
    "2026-03-05": [{ title: "Q4 Review & Annual Report", type: "meeting" }],
    "2026-03-20": [{ title: "Innovation Awards Ceremony", type: "event" }],
};

const typeColors: Record<string, string> = {
    meeting: "bg-primary/10 text-primary border-primary/30",
    workshop: "bg-gold/10 text-gold border-gold/30",
    training: "bg-accent/10 text-accent-foreground border-accent/30",
    event: "bg-destructive/10 text-destructive border-destructive/30",
};

const typeLabels: Record<string, string> = {
    meeting: "Meeting",
    workshop: "Workshop",
    training: "Training",
    event: "Event",
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const collegeCommittee = [
    { name: "Er. Principal", role: "Chairperson / President", dept: "Administration" },
    { name: "Er. Rajveer Singh", role: "IIC Convener", dept: "Computer Science & Engg." },
    { name: "Er. Harpreet Kaur", role: "Vice President", dept: "Electronics & Comm. Engg." },
    { name: "Er. Gurpreet Singh", role: "Innovation Activity Coordinator", dept: "Mechanical Engineering" },
    { name: "Er. Amandeep Kaur", role: "IPR & Startup Coordinator", dept: "Information Technology" },
    { name: "Er. Navjot Singh", role: "Social Media & Outreach", dept: "Electrical Engineering" },
];

const studentCommittee = [
    { name: "Harmanpreet Singh", role: "Student President", branch: "CSE, 3rd Year" },
    { name: "Simranpreet Kaur", role: "Student Vice President", branch: "ECE, 3rd Year" },
    { name: "Gurleen Singh", role: "Technical Lead", branch: "IT, 2nd Year" },
    { name: "Jasleen Kaur", role: "Event Coordinator", branch: "Civil, 3rd Year" },
    { name: "Arshdeep Singh", role: "Documentation Head", branch: "Mech, 2nd Year" },
    { name: "Manpreet Kaur", role: "Social Media Lead", branch: "EE, 2nd Year" },
];

const quarterlyReports = [
    { quarter: "Q1 (Apr–Jun 2025)", title: "Orientation & Foundation Activities", highlights: "IIC orientation for 200+ students, Innovation Ambassador selection, MoU with local startup incubator.", status: "Completed", pdf: "/reports/iic-report-q1-2025-26.pdf" },
    { quarter: "Q2 (Jul–Sep 2025)", title: "Ideation & IPR Activities", highlights: "2 IPR workshops, 1 patent awareness seminar, 15 student ideas submitted to MHRD portal.", status: "Completed", pdf: "/reports/iic-report-q2-2025-26.pdf" },
    { quarter: "Q3 (Oct–Dec 2025)", title: "Innovation & Hackathon Season", highlights: "InnoVate 2025 Hackathon (120 participants), National Innovation Day celebration, 3 startup pitches.", status: "Completed", pdf: "/reports/iic-report-q3-2025-26.pdf" },
    { quarter: "Q4 (Jan–Mar 2026)", title: "Review & Awards", highlights: "Annual review, innovation awards, best project showcase, annual report submission to MHRD.", status: "Upcoming", pdf: "/reports/iic-report-q4-2025-26.pdf" },
];

const circulars = [
    { title: "IIC Calendar of Activities 2025-26", date: "2025-04-01" },
    { title: "MHRD Innovation Cell — IIC 6.0 Guidelines", date: "2025-03-15" },
    { title: "Innovation Ambassador Training Nomination", date: "2025-05-20" },
    { title: "Hackathon InnoVate 2025 — Circular", date: "2025-11-01" },
    { title: "Annual Performance Report Submission Guidelines", date: "2026-02-15" },
];

const galleryImages = [
    { caption: "IIC Orientation Program 2025" },
    { caption: "Innovation Ambassador Training" },
    { caption: "IPR & Patent Awareness Seminar" },
    { caption: "Hackathon InnoVate 2025" },
    { caption: "National Innovation Day Celebration" },
    { caption: "Startup Mentorship Session" },
];

function MiniCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)); // Start Apr 2025

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);

    const getActivity = (day: number) => {
        const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return calendarActivities[key] || null;
    };

    return (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="bg-primary/5 px-5 py-3 flex items-center justify-between border-b border-border">
                <button onClick={prevMonth} className="p-1 hover:bg-muted rounded-md transition-colors">
                    <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <h3 className="font-serif font-bold text-foreground text-sm">{months[month]} {year}</h3>
                <button onClick={nextMonth} className="p-1 hover:bg-muted rounded-md transition-colors">
                    <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                        <div key={d} className="text-center text-[10px] font-bold text-muted-foreground uppercase">{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {days.map((day, i) => {
                        if (!day) return <div key={`empty-${i}`} />;
                        const activity = getActivity(day);
                        return (
                            <div key={day} className={`relative text-center py-1.5 text-xs rounded-md transition-all ${activity ? "font-bold cursor-pointer hover:scale-110" : "text-muted-foreground"}`} title={activity?.[0]?.title}>
                                {day}
                                {activity && (
                                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${activity[0].type === "meeting" ? "bg-primary" : activity[0].type === "workshop" ? "bg-gold" : activity[0].type === "event" ? "bg-destructive" : "bg-accent"}`} />
                                )}
                            </div>
                        );
                    })}
                </div>
                {/* Legend */}
                <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-border">
                    {Object.entries(typeLabels).map(([key, label]) => (
                        <div key={key} className="flex items-center gap-1.5">
                            <div className={`w-2.5 h-2.5 rounded-full ${key === "meeting" ? "bg-primary" : key === "workshop" ? "bg-gold" : key === "event" ? "bg-destructive" : "bg-accent"}`} />
                            <span className="text-[10px] text-muted-foreground">{label}</span>
                        </div>
                    ))}
                </div>
                {/* Activities this month */}
                <div className="mt-3 space-y-1.5">
                    {Object.entries(calendarActivities)
                        .filter(([date]) => {
                            const d = new Date(date);
                            return d.getMonth() === month && d.getFullYear() === year;
                        })
                        .map(([date, acts]) => (
                            <div key={date} className={`text-xs px-2.5 py-1.5 rounded-md border ${typeColors[acts[0].type]}`}>
                                <span className="font-semibold">{new Date(date).getDate()} {months[month].slice(0, 3)}</span> — {acts[0].title}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

const IICPage = () => {
    const { t } = useLanguage();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIdx, setLightboxIdx] = useState(0);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Topbar />
            <Navbar />
            <main className="flex-1">
                <PageBanner title={t.iic.pageTitle} />

                {/* Introduction */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid lg:grid-cols-5 gap-10">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                                <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t.iic.introTag}</span>
                                <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-serif">{t.iic.introTitle}</h2>
                                <div className="w-16 h-1 bg-gradient-gold rounded mb-6" />
                                <p className="text-muted-foreground leading-relaxed mb-4">{t.iic.introPara1}</p>
                                <p className="text-muted-foreground leading-relaxed mb-4">{t.iic.introPara2}</p>
                                <div className="flex flex-wrap gap-3 mt-6">
                                    <a href="https://iic.mic.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                                        <ExternalLink className="w-4 h-4" /> {t.iic.visitPortal}
                                    </a>
                                    <a href="https://mic.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card border border-border text-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
                                        <Lightbulb className="w-4 h-4" /> {t.iic.micPortal}
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { val: "6.0", label: t.iic.iicVersion },
                                        { val: "200+", label: t.iic.studentsEngaged },
                                        { val: "15+", label: t.iic.activitiesConducted },
                                        { val: "5", label: t.iic.startupsIncubated },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-card p-4 rounded-xl border border-border text-center hover:shadow-md transition-all">
                                            <p className="text-2xl font-bold text-primary font-serif">{stat.val}</p>
                                            <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* College Committee */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.iic.collegeCommitteeTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {collegeCommittee.map((m, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-5 rounded-xl border border-border hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="font-semibold text-foreground text-sm">{m.name}</p>
                                    <p className="text-xs text-primary font-medium">{m.role}</p>
                                    <p className="text-[10px] text-muted-foreground mt-1">{m.dept}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Student Committee */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.iic.studentCommitteeTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {studentCommittee.map((m, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-5 rounded-xl border border-border hover:shadow-md transition-all">
                                    <p className="font-semibold text-foreground text-sm">{m.name}</p>
                                    <p className="text-xs text-primary font-medium">{m.role}</p>
                                    <p className="text-[10px] text-muted-foreground mt-1">{m.branch}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Calendar & Circulars */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.iic.calendarTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <MiniCalendar />
                            <div>
                                <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-gold" /> {t.iic.circularsTitle}
                                </h3>
                                <div className="space-y-3">
                                    {circulars.map((c, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-4 rounded-lg border border-border flex items-center justify-between hover:shadow-md transition-all">
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-4 h-4 text-gold shrink-0" />
                                                <div>
                                                    <p className="text-sm font-semibold text-foreground">{c.title}</p>
                                                    <p className="text-xs text-muted-foreground">{c.date}</p>
                                                </div>
                                            </div>
                                            <button className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-gold transition-colors">
                                                <Download className="w-3.5 h-3.5" /> PDF
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quarterly Reports */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.iic.reportsTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {quarterlyReports.map((r, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
                                    <div className="bg-primary/5 px-5 py-3 flex items-center justify-between border-b border-border">
                                        <div className="flex items-center gap-2">
                                            <BarChart3 className="w-4 h-4 text-primary" />
                                            <h4 className="font-serif font-bold text-foreground text-sm">{r.quarter}</h4>
                                        </div>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.status === "Completed" ? "bg-primary/10 text-primary" : "bg-gold/10 text-gold"}`}>{r.status}</span>
                                    </div>
                                    <div className="p-5">
                                        <h5 className="font-semibold text-foreground text-sm mb-2">{r.title}</h5>
                                        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{r.highlights}</p>
                                        <a href={r.pdf} download className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                                            <Download className="w-3.5 h-3.5" /> Download Report (PDF)
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.iic.galleryTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryImages.map((img, i) => (
                                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group cursor-pointer" onClick={() => { setLightboxIdx(i); setLightboxOpen(true); }}>
                                    <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 border border-border overflow-hidden flex items-center justify-center group-hover:shadow-lg transition-all">
                                        <div className="text-center p-4">
                                            <Camera className="w-8 h-8 text-primary/30 mx-auto mb-2" />
                                            <p className="text-xs text-muted-foreground">{img.caption}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lightbox */}
                <AnimatePresence>
                    {lightboxOpen && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-card rounded-xl border border-border max-w-lg w-full p-8 text-center" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 p-2 bg-muted rounded-full hover:bg-destructive/10 transition-colors">
                                    <X className="w-5 h-5 text-foreground" />
                                </button>
                                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mb-4">
                                    <Camera className="w-16 h-16 text-primary/20" />
                                </div>
                                <p className="text-sm font-semibold text-foreground">{galleryImages[lightboxIdx]?.caption}</p>
                                <div className="flex justify-center gap-4 mt-4">
                                    <button onClick={() => setLightboxIdx((lightboxIdx - 1 + galleryImages.length) % galleryImages.length)} className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors">
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button onClick={() => setLightboxIdx((lightboxIdx + 1) % galleryImages.length)} className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Meetings Held */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-foreground font-serif">{t.iic.meetingsTitle}</h2>
                            <div className="w-16 h-1 bg-gradient-gold rounded mx-auto mt-3" />
                        </motion.div>
                        <div className="space-y-4">
                            {[
                                { date: "April 15, 2025", title: "1st IIC Meeting — Orientation & Action Plan", agenda: "Formation of committees, activity calendar finalization, role assignment, budget allocation.", venue: "Conference Hall" },
                                { date: "July 5, 2025", title: "2nd IIC Meeting — Q1 Review", agenda: "Review of Q1 activities, innovation ambassador feedback, upcoming IPR workshop planning.", venue: "Seminar Hall" },
                                { date: "October 3, 2025", title: "3rd IIC Meeting — Q2 Review & Hackathon Planning", agenda: "Q2 performance review, InnoVate 2025 hackathon logistics, startup mentorship program launch.", venue: "Conference Hall" },
                                { date: "January 9, 2026", title: "4th IIC Meeting — Q3 Review", agenda: "Q3 activities assessment, innovation awards criteria, annual report preparation.", venue: "Seminar Hall" },
                                { date: "March 5, 2026", title: "5th IIC Meeting — Annual Review & Awards", agenda: "Annual performance evaluation, best innovation awards, next year planning, MHRD submission.", venue: "Auditorium" },
                            ].map((m, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-5 rounded-xl border border-border hover:shadow-md transition-all">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                        <div>
                                            <h4 className="font-semibold text-foreground text-sm">{m.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1"><strong>Agenda:</strong> {m.agenda}</p>
                                        </div>
                                        <div className="shrink-0 flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1 text-xs text-primary font-semibold">
                        <Clock className="w-3 h-3" /> {m.date}
                      </span>
                                            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <MapPin className="w-3 h-3" /> {m.venue}
                      </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default IICPage;
