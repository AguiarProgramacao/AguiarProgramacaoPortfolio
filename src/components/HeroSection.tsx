import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.webp";
import logo from "@/assets/logo.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 tech-grid" />
      <div className="absolute inset-0 z-0 tech-lines opacity-30" />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8 flex justify-center">
          <img
            src={logo}
            alt="Aguiar Programação"
            className="h-20 md:h-28 opacity-90"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforme sua Visão Digital em{" "}
          <span className="text-gradient">Realidade Empresarial</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Desenvolvemos soluções tecnológicas sob medida que impulsionam o crescimento do seu negócio
        </p>

        <p className="text-sm md:text-base text-muted-foreground/80 mb-10 max-w-2xl mx-auto">
          Desenvolvimento de sistemas, sites e aplicativos personalizados
        </p>

        <div className="flex justify-center max-w-xl mx-auto mb-8">
          <Button
            size="lg"
            variant="gradient"
            className="h-12 w-80"
            onClick={() => {
              window.open(
                "https://wa.me/5521982565890?text=vim%20do%20seu%20portfólio",
                "_blank"
              );
            }}
          >
            Fazer Orçamento
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
            <span>Entrega Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
            <span>Suporte Contínuo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span>Tecnologia Avançada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
