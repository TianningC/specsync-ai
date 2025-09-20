import { ArrowDown, ArrowRight, FileText, GitBranch, Bot, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Create Work Item",
      description: "PM creates an ADO Work Item to track a new feature or project"
    },
    {
      number: "02", 
      icon: GitBranch,
      title: "Check in Spec",
      description: "PM checks in the spec (Markdown) to the repo under the same ADO item"
    },
    {
      number: "03",
      icon: GitBranch,
      title: "Engineer Commits PR",
      description: "Engineer commits code PR under the same ADO item, implementing the feature"
    },
    {
      number: "04",
      icon: Bot,
      title: "AI Agent Analysis",
      description: "AI Agent scans the PR, understands the code design, and compares against the spec"
    },
    {
      number: "05",
      icon: GitBranch,
      title: "Propose Updates",
      description: "Agent creates a draft PR with suggested spec changes to match implementation"
    },
    {
      number: "06",
      icon: CheckCircle,
      title: "Review & Sync",
      description: "PM reviews and approves the update, keeping code and spec perfectly aligned"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple workflow that seamlessly integrates with your existing development process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                  <div className="w-12 h-12 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow for flow (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    {(index + 1) % 3 === 0 ? (
                      <ArrowDown className="w-6 h-6 text-primary/40" />
                    ) : (
                      <ArrowRight className="w-6 h-6 text-primary/40" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Result: Spec & Code in Perfect Sync</span>
          </div>
        </div>
      </div>
    </section>
  );
};