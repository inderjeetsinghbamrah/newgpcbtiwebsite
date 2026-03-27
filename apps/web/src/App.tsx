import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Courses from "./pages/Courses.tsx";
import Admissions from "./pages/Admissions.tsx";
import Faculty from "./pages/Faculty.tsx";
import Students from "./pages/Students.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";
import News from "./pages/News.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import NotFound from "./pages/NotFound.tsx";
import DepartmentPage from "./pages/DepartmentPage.tsx";
import Clubs from "./pages/Clubs.tsx";
import Library from "./pages/Library.tsx";
import NSS from "./pages/NSS.tsx";
import Facilities from "./pages/Facilities.tsx";
import Hostel from "./pages/Hostel.tsx";
import Transport from "./pages/Transport.tsx";
import Sports from "./pages/Sports.tsx";
import Results from "./pages/Results.tsx";
import MandatoryDisclosure from "./pages/MandatoryDisclosure.tsx";
import Affiliations from "./pages/Affiliations.tsx";
import Alumni from "./pages/Alumni.tsx";
import AntiRagging from "./pages/AntiRagging.tsx";
import GeneralRules from "./pages/GeneralRules.tsx";
import UsefulLinks from "./pages/UsefulLinks.tsx";
import IICPage from "./pages/IICPage.tsx";
import OfficeStaff from "./pages/OfficeStaff.tsx";
import Workshop from "./pages/Workshop.tsx";
import AICTECommittees from "./pages/AICTECommittees.tsx";
import AICTEPolicies from "./pages/AICTEPolicies.tsx";
import AICTEInfrastructure from "./pages/AICTEInfrastructure.tsx";
import AICTEFaculty from "./pages/AICTEFaculty.tsx";
import AICTEAcademics from "./pages/AICTEAcademics.tsx";
import AICTEDownloads from "./pages/AICTEDownloads.tsx";
import GrievancePortal from "./pages/GrievancePortal.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/department/:id" element={<DepartmentPage />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/library" element={<Library />} />
          <Route path="/nss" element={<NSS />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/results" element={<Results />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/affiliations/:body" element={<Affiliations />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/anti-ragging" element={<AntiRagging />} />
          <Route path="/general-rules" element={<GeneralRules />} />
          <Route path="/useful-links" element={<UsefulLinks />} />
          <Route path="/office-staff" element={<OfficeStaff />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/iic" element={<IICPage />} />
          <Route path="/aicte/committees" element={<AICTECommittees />} />
          <Route path="/aicte/policies" element={<AICTEPolicies />} />
          <Route path="/aicte/infrastructure" element={<AICTEInfrastructure />} />
          <Route path="/aicte/faculty" element={<AICTEFaculty />} />
          <Route path="/aicte/academics" element={<AICTEAcademics />} />
          <Route path="/aicte/downloads" element={<AICTEDownloads />} />
          <Route path="/aicte/grievance" element={<GrievancePortal />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
