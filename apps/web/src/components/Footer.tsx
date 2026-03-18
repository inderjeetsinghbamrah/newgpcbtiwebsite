import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="GPC Bathinda" className="w-12 h-12 object-contain" />
              <div>
                <p className="font-serif font-bold text-sm">Govt. Polytechnic College</p>
                <p className="text-xs opacity-70">Bathinda, Punjab</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Established in 1985, Government Polytechnic College Bathinda is committed to providing quality technical education and producing skilled professionals.
            </p>
            <p className="text-xs mt-3 opacity-60 italic font-serif">"Higher Still Higher"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Courses", "Admissions", "Faculty", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase().replace(/\s/g, "-")}`} className="opacity-80 hover:opacity-100 hover:text-gold transition-all">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span className="opacity-80">Government Polytechnic College, Bathinda, Punjab - 151001</span>
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

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-gold">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <h4 className="font-serif font-bold mb-2 text-gold text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-secondary-foreground/10 border-0 rounded px-3 py-1.5 text-xs flex-1 placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button className="bg-gradient-gold text-accent-foreground px-3 py-1.5 rounded text-xs font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs opacity-60">© 2025 Government Polytechnic College, Bathinda. All rights reserved.</p>
          <p className="text-xs opacity-60">Designed with excellence for education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
