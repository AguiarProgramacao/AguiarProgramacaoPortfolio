import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    const phone = "5521982565890";
    const message = encodeURIComponent("Gostaria de realizar um orçamento");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <footer className="relative py-20 border-t border-primary/10">
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu <span className="text-gradient">negócio?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos impulsionar sua presença digital
          </p>
          <Button variant="gradient" size="lg" className="px-10" onClick={handleWhatsApp}>
            Entrar em Contato
          </Button>
        </div>
        
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <a href="mailto:contato@aguiarprogramacao.com" className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>aguiarprogramacao@gmail.com</span>
            </a>
            <a href="https://wa.me/5521982565890" className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>(21) 98256-5890</span>
            </a>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors">Desenvolvimento Web</li>
              <li className="hover:text-primary transition-colors">Apps Mobile</li>
              <li className="hover:text-primary transition-colors">Automação</li>
              <li className="hover:text-primary transition-colors">Consultoria</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://instagram.com/aguiar.programador" className="w-10 h-10 rounded-lg bg-card/50 border border-primary/10 flex items-center justify-center hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,222,255,0.2)]">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="www.linkedin.com/in/dev-rafael-aguiar" className="w-10 h-10 rounded-lg bg-card/50 border border-primary/10 flex items-center justify-center hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,222,255,0.2)]">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="https://github.com/AguiarProgramacao" className="w-10 h-10 rounded-lg bg-card/50 border border-primary/10 flex items-center justify-center hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,222,255,0.2)]">
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm">
          <p>© 2022 Aguiar Programação — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
