import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Topbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
      <div className="bg-topbar text-topbar-foreground text-xs py-2 relative z-50 overflow-hidden">
        <div className="container mx-auto flex items-center justify-between px-4 gap-2">
          <div className="flex items-center gap-3 min-w-0 flex-shrink">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Phone className="w-3 h-3 flex-shrink-0" />
            <span className="hidden sm:inline">+91-164-2240112</span>
          </span>
            <span className="hidden lg:flex items-center gap-1 whitespace-nowrap">
            <Mail className="w-3 h-3 flex-shrink-0" />
            gpc.bathinda@gmail.com
          </span>
            <span className="hidden xl:flex items-center gap-1 whitespace-nowrap">
            <MapPin className="w-3 h-3 flex-shrink-0" />
              {t.topbar.location}
          </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
                onClick={() => setLang(lang === "en" ? "pa" : "en")}
                className="flex items-center gap-1 bg-secondary/20 hover:bg-secondary/40 px-2 py-0.5 rounded-sm font-medium transition-colors whitespace-nowrap"
            >
              <Globe className="w-3 h-3" />
              <span className="hidden sm:inline">{lang === "en" ? t.langToggle.pa : t.langToggle.en}</span>
              <span className="sm:hidden">{lang === "en" ? "ਪੰ" : "EN"}</span>
            </button>
            <a href="/mandatory-disclosure" className="bg-primary text-primary-foreground px-2 sm:px-3 py-0.5 rounded-sm font-semibold hover:opacity-90 transition-opacity animate-pulse whitespace-nowrap text-[10px] sm:text-xs">
              {t.topbar.mandatoryDisclosure}
            </a>
            <span className="hidden lg:flex items-center gap-1 whitespace-nowrap">
            <Clock className="w-3 h-3" />
              {t.topbar.hours}
          </span>
            <a href="/admin-login" className="hidden sm:inline-block bg-accent text-accent-foreground px-2 sm:px-3 py-0.5 rounded-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              {t.topbar.adminPortal}
            </a>
          </div>
        </div>
      </div>
  );
};

export default Topbar;
