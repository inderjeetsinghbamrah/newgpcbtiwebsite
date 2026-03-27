import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Users, Award, Shield, BookOpen } from "lucide-react";

const committees = [
  {
    name: "AICTE Compliance Committee",
    role: "Ensures adherence to AICTE norms and guidelines",
    members: [
      { name: "Er. Principal", designation: "Chairperson" },
      { name: "HOD (CSE)", designation: "Member Secretary" },
      { name: "HOD (Civil)", designation: "Member" },
      { name: "HOD (Mech)", designation: "Member" },
      { name: "HOD (ECE)", designation: "Member" },
      { name: "HOD (EE)", designation: "Member" },
    ],
  },
  {
    name: "Anti-Ragging Committee",
    role: "Prevention and action against ragging as per AICTE/UGC guidelines",
    members: [
      { name: "Er. Principal", designation: "Chairperson" },
      { name: "Senior Faculty Member", designation: "Convener" },
      { name: "District Police Representative", designation: "External Member" },
      { name: "NGO Representative", designation: "External Member" },
      { name: "Student Representative (Final Year)", designation: "Student Member" },
    ],
  },
  {
    name: "Grievance Redressal Committee",
    role: "Addresses student and staff grievances as per AICTE mandate",
    members: [
      { name: "Er. Principal", designation: "Chairperson" },
      { name: "Senior Faculty", designation: "Member" },
      { name: "Administrative Officer", designation: "Member" },
      { name: "Student Representative", designation: "Student Member" },
    ],
  },
  {
    name: "Internal Complaint Committee (ICC)",
    role: "Handles complaints related to sexual harassment as per AICTE/UGC guidelines",
    members: [
      { name: "Senior Woman Faculty", designation: "Presiding Officer" },
      { name: "Faculty Member", designation: "Member" },
      { name: "Non-Teaching Staff", designation: "Member" },
      { name: "External Woman Member (NGO)", designation: "External Member" },
    ],
  },
  {
    name: "SC/ST Committee",
    role: "Welfare and grievance redressal of SC/ST students and staff",
    members: [
      { name: "Er. Principal", designation: "Chairperson" },
      { name: "SC/ST Faculty Member", designation: "Convener" },
      { name: "Faculty Representative", designation: "Member" },
      { name: "Student Representative", designation: "Student Member" },
    ],
  },
  {
    name: "Library Committee",
    role: "Procurement of books, journals, and digital resources as per AICTE norms",
    members: [
      { name: "Er. Principal", designation: "Chairperson" },
      { name: "Librarian", designation: "Convener" },
      { name: "HOD Representatives", designation: "Members" },
      { name: "Student Representative", designation: "Student Member" },
    ],
  },
];

const AICTECommittees = () => {
  return (
    <Layout>
      <PageBanner title="AICTE Committees" subtitle="Mandatory committees as per AICTE guidelines for quality assurance and governance" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {committees.map((committee, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="bg-primary/5 border-b border-border px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground text-lg">{committee.name}</h3>
                      <p className="text-sm text-muted-foreground">{committee.role}</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name / Position</th>
                        <th className="text-left py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {committee.members.map((member, mIdx) => (
                        <tr key={mIdx} className="border-b border-border/50 last:border-0">
                          <td className="py-2.5 text-sm text-foreground">{member.name}</td>
                          <td className="py-2.5 text-sm text-muted-foreground">{member.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AICTECommittees;
