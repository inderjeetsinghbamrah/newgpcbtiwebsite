import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { GraduationCap, Clock, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Diploma in Computer Science & Engineering", duration: "3 Years", intake: 60, code: "cse" },
  { name: "Diploma in Civil Engineering", duration: "3 Years", intake: 60, code: "civil" },
  { name: "Diploma in Mechanical Engineering", duration: "3 Years", intake: 60, code: "mech" },
  { name: "Diploma in Electrical Engineering", duration: "3 Years", intake: 60, code: "eee" },
  { name: "Diploma in Electronics & Comm. Engineering", duration: "3 Years", intake: 60, code: "ece" },
  { name: "Diploma in Information Technology", duration: "3 Years", intake: 30, code: "it" },
  { name: "Diploma in Architectural Assistantship", duration: "3 Years", intake: 30, code: "arch" },
  { name: "Diploma in Mech. Engg. (Production)", duration: "3 Years", intake: 60, code: "mech-prod" },
  { name: "Diploma in Pharmacy", duration: "2 Years", intake: 60, code: "dpharm" },
];

const AICTEAcademics = () => {
  return (
    <Layout>
      <PageBanner title="Academic Information" subtitle="AICTE approved programs, curriculum, and academic governance" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Programs */}
            <h2 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> AICTE Approved Programs
            </h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden mb-12">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Program</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Duration</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Intake</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((prog, idx) => (
                    <tr key={idx} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-3 text-sm text-foreground">{prog.name}</td>
                      <td className="px-4 py-3 text-sm text-center text-muted-foreground">{prog.duration}</td>
                      <td className="px-4 py-3 text-sm text-center font-medium text-primary">{prog.intake}</td>
                      <td className="px-4 py-3 text-sm text-center">
                        <Link to={`/department/${prog.code}`} className="text-primary hover:underline text-xs">View →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Academic Governance */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Academic Calendar
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Odd Semester: August - December</li>
                  <li>• Even Semester: January - June</li>
                  <li>• Examinations conducted by PSBTE</li>
                  <li>• Industrial training during vacation</li>
                  <li>• Minimum 90 working days per semester</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> Curriculum & Syllabus
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Curriculum prescribed by PSBTE & IT</li>
                  <li>• Regular syllabus revision as per industry needs</li>
                  <li>• Practical-oriented learning (60:40 ratio)</li>
                  <li>• Project-based learning in final year</li>
                  <li>• Add-on courses and skill development</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" /> Affiliation & Approval
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AICTE approved since establishment</li>
                  <li>• Affiliated to PSBTE & IT, Chandigarh</li>
                  <li>• Under Dept. of Technical Education, Punjab</li>
                  <li>• PCI approved (D-Pharmacy)</li>
                  <li>• COA approved (Architectural Assistantship)</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" /> Teaching-Learning Process
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ICT-enabled classrooms</li>
                  <li>• NPTEL & SWAYAM online courses</li>
                  <li>• Industry expert guest lectures</li>
                  <li>• Industrial visits and internships</li>
                  <li>• Student mentoring system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AICTEAcademics;
