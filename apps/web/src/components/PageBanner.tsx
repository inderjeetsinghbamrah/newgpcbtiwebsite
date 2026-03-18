import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

const PageBanner = ({ title, subtitle, breadcrumbs }: PageBannerProps) => {
  return (
    <section className="bg-gradient-primary text-secondary-foreground py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {breadcrumbs && (
            <div className="flex items-center gap-1 text-xs mb-4 opacity-70">
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3 h-3" />}
                  {b.href ? (
                    <Link to={b.href} className="hover:text-gold transition-colors">{b.label}</Link>
                  ) : (
                    <span>{b.label}</span>
                  )}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          {subtitle && <p className="mt-3 text-lg opacity-80 max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
