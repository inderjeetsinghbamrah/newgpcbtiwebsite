import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { FileText, ExternalLink, Shield, Scale } from "lucide-react";

const policies = [
  {
    category: "Academic Policies",
    icon: <FileText className="w-5 h-5 text-primary" />,
    items: [
      "Admission Policy as per AICTE & DTE Punjab norms",
      "Examination & Evaluation Policy (PSBTE guidelines)",
      "Academic Calendar adherence as per AICTE directives",
      "Attendance & Leave Policy for students",
      "Credit transfer & lateral entry regulations",
    ],
  },
  {
    category: "Anti-Ragging Regulations",
    icon: <Shield className="w-5 h-5 text-destructive" />,
    items: [
      "Zero tolerance policy against ragging (UGC Regulation 2009)",
      "Anti-Ragging Squad and Committee constituted as per AICTE norms",
      "Mandatory online anti-ragging undertaking by students & parents",
      "24x7 Anti-Ragging Helpline: 1800-180-5522",
      "Disciplinary action including expulsion for ragging offenders",
    ],
  },
  {
    category: "Gender Sensitization & Women Safety",
    icon: <Scale className="w-5 h-5 text-primary" />,
    items: [
      "Internal Complaint Committee (ICC) as per Sexual Harassment Act 2013",
      "Gender sensitization workshops conducted regularly",
      "Women safety measures and dedicated grievance portal",
      "Equal opportunity policy for all genders",
    ],
  },
  {
    category: "Student Welfare Policies",
    icon: <FileText className="w-5 h-5 text-primary" />,
    items: [
      "SC/ST/OBC welfare committee and support",
      "Differently-abled student support and accessibility",
      "Scholarship facilitation (Post-Matric, Merit-cum-Means)",
      "Student mentoring and counseling programs",
      "Code of conduct and ethical guidelines",
    ],
  },
  {
    category: "Quality Assurance",
    icon: <FileText className="w-5 h-5 text-primary" />,
    items: [
      "AICTE Quality Improvement Programs (QIP)",
      "Faculty Development Programs (FDP) compliance",
      "Mandatory Disclosure as per AICTE norms",
      "Self-Assessment Reports (SAR) submission",
      "Feedback mechanism from stakeholders",
    ],
  },
];

const AICTEPolicies = () => {
  return (
    <Layout>
      <PageBanner title="Policies & Regulations" subtitle="Institutional policies and regulatory compliance as mandated by AICTE" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {policies.map((policy, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="bg-primary/5 border-b border-border px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">{policy.icon}</div>
                  <h3 className="font-serif font-bold text-foreground text-lg">{policy.category}</h3>
                </div>
                <ul className="px-6 py-4 space-y-2.5">
                  {policy.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-muted/50 border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-3">For detailed AICTE regulations, visit:</p>
              <a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm">
                <ExternalLink className="w-4 h-4" /> www.aicte-india.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AICTEPolicies;
