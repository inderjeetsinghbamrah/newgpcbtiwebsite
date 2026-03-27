import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { FileText, Download, ExternalLink } from "lucide-react";

const documents = [
  {
    category: "AICTE Approvals & EOA",
    items: [
      { title: "AICTE Extension of Approval (EOA) 2024-25", type: "PDF", link: "#" },
      { title: "AICTE Extension of Approval (EOA) 2023-24", type: "PDF", link: "#" },
      { title: "AICTE Extension of Approval (EOA) 2022-23", type: "PDF", link: "#" },
      { title: "AICTE Approval Letter (Original)", type: "PDF", link: "#" },
    ],
  },
  {
    category: "Mandatory Disclosure",
    items: [
      { title: "AICTE Mandatory Disclosure 2024-25", type: "PDF", link: "/mandatory-disclosure" },
      { title: "Annual Report 2023-24", type: "PDF", link: "#" },
      { title: "Audited Financial Statements", type: "PDF", link: "#" },
    ],
  },
  {
    category: "PSBTE Affiliation",
    items: [
      { title: "PSBTE Affiliation Certificate", type: "PDF", link: "#" },
      { title: "PSBTE Examination Schedule", type: "PDF", link: "#" },
      { title: "Syllabus & Curriculum Documents", type: "External", link: "https://psbte.ac.in" },
    ],
  },
  {
    category: "Anti-Ragging & Compliance",
    items: [
      { title: "Anti-Ragging Committee Constitution", type: "PDF", link: "#" },
      { title: "UGC Anti-Ragging Regulations 2009", type: "PDF", link: "#" },
      { title: "Anti-Ragging Undertaking Form", type: "PDF", link: "#" },
      { title: "ICC (Internal Complaint Committee) Order", type: "PDF", link: "#" },
    ],
  },
  {
    category: "Grievance & Feedback",
    items: [
      { title: "Student Grievance Redressal Form", type: "PDF", link: "#" },
      { title: "Feedback Form (Students)", type: "PDF", link: "#" },
      { title: "Feedback Form (Parents)", type: "PDF", link: "#" },
      { title: "Feedback Form (Employers)", type: "PDF", link: "#" },
    ],
  },
  {
    category: "Other Important Documents",
    items: [
      { title: "Building Plan & Land Documents", type: "PDF", link: "#" },
      { title: "Fire Safety Certificate", type: "PDF", link: "#" },
      { title: "Faculty List with Qualifications", type: "PDF", link: "#" },
      { title: "Lab Equipment Inventory", type: "PDF", link: "#" },
    ],
  },
];

const AICTEDownloads = () => {
  return (
    <Layout>
      <PageBanner title="Downloads & Documents" subtitle="Important documents, forms, and regulatory compliance files" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {documents.map((section, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="bg-primary/5 border-b border-border px-6 py-3">
                  <h3 className="font-serif font-bold text-foreground flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    {section.category}
                  </h3>
                </div>
                <div className="divide-y divide-border/50">
                  {section.items.map((item, iIdx) => (
                    <a
                      key={iIdx}
                      href={item.link}
                      target={item.type === "External" ? "_blank" : undefined}
                      rel={item.type === "External" ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between px-6 py-3 hover:bg-muted/30 transition-colors group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        {item.type === "External" ? (
                          <><ExternalLink className="w-3.5 h-3.5" /> Visit</>
                        ) : (
                          <><Download className="w-3.5 h-3.5" /> {item.type}</>
                        )}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AICTEDownloads;
