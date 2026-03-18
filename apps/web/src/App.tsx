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
import MandatoryDisclosure from "./pages/MandatoryDisclosure.tsx";
import Affiliations from "./pages/Affiliations.tsx";

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
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/affiliations/:body" element={<Affiliations />} />
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
