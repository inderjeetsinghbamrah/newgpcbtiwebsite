import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, ExternalLink, Shield, Users, AlertTriangle } from "lucide-react";

const grievanceCells = [
  {
    title: "Student Grievance Redressal Cell",
    description: "For academic, administrative, and infrastructure-related grievances of students.",
    contact: "Principal, GPC Bathinda",
    email: "gpcbathinda@gmail.com",
    phone: "0164-2240613",
  },
  {
    title: "Anti-Ragging Cell",
    description: "Report ragging incidents. Zero tolerance policy as per UGC/AICTE norms.",
    contact: "Anti-Ragging Committee Convener",
    email: "gpcbathinda@gmail.com",
    phone: "1800-180-5522 (National Helpline)",
  },
  {
    title: "Internal Complaint Committee (ICC)",
    description: "For complaints related to sexual harassment at workplace as per POSH Act 2013.",
    contact: "ICC Presiding Officer",
    email: "gpcbathinda@gmail.com",
    phone: "0164-2240613",
  },
  {
    title: "SC/ST Grievance Cell",
    description: "Welfare and grievance redressal for SC/ST students and employees.",
    contact: "SC/ST Cell Convener",
    email: "gpcbathinda@gmail.com",
    phone: "0164-2240613",
  },
];

const externalPortals = [
  { name: "AICTE Grievance Portal", url: "https://www.aicte-india.org/feedback/Ede.php", icon: <ExternalLink className="w-4 h-4" /> },
  { name: "Anti-Ragging Portal (UGC)", url: "https://www.antiragging.in", icon: <Shield className="w-4 h-4" /> },
  { name: "AICTE Feedback Portal", url: "https://www.aicte-india.org/feedback", icon: <ExternalLink className="w-4 h-4" /> },
  { name: "Punjab Govt. Grievance Portal", url: "https://connect.punjab.gov.in", icon: <ExternalLink className="w-4 h-4" /> },
];

const GrievancePortal = () => {
  return (
    <Layout>
      <PageBanner title="Grievance Portal" subtitle="Transparent grievance redressal mechanism as mandated by AICTE" />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Important Notice */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mb-10 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Anti-Ragging Helpline</h3>
                <p className="text-sm text-muted-foreground mb-2">If you or anyone you know is being ragged, report immediately:</p>
                <p className="text-lg font-bold text-destructive">📞 1800-180-5522 (24x7 Toll Free)</p>
                <p className="text-sm text-muted-foreground mt-1">Or report online at <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.antiragging.in</a></p>
              </div>
            </div>

            {/* Grievance Cells */}
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">Grievance Redressal Cells</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {grievanceCells.map((cell, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-serif font-bold text-foreground mb-2">{cell.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cell.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-foreground"><Users className="w-4 h-4 text-primary" /> {cell.contact}</p>
                    <p className="flex items-center gap-2 text-foreground"><Mail className="w-4 h-4 text-primary" /> {cell.email}</p>
                    <p className="flex items-center gap-2 text-foreground"><Phone className="w-4 h-4 text-primary" /> {cell.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* External Portals */}
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">External Grievance Portals</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {externalPortals.map((portal, idx) => (
                <a
                  key={idx}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {portal.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{portal.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GrievancePortal;
