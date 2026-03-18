import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Topbar = () => {
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
            Bathinda, Punjab, India
          </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/mandatory-disclosure" className="bg-primary text-primary-foreground px-3 py-0.5 rounded-sm font-semibold hover:opacity-90 transition-opacity animate-pulse">
              📋 AICTE Mandatory Disclosure
            </a>
            <span className="hidden sm:flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Mon-Sat: 9:00 AM - 5:00 PM
          </span>
            <a href="/admin-login" className="bg-accent text-accent-foreground px-3 py-0.5 rounded-sm font-medium hover:opacity-90 transition-opacity">
              Admin Portal
            </a>
          </div>
        </div>
      </div>
  );
};

export default Topbar;
