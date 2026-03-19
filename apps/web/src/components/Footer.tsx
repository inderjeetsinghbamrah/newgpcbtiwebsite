import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.footer.aboutUs, href: "/about-us" },
    { label: t.footer.coursesLink, href: "/courses" },
    { label: t.footer.admissionsLink, href: "/admissions" },
    { label: t.footer.faculty, href: "/faculty" },
    { label: t.footer.galleryLink, href: "/gallery" },
    { label: t.footer.contactLink, href: "/contact" },
  ];

  return (
      <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="GPC Bathinda" className="w-12 h-12 object-contain" />
                <div>
                  <p className="font-serif font-bold text-sm">{t.footer.collegeName}</p>
                  <p className="text-xs opacity-70">{t.footer.collegeLocation}</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">{t.footer.aboutText}</p>
              <p className="text-xs mt-3 opacity-60 italic font-serif">{t.footer.motto}</p>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4 text-gold">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className="opacity-80 hover:opacity-100 hover:text-gold transition-all">{l.label}</Link>
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4 text-gold">{t.footer.contactUs}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  <span className="opacity-80">{t.footer.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-gold" />
                  <span className="opacity-80">+91-164-2240112</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-gold" />
                  <span className="opacity-80">gpc.bathinda@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4 text-gold">{t.footer.followUs}</h4>
              <div className="flex gap-3 mb-6">
                {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                ))}
              </div>
              <h4 className="font-serif font-bold mb-2 text-gold text-sm">{t.footer.newsletter}</h4>
              <div className="flex gap-2">
                <input type="email" placeholder={t.footer.emailPlaceholder} className="bg-secondary-foreground/10 border-0 rounded px-3 py-1.5 text-xs flex-1 placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-gold" />
                <button className="bg-gradient-gold text-accent-foreground px-3 py-1.5 rounded text-xs font-medium hover:opacity-90 transition-opacity">{t.footer.subscribe}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs opacity-60">{t.footer.copyright}</p>
            <p className="text-xs opacity-60">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
