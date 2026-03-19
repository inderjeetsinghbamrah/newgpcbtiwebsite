import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, GraduationCap, FlaskConical, Pill, Shield, BookOpen, Users2, Building } from "lucide-react";
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
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileAffiliationsOpen, setMobileAffiliationsOpen] = useState(false);
  const [mobileCampusOpen, setMobileCampusOpen] = useState(false);

  const mega = useDropdown();
  const affDrop = useDropdown();
  const campusDrop = useDropdown();

  const mainLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.admissions, href: "/admissions" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.contact, href: "/contact" },
  ];

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
  ];

  const affiliationLinks = [
    { label: "AICTE", href: "/affiliations/aicte" },
    { label: "PCI", href: "/affiliations/pci" },
    { label: "COA", href: "/affiliations/coa" },
  ];

  const campusLinks = [
    { label: t.nav.students, href: "/students", icon: <Users2 className="w-4 h-4" /> },
    { label: t.nav.clubs, href: "/clubs", icon: <Users2 className="w-4 h-4" /> },
    { label: t.nav.library, href: "/library", icon: <BookOpen className="w-4 h-4" /> },
    { label: t.nav.nss, href: "/nss", icon: <Shield className="w-4 h-4" /> },
    { label: t.nav.facilities, href: "/facilities", icon: <Building className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (mega.ref.current && !mega.ref.current.contains(target)) mega.setOpen(false);
      if (affDrop.ref.current && !affDrop.ref.current.contains(target)) affDrop.setOpen(false);
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
            {mainLinks.slice(0, 2).map((link) => (
                <Link key={link.href} to={link.href} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
                  {link.label}
                </Link>
            ))}

            {/* Academics Mega Menu */}
            <div ref={mega.ref} className="relative" onMouseEnter={mega.enter} onMouseLeave={mega.leave}>
              <button className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${mega.open ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
                {t.nav.academics} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mega.open ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-all duration-200 origin-top ${mega.open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`} style={{ width: "680px" }}>
                <div className="bg-card border border-border rounded-xl shadow-2xl">
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <h3 className="font-serif font-bold text-foreground text-sm">{t.nav.academicDepts}</h3>
                      <Link to="/courses" onClick={() => mega.setOpen(false)} className="ml-auto text-xs text-primary hover:underline flex items-center gap-1">
                        {t.nav.viewAllCourses} <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
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

            {/* Affiliations Dropdown */}
            <div ref={affDrop.ref} className="relative" onMouseEnter={affDrop.enter} onMouseLeave={affDrop.leave}>
              <button className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${affDrop.open ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
                {t.nav.affiliations} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${affDrop.open ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-all duration-200 origin-top ${affDrop.open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                <div className="bg-card border border-border rounded-xl shadow-2xl w-48">
                  <div className="py-2">
                    {affiliationLinks.map((link) => (
                        <Link key={link.href} to={link.href} onClick={() => affDrop.setOpen(false)} className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors">
                          {link.label}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Life Dropdown */}
            <div ref={campusDrop.ref} className="relative" onMouseEnter={campusDrop.enter} onMouseLeave={campusDrop.leave}>
              <button className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${campusDrop.open ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
                {t.nav.campusLife} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${campusDrop.open ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-all duration-200 origin-top ${campusDrop.open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                <div className="bg-card border border-border rounded-xl shadow-2xl w-52">
                  <div className="py-2">
                    {campusLinks.map((link) => (
                        <Link key={link.href} to={link.href} onClick={() => campusDrop.setOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors">
                          <span className="text-muted-foreground">{link.icon}</span>
                          {link.label}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {mainLinks.slice(2).map((link) => (
                <Link key={link.href} to={link.href} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
                  {link.label}
                </Link>
            ))}
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
              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={closeMobile}>{t.nav.about}</Link>

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
                {t.nav.affiliations} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAffiliationsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAffiliationsOpen && (
                  <div className="pl-2 pb-2">
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
                    {campusLinks.map((link) => (
                        <Link key={link.href} to={link.href} className="block px-5 py-1.5 text-xs text-muted-foreground hover:text-primary" onClick={closeMobile}>{link.label}</Link>
                    ))}
                  </div>
              )}

              <Link to="/admissions" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={closeMobile}>{t.nav.admissions}</Link>
              <Link to="/gallery" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={closeMobile}>{t.nav.gallery}</Link>
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md" onClick={closeMobile}>{t.nav.contact}</Link>
            </div>
        )}
      </nav>
  );
};

export default Navbar;
