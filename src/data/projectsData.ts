import portfolio1 from "@/assets/michelon/port.png";
import portfolio1webp from "@/assets/michelon/port.webp";
import portfolio1Detail1 from "@/assets/michelon/port-1-1.png";
import portfolio1Detail2 from "@/assets/michelon/port-1-2.png";
import portfolio1Detail3 from "@/assets/michelon/port-1-3.png";
import portfolio1Detail4 from "@/assets/michelon/port-1-4.png";
import portfolio1Detail5 from "@/assets/michelon/port-1-5.png";
import portfolio1Detail6 from "@/assets/michelon/port-1-6.png";
import portfolio2 from "@/assets/studioLegale/port-2.png";
import portfolio2webp from "@/assets/studioLegale/port-2.webp";
import portfolio2Detail1 from "@/assets/studioLegale/port-2-1.png";
import portfolio2Detail2 from "@/assets/studioLegale/port-2-2.png";
import portfolio2Detail3 from "@/assets/studioLegale/port-2-3.png";
import portfolio2Detail4 from "@/assets/studioLegale/port-2-4.png";
import portfolio2Detail5 from "@/assets/studioLegale/port-2-5.png";
import portfolio3 from "@/assets/appMichelon/port-3.png";
import portfolio3webp from "@/assets/appMichelon/port-3.webp";
import portfolio3Detail1 from "@/assets/appMichelon/port-3-1.png";
import portfolio3Detail2 from "@/assets/appMichelon/port-3-2.png";
import portfolio3Detail3 from "@/assets/appMichelon/port-3-3.png";
import portfolio4 from "@/assets/cjr/port-4.png";
import portfolio4Detail1 from "@/assets/cjr/port-4-1.png";
import portfolio4Detail2 from "@/assets/cjr/port-4-2.png";
import portfolio4Detail3 from "@/assets/cjr/port-4-3.png";
import portfolio4Detail4 from "@/assets/cjr/port-4-4.png";
import portfolio4Detail5 from "@/assets/cjr/port-4-5.png";
import portfolio5 from "@/assets/VcNaEuropa/port-5.png";
import portfolio5Detail1 from "@/assets/VcNaEuropa/port-5-1.png";
import portfolio5Detail2 from "@/assets/VcNaEuropa/port-5-2.png";
import portfolio5Detail3 from "@/assets/VcNaEuropa/port-5-3.png";
import portfolio5Detail4 from "@/assets/VcNaEuropa/port-5-4.png";
import portfolio5Detail5 from "@/assets/VcNaEuropa/port-5-5.png";
import portfolio6 from "@/assets/vertex/port-6.png";
import portfolio6Detail1 from "@/assets/vertex/port-6-1.png";
import portfolio6Detail2 from "@/assets/vertex/port-6-2.png";
import portfolio6Detail3 from "@/assets/vertex/port-6-3.png";
import portfolio6Detail4 from "@/assets/vertex/port-6-4.png";
import portfolio6Detail5 from "@/assets/vertex/port-6-5.png";
import portfolio7 from "@/assets/restaurante/port-7.png";
import portfolio7Detail1 from "@/assets/restaurante/port-7-1.png";
import portfolio7Detail2 from "@/assets/restaurante/port-7-2.png";
import portfolio7Detail3 from "@/assets/restaurante/port-7-3.png";
import portfolio7Detail4 from "@/assets/restaurante/port-7-4.png";
import portfolio8 from "@/assets/appFinanceiro/port-8.png";
import portfolio9 from "@/assets/petshop/port-9.png";
import portfolio9Detail1 from "@/assets/petshop/port-9-1.png";
import portfolio9Detail2 from "@/assets/petshop/port-9-2.png";
import portfolio9Detail3 from "@/assets/petshop/port-9-3.png";
import portfolio9Detail4 from "@/assets/petshop/port-9-4.png";
import portfolio9Detail5 from "@/assets/petshop/port-9-5.png";
import portfolio10 from "@/assets/seg/port-10.png"
import portfolio10Detail1 from "@/assets/seg/port-10-1.png";
import portfolio10Detail2 from "@/assets/seg/port-10-2.png";
import portfolio10Detail3 from "@/assets/seg/port-10-3.png";
import portfolio10Detail4 from "@/assets/seg/port-10-4.png";
import portfolio11 from "@/assets/homecare/port-11.png"
import portfolio11Detail1 from "@/assets/homecare/port-11-1.png";
import portfolio11Detail2 from "@/assets/homecare/port-11-2.png";
import portfolio11Detail3 from "@/assets/homecare/port-11-3.png";
import portfolio11Detail4 from "@/assets/homecare/port-11-4.png";
import portfolio11Detail5 from "@/assets/homecare/port-11-5.png";
import portfolio12 from "@/assets/pfDedetizadora/linkedin5.png"
import portfolio12_1 from "@/assets/pfDedetizadora/linkedin4.png"
import portfolio12_2 from "@/assets/pfDedetizadora/linkedin6.png"
import portfolio12_3 from "@/assets/pfDedetizadora/linkedin3.png"
import portfolio12_4 from "@/assets/pfDedetizadora/linkedin1.png"
import portfolio12_5 from "@/assets/pfDedetizadora/linkedin2.png"
import portfolio13 from "@/assets/AlmaCRM/port-13.png"
import portfolio13_1 from "@/assets/AlmaCRM/port-13-1.png"
import portfolio13_2 from "@/assets/AlmaCRM/port-13-2.png"
import portfolio13_3 from "@/assets/AlmaCRM/port-13-3.png"
import portfolio13_4 from "@/assets/AlmaCRM/port-13-4.png"

