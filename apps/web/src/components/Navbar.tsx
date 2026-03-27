import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, GraduationCap, FlaskConical, Pill, Shield, BookOpen, Users2, Building, AlertTriangle, FileText, ExternalLink, Lightbulb, Wrench, UserCog, Scale, Download, MessageSquare, Award, Monitor, Bell, Trophy as TrophyIcon, Bus, Home, Palette, Beaker, PenTool, Heart, Leaf, Music, Code, Cpu } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enter = useCallback(() => { if (timeout.current) clearTimeout(timeout.current); setOpen(true); }, []);
  const leave = useCallback(() => { timeout.current = setTimeout(() => setOpen(false), 200); }, []);
  return { open, setOpen, ref, enter, leave };
}

const Navbar = () => {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileAffiliationsOpen, setMobileAffiliationsOpen] = useState(false);
  const [mobileCampusOpen, setMobileCampusOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [mobileAICTESubOpen, setMobileAICTESubOpen] = useState("");

  const mega = useDropdown();
  const aboutDrop = useDropdown();
  const aicteDrop = useDropdown();
  const campusDrop = useDropdown();

  const deptGroups = [
    {
      title: t.nav.diplomaEngineering,
      icon: <GraduationCap className="w-4 h-4" />,
      items: [
        { label: t.nav.archAssistantship, href: "/department/arch" },
        { label: t.nav.civilEngineering, href: "/department/civil" },
        { label: t.nav.cse, href: "/department/cse" },
        { label: t.nav.eee, href: "/department/eee" },
        { label: t.nav.ece, href: "/department/ece" },
        { label: t.nav.it, href: "/department/it" },
        { label: t.nav.mech, href: "/department/mech" },
        { label: t.nav.mechProd, href: "/department/mech-prod" },
      ],
    },
    {
      title: t.nav.diplomaPharmacy,
      icon: <Pill className="w-4 h-4" />,
      items: [{ label: t.nav.dPharm, href: "/department/dpharm" }],
    },
    {
      title: t.nav.commonDept,
      icon: <FlaskConical className="w-4 h-4" />,
      items: [{ label: t.nav.appliedSciences, href: "/department/applied-sciences" }],
    },
    {
      title: t.nav.workshopSection,
      icon: <Wrench className="w-4 h-4" />,
      items: [{ label: t.nav.workshop, href: "/workshop" }],
    },
    {
      title: t.nav.officeStaff,
      icon: <UserCog className="w-4 h-4" />,
      items: [{ label: t.nav.officeStaff, href: "/office-staff" }],
    },
  ];

  const aicteSubLinks = [
    { label: "AICTE Approvals", href: "/affiliations/aicte", icon: <Award className="w-4 h-4" /> },
    { label: "Committees", href: "/aicte/committees", icon: <Users2 className="w-4 h-4" /> },
    { label: "Policies & Regulations", href: "/aicte/policies", icon: <Scale className="w-4 h-4" /> },
    { label: "Infrastructure & Facilities", href: "/aicte/infrastructure", icon: <Building className="w-4 h-4" /> },
    { label: "Faculty & Staff", href: "/aicte/faculty", icon: <Users2 className="w-4 h-4" /> },
    { label: "Academic Information", href: "/aicte/academics", icon: <GraduationCap className="w-4 h-4" /> },
    { label: "Innovation Initiatives", href: "/iic", icon: <Lightbulb className="w-4 h-4" /> },
    { label: "Downloads / Documents", href: "/aicte/downloads", icon: <Download className="w-4 h-4" /> },
    { label: "Grievance Portal", href: "/aicte/grievance", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const affiliationLinks = [
    { label: "PCI", href: "/affiliations/pci" },
    { label: "COA", href: "/affiliations/coa" },
  ];

  const campusLifeSections = [
    {
      title: "Student Corner",
      links: [
        { label: "Notices & News", href: "/students", icon: <Bell className="w-4 h-4" /> },
        { label: "Results", href: "/results", icon: <FileText className="w-4 h-4" /> },
        { label: "Scholarships", href: "/students#scholarships", icon: <GraduationCap className="w-4 h-4" /> },
        { label: "Grievance", href: "/aicte/grievance", icon: <MessageSquare className="w-4 h-4" /> },
      ],
    },
    {
      title: "Facilities",
      links: [
        { label: "Library", href: "/library", icon: <BookOpen className="w-4 h-4" /> },
        { label: "Hostel", href: "/hostel", icon: <Home className="w-4 h-4" /> },
        { label: "Transport", href: "/transport", icon: <Bus className="w-4 h-4" /> },
        { label: "Sports", href: "/sports", icon: <TrophyIcon className="w-4 h-4" /> },
      ],
    },
    {
      title: "Clubs & Activities",
      links: [
        { label: "Science Club", href: "/clubs#science", icon: <Beaker className="w-4 h-4" /> },
        { label: "Literary Club", href: "/clubs#literary", icon: <PenTool className="w-4 h-4" /> },
        { label: "Art & Hobby Club", href: "/clubs#art", icon: <Palette className="w-4 h-4" /> },
        { label: "NSS Unit", href: "/nss", icon: <Heart className="w-4 h-4" /> },
        { label: "All Clubs", href: "/clubs", icon: <Users2 className="w-4 h-4" /> },
      ],
    },
    {
      title: "Alumni",
      links: [
        { label: "Alumni Network", href: "/alumni", icon: <Users2 className="w-4 h-4" /> },
      ],
    },
  ];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (mega.ref.current && !mega.ref.current.contains(target)) mega.setOpen(false);
      if (aboutDrop.ref.current && !aboutDrop.ref.current.contains(target)) aboutDrop.setOpen(false);
      if (aicteDrop.ref.current && !aicteDrop.ref.current.contains(target)) aicteDrop.setOpen(false);
      if (campusDrop.ref.current && !campusDrop.ref.current.contains(target)) campusDrop.setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="GPC Bathinda Logo" className="w-14 h-14 object-contain" />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-primary font-serif leading-tight">{t.nav.collegeName}</p>
            <p className="text-xs text-muted-foreground">{t.nav.collegeSubtitle}</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
            {t.nav.home}
          </Link>

          {/* About Dropdown */}
          <div ref={aboutDrop.ref} className="relative" onMouseEnter={aboutDrop.enter} onMouseLeave={aboutDrop.leave}>
            <button className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${aboutDrop.open ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
              {t.nav.about} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${aboutDrop.open ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-all duration-200 origin-top ${aboutDrop.open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
              <div className="bg-card border border-border rounded-xl shadow-2xl w-56">
                <div className="py-2">
                  <Link to="/about" onClick={() => aboutDrop.setOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors">
                    <Building className="w-4 h-4 text-muted-foreground" /> {t.nav.about}
                  </Link>
                  <Link to="/anti-ragging" onClick={() => aboutDrop.setOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:text-destructive hover:bg-destructive/5 transition-colors">
                    <AlertTriangle className="w-4 h-4 text-destructive" /> {t.nav2.antiRagging}
                  </Link>
                  <Link to="/general-rules" onClick={() => aboutDrop.setOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors">
                    <FileText className="w-4 h-4 text-muted-foreground" /> {t.nav2.generalRules}
                  </Link>
                  <div className="border-t border-border my-1" />
                  <Link to="/useful-links" onClick={() => aboutDrop.setOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" /> {t.usefulLinks.pageTitle}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Departments Mega Menu */}
          <div ref={mega.ref} className="relative" onMouseEnter={mega.enter} onMouseLeave={mega.leave}>
            <button className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${mega.open ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
              {t.nav.academics} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mega.open ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-all duration-200 origin-top ${mega.open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`} style={{ width: "820px" }}>
              <div className="bg-card border border-border rounded-xl shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="font-serif font-bold text-foreground text-sm">{t.nav.academicDepts}</h3>
                    <Link to="/courses" onClick={() => mega.setOpen(false)} className="ml-auto text-xs text-primary hover:underline flex items-center gap-1">
                      {t.nav.viewAllCourses} <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-5 gap-5">
                    {deptGroups.map((group) => (
                      <div key={group.title}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-primary">{group.icon}</span>
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{group.title}</h4>
                        </div>
                        <ul className="space-y-0.5">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link to={item.href} onClick={() => mega.setOpen(false)} className="block px-2.5 py-1.5 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AICTE Mega Menu */}
          <div ref={aicteDrop.ref} className="relative" onMouseEnter={aicteDrop.enter} onMouseLeave={aicteDrop.leave}>
            <button className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${aicteDrop.open ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
              Affiliations <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${aicteDrop.open ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-all duration-200 origin-top ${aicteDrop.open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
              <div className="bg-card border border-border rounded-xl shadow-2xl w-72">
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-border mb-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">AICTE Compliance & Information</p>
                  </div>
                  {aicteSubLinks.map((link) => (
                    <Link key={link.href} to={link.href} onClick={() => aicteDrop.setOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors">
                      <span className="text-muted-foreground">{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-border my-1" />
                  <div className="px-4 py-1.5">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Other Affiliations</p>
                  </div>
                  {affiliationLinks.map((link) => (
                    <Link key={link.href} to={link.href} onClick={() => aicteDrop.setOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Campus Life Mega Menu */}
          <div ref={campusDrop.ref} className="relative" onMouseEnter={campusDrop.enter} onMouseLeave={campusDrop.leave}>
            <button className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${campusDrop.open ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
              {t.nav.campusLife} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${campusDrop.open ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full right-0 pt-1 z-50 transition-all duration-200 origin-top ${campusDrop.open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`} style={{ width: "680px" }}>
              <div className="bg-card border border-border rounded-xl shadow-2xl">
                <div className="p-5">
                  <div className="grid grid-cols-4 gap-5">
                    {campusLifeSections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 pb-2 border-b border-border">{section.title}</h4>
                        <ul className="space-y-0.5">
                          {section.links.map((link) => (
                            <li key={link.href + link.label}>
                              <Link to={link.href} onClick={() => campusDrop.setOpen(false)} className="flex items-center gap-2 px-2 py-1.5 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                                <span className="text-muted-foreground">{link.icon}</span>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/admissions" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
            {t.nav.admissions}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-border rounded-md bg-muted/50">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.nav.aicteApproved}</span>
          </div>
          <button className="lg:hidden p-2 text-foreground hover:text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 py-4 space-y-1 animate-fade-in max-h-[80vh] overflow-y-auto">
          <Link to="/" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={closeMobile}>{t.nav.home}</Link>

          <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={() => setMobileAboutOpen(!mobileAboutOpen)}>
            {t.nav.about} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileAboutOpen && (
            <div className="pl-2 pb-2">
              <Link to="/about" className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary" onClick={closeMobile}>{t.nav.about}</Link>
              <Link to="/anti-ragging" className="block px-5 py-1.5 text-xs text-destructive font-semibold hover:text-destructive/80" onClick={closeMobile}>⚠ {t.nav2.antiRagging}</Link>
              <Link to="/general-rules" className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary" onClick={closeMobile}>📋 {t.nav2.generalRules}</Link>
              <Link to="/useful-links" className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary" onClick={closeMobile}>🔗 {t.usefulLinks.pageTitle}</Link>
            </div>
          )}

          <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}>
            {t.nav.academics} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAcademicsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileAcademicsOpen && (
            <div className="pl-2 space-y-3 pb-2">
              <Link to="/courses" className="block px-3 py-1.5 text-xs font-semibold text-primary" onClick={closeMobile}>→ {t.nav.viewAllCourses}</Link>
              {deptGroups.map((group) => (
                <div key={group.title}>
                  <p className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{group.title}</p>
                  {group.items.map((item) => (
                    <Link key={item.href} to={item.href} className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary" onClick={closeMobile}>{item.label}</Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={() => setMobileAffiliationsOpen(!mobileAffiliationsOpen)}>
            Affiliations <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAffiliationsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileAffiliationsOpen && (
            <div className="pl-2 pb-2">
              <p className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">AICTE</p>
              {aicteSubLinks.map((link) => (
                <Link key={link.href} to={link.href} className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary" onClick={closeMobile}>{link.label}</Link>
              ))}
              <div className="border-t border-border my-2 mx-3" />
              <p className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Other Affiliations</p>
              {affiliationLinks.map((link) => (
                <Link key={link.href} to={link.href} className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary" onClick={closeMobile}>{link.label}</Link>
              ))}
            </div>
          )}

          <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={() => setMobileCampusOpen(!mobileCampusOpen)}>
            {t.nav.campusLife} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCampusOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileCampusOpen && (
            <div className="pl-2 pb-2">
              {campusLifeSections.map((section) => (
                <div key={section.title}>
                  <p className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-2">{section.title}</p>
                  {section.links.map((link) => (
                    <Link key={link.href + link.label} to={link.href} className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary" onClick={closeMobile}>{link.label}</Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          <Link to="/admissions" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={closeMobile}>{t.nav.admissions}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
