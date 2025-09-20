import { Rocket, Users, BookOpen, Clock } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Faster Onboarding",
      description: "New team members understand the codebase instantly with always-current documentation",
      metric: "50% faster"
    },
    {
      icon: Users,
      title: "Reduced Misalignment", 
      description: "PMs and engineers stay on the same page throughout the entire development cycle",
      metric: "90% reduction"
    },
    {
      icon: BookOpen,
      title: "Living Documentation",
      description: "Specs that actually reflect reality, automatically updated as code evolves",
      metric: "Always current"
    },
    {
      icon: Clock,
      title: "Time Saved",
      description: "Eliminate the back-and-forth of hunting down outdated specs and tribal knowledge",
      metric: "Hours per week"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Benefits That Transform Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When specs and code stay in sync, everything else falls into place
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card border border-border/50 rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:gradient-hero transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <div className="text-2xl font-bold text-primary mb-2">{benefit.metric}</div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop wasting time on documentation debt. Start building with confidence, 
            knowing your specs and code tell the same story.
          </p>
        </div>
      </div>
    </section>
  );
};