export interface Project {
  id: string;
  image: string;
  imageSecondary: string;
  images: string[];
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  features: string[];
  duration: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: "michelon-internacional",
    images: [portfolio1, portfolio1Detail1, portfolio1Detail2, portfolio1Detail3, portfolio1Detail4, portfolio1Detail5, portfolio1Detail6],
    image: portfolio1,
    imageSecondary: portfolio1webp,
    title: "Michelon Advocacia",
    category: "Sistema Empresarial",
    description: "Sistema completo de gestão de famílias, processos, clientes, com integração IA e muito mais.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind", "GEMINI"],
    fullDescription: "Desenvolvemos um sistema jurídico robusto e escalável, com interface moderna e intuitiva. O sistema inclui gestão completa de famílias, clientes, processos, cotação atual do euro, gerador de contratos, um agente de Ia que te ajuda falando sobre os serviços prestados da empresa, calculadora de juros, tabela de preços e um painel administrativo completo para gestão do negócio.",
    features: [
      "Cotação Atual do Euro",
      "Montagem da Árvore Genealógica da Família",
      "Gestão de Documentos da Família",
      "Agente de IA",
      "Gestão de Tarefas por Processo",
      "Gerador de Contratos",
      "Checklist de Cada Serviço Prestado",
      "Modo Dark e Modo Light",
      "Tabela de Preços",
      "Calculadora Inteligente"
    ],
    duration: "1 mês",
    client: "Michelon Advocacia Internacional"
  },
  {
    id: "studio-legale",
    image: portfolio2,
    imageSecondary: portfolio2webp,
    images: [portfolio2, portfolio2Detail1, portfolio2Detail2, portfolio2Detail3, portfolio2Detail4, portfolio2Detail5],
    title: "Studio Legale Michelon",
    category: "Landing Page",
    description: "Landing page de alta conversão feita para captura de clientes.",
    tech: ["Wordpress", "Figma"],
    fullDescription: "Criei esta landing page profissional para o escritório da Avvocato Stabilito Ana Michelon, especialista em permesso di soggiorno e regularização de estrangeiros na Itália. O objetivo do projeto foi desenvolver uma página clara, elegante e persuasiva, voltada à conversão de leads jurídicos e à comunicação de autoridade e segurança jurídica. ",
    features: [
      "Design responsivo e elegante adaptado para o nicho jurídico",
      "Sessões de autoridade e depoimentos integradas ao funil de conversão",
      "Foco em clareza, persuasão e experiência do usuário",
    ],
    duration: "5 dias",
    client: "Renan Perrotti Advocacia"
  },
  {
    id: "app-michelon",
    image: portfolio3,
    imageSecondary: portfolio3webp,
    images: [portfolio3, portfolio3Detail1, portfolio3Detail2, portfolio3Detail3],
    title: "Michelon Advocacia Cliente",
    category: "Aplicativo Mobile",
    description: "Aplicativo feito para os clientes acompanharam o seu procesos sem sair de casa.",
    tech: ["Expo", "TypeScript", "Supabase"],
    fullDescription: "Aplicativo mobile completo para acompanhamento do processo de cidadanias, contendo dados do processo, dados do cliente, documentos, Informações da família e etapas concluídas.",
    features: [
      "Sistema de Login e Logout",
      "Barra de Progresso",
      "sistema de Notificação",
      "Serviço de Ajuda",
    ],
    duration: "1 mês",
    client: "Michelon Advocacia Internacional"
  },
  {
    id: "ecommerce",
    image: portfolio4,
    imageSecondary: portfolio4,
    images: [portfolio4, portfolio4Detail1, portfolio4Detail2, portfolio4Detail3, portfolio4Detail4, portfolio4Detail5],
    title: "CJR Personalizados",
    category: "Loja Virtual",
    description: "Sistema administrativo completo para gestão de vendas e produtos online.",
    tech: ["ReactJS", "NodeJs", "Express", "Supabase"],
    fullDescription: "Desenvolvi este e-commerce completo para a marca CJR Personalizados, especializado na venda de produtos personalizados como canecas, copos térmicos, bonés e camisetas. O principal objetivo foi criar uma loja moderna, intuitiva e visualmente impactante, que transmitisse credibilidade e facilitasse a personalização de produtos pelos clientes.",
    features: [
      "Página inicial dinâmica com banners e produtos em destaque",
      "Página de produto com cálculo automático e opção de personalização",
      "Área de avaliações e depoimentos integrada ao layout",
      "Design limpo e profissional com foco em legibilidade e confiança",
      "Seções otimizadas para conversão (promoções, destaques e CTA claros)"
    ],
    duration: "2 meses",
    client: "CJR Personalizados"
  },
  {
    id: "voce-na-europa",
    image: portfolio5,
    imageSecondary: portfolio5,
    images: [portfolio5, portfolio5Detail1, portfolio5Detail2, portfolio5Detail3, portfolio5Detail4, portfolio5Detail5],
    title: "Você na Europa - Cidadania Italiana",
    category: "website",
    description: "Landing page focada em captação de cliente e orientação do reconhecimento da cidadania.",
    tech: ["Figma", "Wordpress"],
    fullDescription: "Desenvolvi esta landing page institucional para uma assessoria especializada em Cidadania Italiana, com o objetivo de informar, orientar e converter visitantes em potenciais clientes interessados no processo de reconhecimento da cidadania. O design foi pensado para transmitir credibilidade, segurança e profissionalismo, utilizando uma paleta em tons de vinho e bege — cores que reforçam a tradição italiana e a autoridade da marca.",
    features: [
      "Estrutura clara e envolvente com storytelling visual sobre o processo de cidadania",
      "Sessões com passo a passo ilustrado para orientar o usuário",
      "Apresentação dos advogados responsáveis e selos de credibilidade",
      "Depoimentos e provas sociais integradas",
      "Foco total na geração de confiança e conversão de contatos"
    ],
    duration: "5 dias",
    client: "Você na Europa"
  },
  {
    id: "sistema-juridico",
    image: portfolio6,
    imageSecondary: portfolio6,
    images: [portfolio6, portfolio6Detail1, portfolio6Detail2, portfolio6Detail3, portfolio6Detail4, portfolio6Detail5],
    title: "VertexJuris",
    category: "Sistema Empresarial",
    description: "Sistema jurídico completo, gestão de clientes, processos, tarefas, entre muitas outras coisas.",
    tech: ["ReactJS", "Tailwind CSS", "Nodejs", "Express", "PostgreSQL"],
    fullDescription: "Sistema jurídico com gestão de processos, clientes em formato CRM, processos com tarefas e anotações, Agendamento de reuniões integrado ao Google Meet, emissão de boletos integrado com o stripe, Atendimento integrado ao whatsapp.",
    features: [
      "Design responsivo premium",
      "Gestão completa",
      "Google Meet integrado",
      "Stripe integrado",
      "Whatsapp integrado"
    ],
    duration: "2 meses",
    client: "Projeto Pessoal"
  },
  {
    id: "gestao-restaurante",
    image: portfolio7,
    imageSecondary: portfolio7,
    images: [portfolio7, portfolio7Detail1, portfolio7Detail2, portfolio7Detail3, portfolio7Detail4],
    title: "Gestão de Restaurante",
    category: "Sistema Web",
    description: "Sistema completo para gestão de pedidos, cardápio e entregas.",
    tech: ["React", "TypeScipt", "Supabase", "Ifood", "Whatsapp", "GEMINI"],
    fullDescription: "Plataforma completa para gestão de restaurantes, incluindo controle de pedidos, gestão de cardápio digital, integração com delivery e controle financeiro, Controle de cozinha e controle de mesas.",
    features: [
      "Pedidos em tempo real",
      "Cardápio digital",
      "Integração com delivery",
      "Controle de mesas",
      "Gestão financeira"
    ],
    duration: "4 meses",
    client: "Restaurante Gourmet"
  },
  {
    id: "gestao-financeira",
    image: portfolio8,
    imageSecondary: portfolio8,
    images: [portfolio8],
    title: "Gestão Financeira",
    category: "Aplicativo Mobile",
    description: "Gestão financeira, gestão de clientes e gestão de boletos, tudo em um só lugar.",
    tech: ["React Native", "Firebase"],
    fullDescription: "Portal imobiliário completo com sistema de busca avançada, filtros inteligentes, integração com Google Maps, tour virtual 360° e sistema de agendamento de visitas.",
    features: [
      "Busca avançada de imóveis",
      "Mapa interativo",
      "Tour virtual 360°",
      "Agendamento de visitas",
      "Comparador de imóveis"
    ],
    duration: "3 meses",
    client: "Imóveis Premium"
  },
  {
    id: "petshop",
    image: portfolio9,
    imageSecondary: portfolio9,
    images: [portfolio9, portfolio9Detail1, portfolio9Detail2, portfolio9Detail3, portfolio9Detail4, portfolio9Detail5],
    title: "Site Petshop",
    category: "Website",
    description: "Vendas de produtos, agendamento para tosa e banho e sistema de adoção.",
    tech: ["HTML", "CSS", "JavaScript"],
    fullDescription: ".",
    features: [
      "Prontuário eletrônico",
      "Agendamento de consultas",
      "Prescrição digital",
      "Controle de exames",
      "Faturamento integrado"
    ],
    duration: "6 meses",
    client: "Clínica Médica Saúde+"
  },
  {
    id: "metodo-seg",
    image: portfolio10,
    imageSecondary: portfolio10,
    images: [portfolio10, portfolio10Detail1, portfolio10Detail2, portfolio10Detail3, portfolio10Detail4],
    title: "Método SEG",
    category: "Website",
    description: "Landing page criado com foco para captação de clientes.",
    tech: ["Wordpress", "Figma"],
    fullDescription: "Desenvolvi esta landing page institucional para o Método SEG, um programa criado para ajudar advogados a fortalecerem sua atuação e ampliarem seus resultados por meio de estratégias de marketing jurídico e posicionamento profissional. O layout foi pensado para comunicar autoridade e confiança, com uma estética moderna e elementos visuais que reforçam o nicho jurídico.",
    features: [
      "Design responsivo e elegante adaptado para o nicho jurídico",
      "Sessões de autoridade e depoimentos integradas ao funil de conversão",
      "Foco em clareza, persuasão e experiência do usuário",
    ],
    duration: "5 dias",
    client: "Renan Perrotti Advocacia"
  },
  {
    id: "home-care",
    image: portfolio11,
    imageSecondary: portfolio11,
    images: [portfolio11, portfolio11Detail1, portfolio11Detail2, portfolio11Detail3, portfolio11Detail4, portfolio11Detail5],
    title: "Home Care",
    category: "Website",
    description: "Landing page criado com foco para captação de clientes.",
    tech: ["Wordpress", "Figma"],
    fullDescription: "Desenvolvi esta landing page institucional para um escritório de advocacia especializado em garantir o direito ao Home Care através dos planos de saúde. O objetivo principal foi gerar autoridade e facilitar o contato de novos clientes, transmitindo confiança e clareza sobre o tema jurídico.",
    features: [
      "Design responsivo e elegante adaptado para o nicho jurídico",
      "Sessões de autoridade e depoimentos integradas ao funil de conversão",
      "Foco em clareza, persuasão e experiência do usuário",
    ],
    duration: "5 dias",
    client: "Dra's Simone e Sabrina"
  },
  {
    id: "pf-dedetizadora",
    image: portfolio12,
    imageSecondary: portfolio12,
    images: [portfolio12, portfolio12_1, portfolio12_2, portfolio12_3, portfolio12_4, portfolio12_5, portfolio11Detail5],
    title: "ERP PF Dedetizadora",
    category: "ERP",
    description: "Sistema empresarial para controle interno.",
    tech: ["React", "VITE", "TailwindCSS", "Supabase", "TypeScript"],
    fullDescription: "Desenvolvi este ERP moderno para gestão operacional de uma empresa de dedetização, abrangendo web, mobile, automações, integração com serviços externos e recursos inteligentes de IA. O sistema foi estruturado para oferecer velocidade, segurança, escalabilidade e experiência premium ao usuário, suportando a operação completa da empresa: clientes, ordens de serviço, financeiro, orçamento, acompanhamento técnico e gestão interna.",
    features: [
      "Design responsivo e elegante",
      "Sessões de autoridade e depoimentos integradas ao funil de conversão",
      "Foco em clareza, persuasão e experiência do usuário",
    ],
    duration: "15 dias",
    client: "PF Dedetizadora"
  },
  {
    id: "alma-crm",
    image: portfolio13,
    imageSecondary: portfolio13,
    images: [
      portfolio13,
      portfolio13_1,
      portfolio13_2,
      portfolio13_3,
      portfolio13_4
    ],
    title: "Alma CRM",
    category: "CRM / SaaS",
    description: "CRM moderno com pipeline, automações, IA e chatbot.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "shadcn-ui",
      "React Router",
      "React Query"
    ],
    fullDescription:
      "Desenvolvimento de um CRM web moderno utilizando React, Vite e TypeScript, com foco em performance, escalabilidade e excelente experiência do usuário. A aplicação conta com dashboard analítico, pipeline de vendas em formato Kanban com drag & drop, gestão de contatos, automações, central de notificações, assistente de IA, chatbot estilo WhatsApp e área de configurações. O layout é totalmente responsivo, com sidebar no desktop e bottom navigation no mobile, além de componentização avançada, formulários modais reutilizáveis e integração simulada com WhatsApp via webhook (n8n). O projeto foi desenvolvido com estado local e dados mockados, preparado para futura integração com backend.",
    features: [
      "Dashboard com métricas e atividades recentes",
      "Pipeline de vendas em Kanban com drag & drop",
      "Gestão completa de contatos",
      "Automações com filtros, estatísticas e sugestões",
      "Central de notificações com ações rápidas",
      "Assistente de IA com chat e quick actions",
      "Chatbot estilo WhatsApp com conversas simuladas",
      "Layout responsivo (Sidebar desktop e BottomNav mobile)",
      "Design system com shadcn-ui e Tailwind CSS"
    ],
    duration: "30 dias",
    client: "Projeto autoral"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
