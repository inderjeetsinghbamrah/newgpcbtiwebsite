import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import RecentActivitiesSection from "@/components/RecentActivitiesSection";
import ScholarshipsSection from "@/components/ScholarshipsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StudentCorner from "@/components/StudentCorner";
import HelpdeskSection from "@/components/HelpdeskSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <FacilitiesSection />
        <RecentActivitiesSection />
        <ScholarshipsSection />
        <TestimonialsSection />
        <StudentCorner />
        <HelpdeskSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
