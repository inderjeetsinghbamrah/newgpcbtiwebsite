import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Topbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
      <div className="bg-topbar text-topbar-foreground text-xs py-2 relative z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            +91-164-2240112
          </span>
            <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            gpc.bathinda@gmail.com
          </span>
            <span className="hidden md:flex items-center gap-1">
            <MapPin className="w-3 h-3" />
              {t.topbar.location}
          </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
                onClick={() => setLang(lang === "en" ? "pa" : "en")}
                className="flex items-center gap-1.5 bg-secondary/20 hover:bg-secondary/40 px-2.5 py-0.5 rounded-sm font-medium transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === "en" ? t.langToggle.pa : t.langToggle.en}</span>
            </button>
            <a href="/mandatory-disclosure" className="bg-primary text-primary-foreground px-3 py-0.5 rounded-sm font-semibold hover:opacity-90 transition-opacity animate-pulse">
              {t.topbar.mandatoryDisclosure}
            </a>
            <span className="hidden sm:flex items-center gap-1">
            <Clock className="w-3 h-3" />
              {t.topbar.hours}
          </span>
            <a href="/admin-login" className="bg-accent text-accent-foreground px-3 py-0.5 rounded-sm font-medium hover:opacity-90 transition-opacity">
              {t.topbar.adminPortal}
            </a>
          </div>
        </div>
      </div>
  );
};

export default Topbar;
