import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Bot, Smartphone, Network } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.webp";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites e Sistemas",
    description:
      "Sites corporativos, e-commerce, landing pages e sistemas web completos e responsivos.",
  },
  {
    icon: Bot,
    title: "Automação Empresarial",
    description:
      "Integração de processos, Agentes IA, APIs e automação de tarefas repetitivas para otimizar seu negócio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e híbridos para iOS e Android com design moderno e performance superior.",
  },
  {
    icon: Network,
    title: "Soluções Integradas",
    description:
      "Consultoria técnica e desenvolvimento de soluções personalizadas de ponta a ponta.",
  },
];

const ServicesSection = () => {
  const handleWhatsApp = () => {
    const phone = "5521982565890";
    const message = encodeURIComponent("Gostaria de realizar um orçamento");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="glow-orb glow-orb-secondary w-80 h-80 top-10 left-1/4" />
      <div className="glow-orb glow-orb-accent w-64 h-64 bottom-40 right-1/3" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas para transformar a presença digital da sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lista de Serviços */}
          <div className="space-y-6 animate-fade-in-up">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,222,255,0.15)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="pt-6">
              <Button
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleWhatsApp}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl rounded-full" />
              <img
                src={phoneMockup}
                alt="App mockup"
                className="relative z-10 w-full max-w-md drop-shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
