import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { Brain, Ear, Eye, Heart, Volume2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import AgentCard from "@/components/AgentCard";
import AgentInterface from "@/components/AgentInterface";

const agents = [
  {
    name: "Agente TDAH",
    description: "Simplifica textos longos e complexos para torná-los mais diretos e fáceis de focar, beneficiando pessoas com Transtorno de Déficit de Atenção com Hiperatividade.",
    icon: Brain,
    color: "bg-gradient-primary",
  },
  {
    name: "Agente Surdo",
    description: "Converte textos em imagens com suporte à Libras ou linguagem visual acessível para a comunidade surda.",
    icon: Ear,
    color: "bg-gradient-secondary",
  },
  {
    name: "Agente Dislexia",
    description: "Adapta textos com fontes, espaçamentos e estrutura otimizados para facilitar a leitura de pessoas com dislexia.",
    icon: Eye,
    color: "bg-secondary-accent",
  },
  {
    name: "Agente TEA",
    description: "Oferece uma versão de texto com recursos específicos para o Transtorno do Espectro Autista, como linguagem objetiva, ícones e divisões visuais por tópicos.",
    icon: Heart,
    color: "bg-accent",
  },
  {
    name: "Narrador",
    description: "Converte textos em áudio com vozes naturais para pessoas com deficiência visual ou baixa visão.",
    icon: Volume2,
    color: "bg-primary-glow",
  },
];

const Index = () => {
  const location = useLocation();
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    if (location.state?.selectedAgent) {
      setSelectedAgent(location.state.selectedAgent);
    }
  }, [location.state]);

  if (selectedAgent) {
    return (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-gradient-gentle">
          <Header />
          <AgentInterface
            agent={selectedAgent}
            onBack={() => setSelectedAgent(null)}
          />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-gentle">
        <Header />
        
        <main className="container mx-auto px-4 py-8" role="main">
          {/* Hero Section */}
          <section className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Torne seus textos
              <span className="bg-gradient-primary bg-clip-text text-transparent"> acessíveis</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Utilize nossos agentes inteligentes especializados para adaptar automaticamente seus textos 
              conforme diferentes necessidades específicas, promovendo verdadeira inclusão digital.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-secondary-accent rounded-full"></div>
                <span>Tecnologia IA Avançada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary-glow rounded-full"></div>
                <span>Foco em Acessibilidade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-accent rounded-full"></div>
                <span>5 Agentes Especializados</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-card border border-border rounded-xl p-4 shadow-soft">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-xs text-muted-foreground">Textos adaptados</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 shadow-soft">
                <div className="text-2xl font-bold text-primary">0%</div>
                <div className="text-xs text-muted-foreground">Satisfação</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 shadow-soft">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Disponível</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 shadow-soft">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-xs text-muted-foreground">Especialidades</div>
              </div>
            </div>
          </section>

          {/* Agents Grid */}
          <section 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up"
            aria-label="Lista de agentes de inclusão disponíveis"
          >
            {agents.map((agent, index) => (
              <div
                key={agent.name}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                
              >
                <AgentCard
                  name={agent.name}
                  description={agent.description}
                  icon={agent.icon}
                  color={agent.color}
                  onClick={() => setSelectedAgent(agent)}
                />
              </div>
            ))}
          </section>

          {/* Features Section */}
          <section className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Por que escolher os Agentes da Inclusão?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="relative h-12 w-12 mx-auto rounded-full">
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow
                              bg-gradient-sky-strong dark:bg-gradient-purple-strong"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Inteligência Artificial</h4>
                <p className="text-sm text-muted-foreground">
                  Tecnologia avançada para adaptações precisas e contextuais.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="relative h-12 w-12 mx-auto rounded-full">
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow
                              bg-gradient-sky-strong dark:bg-gradient-purple-strong"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Inclusão Real</h4>
                <p className="text-sm text-muted-foreground">
                  Desenvolvido com base em pesquisas e necessidades reais.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="relative h-12 w-12 mx-auto rounded-full">
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow
                              bg-gradient-sky-strong dark:bg-gradient-purple-strong"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Fácil de Usar</h4>
                <p className="text-sm text-muted-foreground">
                  Interface intuitiva e acessível para todos os usuários.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;