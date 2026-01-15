import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, TrendingUp, Users, Shield, Rocket } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Experiência Consolidada",
    description: "Anos de expertise em desenvolvimento web, mobile e automação empresarial.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Entrega Ágil",
    description: "Metodologias modernas que garantem rapidez sem comprometer a qualidade.",
    color: "secondary",
  },
  {
    icon: TrendingUp,
    title: "Soluções Escaláveis",
    description: "Arquiteturas preparadas para crescer junto com o seu negócio.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Time Dedicado",
    description: "Profissionais especializados comprometidos com o sucesso do seu projeto.",
    color: "peach",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Proteção de dados e compliance com as melhores práticas do mercado.",
    color: "pink",
  },
  {
    icon: Rocket,
    title: "Suporte Contínuo",
    description: "Acompanhamento técnico e manutenção para garantir performance constante.",
    color: "primary",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 tech-lines opacity-20" />

      <div className="glow-orb glow-orb-accent w-72 h-72 top-40 right-10" style={{ animationDelay: '1s' }} />
      <div className="glow-orb glow-orb-primary w-96 h-96 bottom-10 left-20" style={{ animationDelay: '3s' }} />

      <div className="absolute inset-0 tech-lines opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Conheça as <span className="text-gradient">Vantagens</span> de Nos Contratar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Benefícios que fazem a diferença no desenvolvimento do seu projeto
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card
              key={advantage.title}
              className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,222,255,0.15)] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${advantage.color}/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className={`w-6 h-6 text-${advantage.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
