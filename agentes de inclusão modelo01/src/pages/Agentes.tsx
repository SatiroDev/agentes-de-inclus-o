import { ThemeProvider } from "next-themes";
import { Brain, Ear, Eye, Heart, Volume2, Target, Zap, Users } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const agents = [
  {
    name: "Agente TDAH",
    description: "Simplifica textos longos e complexos para torná-los mais diretos e fáceis de focar.",
    fullDescription: "O Agente TDAH foi desenvolvido especificamente para pessoas com Transtorno de Déficit de Atenção com Hiperatividade. Ele quebra textos extensos em parágrafos menores, remove informações desnecessárias e destaca os pontos principais para facilitar a concentração.",
    features: [
      "Divisão de textos longos em seções menores",
      "Remoção de informações redundantes",
      "Destaque de pontos-chave",
      "Estruturação visual clara",
      "Tempo de leitura estimado"
    ],
    benefits: [
      "Melhora o foco e concentração",
      "Reduz a sobrecarga cognitiva",
      "Facilita a compreensão",
      "Aumenta a retenção da informação"
    ],
    icon: Brain,
    color: "bg-gradient-primary",
    stats: { usage: "0", satisfaction: "0%" }
  },
  {
    name: "Agente Surdo",
    description: "Converte textos em imagens com suporte à Libras ou linguagem visual.",
    fullDescription: "Desenvolvido para a comunidade surda, este agente transforma textos em recursos visuais acessíveis, incluindo suporte para Língua Brasileira de Sinais (Libras) e elementos visuais que facilitam a compreensão.",
    features: [
      "Conversão para linguagem visual",
      "Suporte à Libras",
      "Ícones e pictogramas",
      "Layout visual otimizado",
      "Recursos de interpretação"
    ],
    benefits: [
      "Acessibilidade total para surdos",
      "Comunicação visual efetiva",
      "Inclusão cultural",
      "Compreensão aprimorada"
    ],
    icon: Ear,
    color: "bg-gradient-secondary",
    stats: { usage: "0", satisfaction: "0%" }
  },
  {
    name: "Agente Dislexia",
    description: "Adapta textos com fontes, espaçamentos e estrutura otimizados.",
    fullDescription: "Especialmente projetado para pessoas com dislexia, este agente aplica técnicas de formatação que facilitam a leitura, incluindo fontes específicas, espaçamentos adequados e estruturas visuais que reduzem a dificuldade de leitura.",
    features: [
      "Fontes otimizadas para dislexia",
      "Espaçamento entre letras e linhas",
      "Contraste adequado",
      "Quebras de texto estratégicas",
      "Marcadores visuais"
    ],
    benefits: [
      "Leitura mais fluida",
      "Redução de erros de interpretação",
      "Menor cansaço visual",
      "Maior autonomia na leitura"
    ],
    icon: Eye,
    color: "bg-secondary-accent",
    stats: { usage: "0", satisfaction: "0%" }
  },
  {
    name: "Agente TEA",
    description: "Oferece linguagem objetiva, ícones e divisões visuais por tópicos.",
    fullDescription: "Criado para pessoas no Transtorno do Espectro Autista, este agente estrutura textos de forma objetiva e previsível, utilizando linguagem clara, ícones explicativos e organização visual que facilita a compreensão e reduz ansiedades.",
    features: [
      "Linguagem objetiva e direta",
      "Estruturação por tópicos",
      "Ícones explicativos",
      "Sequência lógica clara",
      "Redução de ambiguidades"
    ],
    benefits: [
      "Compreensão mais clara",
      "Redução de ansiedade",
      "Previsibilidade estrutural",
      "Comunicação efetiva"
    ],
    icon: Heart,
    color: "bg-accent",
    stats: { usage: "0", satisfaction: "0%" }
  },
  {
    name: "Narrador",
    description: "Converte textos em áudio com vozes naturais.",
    fullDescription: "Desenvolvido para pessoas com deficiência visual ou baixa visão, o Narrador utiliza tecnologia de síntese de voz avançada para criar áudios naturais e expressivos, permitindo o acesso completo ao conteúdo textual.",
    features: [
      "Síntese de voz natural",
      "Múltiplas vozes disponíveis",
      "Controle de velocidade",
      "Pausas e entonação",
      "Download de áudio"
    ],
    benefits: [
      "Acessibilidade total para deficientes visuais",
      "Multitarefa durante audição",
      "Aprendizado auditivo",
      "Portabilidade do conteúdo"
    ],
    icon: Volume2,
    color: "bg-primary-glow",
    stats: { usage: "0", satisfaction: "0%" }
  },
];

const Agentes = () => {
  const navigate = useNavigate();

  const handleTestAgent = (agent) => {
    // Navega para a página inicial com o agente selecionado
    navigate("/", { 
      state: { 
        selectedAgent: {
          name: agent.name,
          description: agent.description,
          icon: agent.icon,
          color: agent.color
        }
      }
    });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-gentle">
        <Header />
        
        <main className="container mx-auto px-4 py-8" role="main">
          {/* Hero Section */}
          <section className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Agentes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Conheça em detalhes cada um dos nossos agentes de inclusão, desenvolvidos com tecnologia 
              de ponta para atender necessidades específicas de acessibilidade.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-card">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-medium">5 Agentes Especializados</span>
              </div>
              <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-card">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">Tecnologia IA Avançada</span>
              </div>
              <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-card">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">0+ Usuários</span>
              </div>
            </div>
          </section>

          {/* Agents List */}
          <section className="space-y-8 max-w-5xl mx-auto">
            {agents.map((agent, index) => (
              <Card 
                key={agent.name} 
                className="shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl ${agent.color} shadow-lg`}>
                      <agent.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl text-foreground">{agent.name}</CardTitle>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {agent.stats.usage} usuários
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {agent.stats.satisfaction} satisfação
                          </Badge>
                        </div>
                      </div>
                      
                      <CardDescription className="text-base leading-relaxed">
                        {agent.fullDescription}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Recursos Principais
                      </h4>
                      <ul className="space-y-2">
                        {agent.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        Benefícios
                      </h4>
                      <ul className="space-y-2">
                        {agent.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 bg-secondary-accent rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      Especializado para máxima acessibilidade e inclusão
                    </div>
                    <Button 
                      onClick={() => handleTestAgent(agent)}
                      className="gap-2"
                    >
                      Testar Agente
                      <Target className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* CTA Section */}
          <section className="text-center mt-16 bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para tornar seus textos acessíveis?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experimente nossos agentes gratuitamente e descubra como a tecnologia pode 
              promover a inclusão digital de forma simples e efetiva.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate("/")}
              className="gap-2"
            >
              Começar Agora
              <Zap className="h-5 w-5" />
            </Button>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Agentes;