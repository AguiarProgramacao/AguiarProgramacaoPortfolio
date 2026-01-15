import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projectsData";

const Portfolio = () => {
  const handleWhatsApp = () => {
    const phone = "5521982565890";
    const message = encodeURIComponent("Gostaria de realizar um orçamento");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Voltar para Home
            </Button>
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Nosso <span className="text-gradient">Portfólio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
            Cada projeto é único e pensado para atender necessidades específicas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projetos Entregues</div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/10 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/10 text-center">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-peach/10 text-center">
            <div className="text-3xl font-bold text-peach mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,222,255,0.2)] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Link to={`/portfolio/${project.id}`} className="w-full">
                    <Button variant="hero" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para o <span className="text-gradient">Próximo Projeto</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Vamos transformar sua ideia em realidade. Entre em contato e descubra como podemos ajudar seu negócio.
          </p>
          <Link to="/">
            <Button variant="gradient" size="lg" className="text-lg px-8" onClick={handleWhatsApp}>
              Solicitar Orçamento
            </Button>
          </Link>
        </Card>
      </div>
    </main>
  );
};

export default Portfolio;
