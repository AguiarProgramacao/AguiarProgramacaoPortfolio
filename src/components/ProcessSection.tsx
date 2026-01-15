import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Code, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Entendemos profundamente suas necessidades e objetivos de negócio.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Planejamento",
    description: "Criamos uma estratégia técnica e um roadmap detalhado do projeto.",
    color: "secondary",
  },
  {
    icon: Code,
    title: "Execução",
    description: "Desenvolvemos a solução com agilidade, qualidade e transparência total.",
    color: "accent",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Contínuo",
    description: "Acompanhamos sua operação com manutenção e melhorias constantes.",
    color: "peach",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 tech-lines opacity-20" />

      <div className="glow-orb glow-orb-primary w-72 h-72 top-20 right-1/4" style={{ animationDelay: '1.5s' }} />
      <div className="glow-orb glow-orb-secondary w-80 h-80 bottom-20 left-10" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como vamos <span className="text-gradient">te ajudar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa metodologia estruturada garante resultados consistentes em cada etapa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,222,255,0.2)] animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-primary/5">
                {index + 1}
              </div>

              <CardContent className="p-6 text-center relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-${step.color}/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-7 h-7 text-${step.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
