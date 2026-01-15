import { useParams, Link, Navigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, CheckCircle } from "lucide-react";
import { getProjectById } from "@/data/projectsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/portfolio">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Voltar para Portfólio
            </Button>
          </Link>

          <div className="mb-6">
            <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Project Info */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Cliente:</span>
              <span className="font-semibold">{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary" />
              <span className="text-muted-foreground">Duração:</span>
              <span className="font-semibold">{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-12 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-primary/20 overflow-hidden flex items-center justify-center bg-black/5">
                    <img
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      className="max-w-full h-auto mx-auto rounded-lg shadow-lg p-8"
                      style={{
                        maxHeight: "80vh",
                        objectFit: "contain",
                      }}
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {project.images.length > 1 && (
              <>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </>
            )}
          </Carousel>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </Card>

            {/* Features */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-bold mb-6">Funcionalidades Principais</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-bold mb-4">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-3">
                Gostou deste projeto?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Entre em contato e vamos criar algo incrível juntos!
              </p>
              <Link to="/">
                <Button variant="gradient" size="lg" className="w-full">
                  Solicitar Orçamento
                </Button>
              </Link>
            </Card>

            {/* Other Projects */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-lg font-bold mb-4">Ver Mais Projetos</h3>
              <Link to="/portfolio">
                <Button variant="outline" className="w-full">
                  Todos os Projetos
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
