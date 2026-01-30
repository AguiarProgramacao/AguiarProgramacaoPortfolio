import { Lightbulb, Settings, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Lightbulb,
    title: "Inovação Integrada",
    description: "Utilizamos as tecnologias mais avançadas para criar soluções que colocam seu negócio à frente da concorrência.",
    color: "primary",
  },
  {
    icon: Settings,
    title: "Excelência Customizada",
    description: "Cada projeto é desenvolvido sob medida, garantindo que atenda perfeitamente às necessidades específicas da sua empresa.",
    color: "secondary",
  },
  {
    icon: Handshake,
    title: "Parceria Estratégica",
    description: "Trabalhamos lado a lado com você, oferecendo suporte contínuo e consultoria para maximizar seus resultados.",
    color: "accent",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-10 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="glow-orb glow-orb-primary w-96 h-96 top-20 left-10" />
      <div className="glow-orb glow-orb-secondary w-80 h-80 bottom-20 right-20" style={{ animationDelay: '2s' }} />
      
      <div className="glow-orb glow-orb-primary w-96 h-96 top-20 left-10" />
      <div className="glow-orb glow-orb-secondary w-80 h-80 bottom-20 right-20" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Inovação, Excelência e <span className="text-gradient">Parceria</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Os pilares que sustentam nosso compromisso com o sucesso dos nossos clientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.title}
              className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,222,255,0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${pillar.color}/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className={`w-8 h-8 text-${pillar.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
