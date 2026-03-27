import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Users, GraduationCap, Award } from "lucide-react";

const facultyStats = [
  { label: "Total Teaching Faculty", value: "45+", icon: <Users className="w-5 h-5" /> },
  { label: "PhD / M.Tech Holders", value: "20+", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Non-Teaching Staff", value: "30+", icon: <Users className="w-5 h-5" /> },
  { label: "Faculty with 10+ Years Exp.", value: "25+", icon: <Award className="w-5 h-5" /> },
];

const departments = [
  { name: "Computer Science & Engineering", faculty: 8, labs: 4 },
  { name: "Civil Engineering", faculty: 6, labs: 3 },
  { name: "Mechanical Engineering", faculty: 7, labs: 4 },
  { name: "Electrical Engineering", faculty: 6, labs: 3 },
  { name: "Electronics & Communication", faculty: 6, labs: 3 },
  { name: "Information Technology", faculty: 4, labs: 2 },
  { name: "Architectural Assistantship", faculty: 3, labs: 2 },
  { name: "Mech. Engg. (Production)", faculty: 3, labs: 2 },
  { name: "D-Pharmacy", faculty: 4, labs: 3 },
  { name: "Applied Sciences", faculty: 5, labs: 2 },
];

const AICTEFaculty = () => {
  return (
    <Layout>
      <PageBanner title="Faculty & Staff Information" subtitle="Qualified and experienced faculty as per AICTE prescribed norms" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {facultyStats.map((stat, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">{stat.icon}</div>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Department-wise */}
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">Department-wise Faculty & Lab Strength</h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Department</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Faculty</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Labs</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dept, idx) => (
                    <tr key={idx} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-3 text-sm text-foreground">{dept.name}</td>
                      <td className="px-4 py-3 text-sm text-center font-medium text-primary">{dept.faculty}</td>
                      <td className="px-4 py-3 text-sm text-center text-muted-foreground">{dept.labs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-muted/50 border border-border rounded-xl p-6">
              <h3 className="font-serif font-bold text-foreground mb-3">AICTE Faculty Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Faculty-to-student ratio maintained as per AICTE norms (1:15 for UG programs)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Regular Faculty Development Programs (FDP) and training</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Qualification norms: B.Tech/M.Tech with relevant experience</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Performance appraisal system in place</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AICTEFaculty;
