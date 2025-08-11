import { ThemeProvider } from "next-themes";
import { Heart, Target, Users, Zap, Mail, Github, Linkedin, Globe, Flag, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const openEmail = () => {
  window.location.href = "mailto:agentesdeinclusao@gmail.com";
}

const openGitHub = () => {
  window.location.href = "https://github.com/SatiroDev/agentes-de-inclus-o"
}
const Sobre = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-gentle">
        <Header />
        
        <main className="container mx-auto px-4 py-8" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre os
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Agentes da Inclusão</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Nascemos da convicção de que a tecnologia deve ser uma ponte para a inclusão, 
              não uma barreira. Nossa missão é democratizar o acesso à informação para todos.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  Nossa Missão
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Acreditamos que cada pessoa tem direito ao acesso pleno à informação. 
                  Por isso, desenvolvemos tecnologias de inteligência artificial que adaptam 
                  textos automaticamente para diferentes necessidades específicas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossos agentes não apenas convertem textos - eles criam pontes de 
                  compreensão, respeitando as particularidades de cada usuário e 
                  promovendo verdadeira inclusão digital.
                </p>
              </div>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Nossos Valores
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-gradient-sky-strong rounded-full mt-2 animate-pulse"
                    style={{ animationDelay : `${0.4}s`, animationDuration: "1.5"}}/>
                    <div>
                      <h4 className="font-semibold text-foreground">Inclusão Universal</h4>
                      <p className="text-sm text-muted-foreground">Tecnologia acessível para todas as pessoas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-gradient-sky-strong  rounded-full mt-2 animate-pulse" 
                    style={{ animationDelay : `${0.6}s`, animationDuration: "1.5"}}/>
                    <div>
                      <h4 className="font-semibold text-foreground">Inovação Responsável</h4>
                      <p className="text-sm text-muted-foreground">IA desenvolvida com ética e propósito</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-gradient-sky-strong rounded-full mt-2 animate-pulse" 
                    style={{ animationDelay : `${0.8}s`, animationDuration: "1.5"}}/>
                    <div>
                      <h4 className="font-semibold text-foreground">Impacto Social</h4>
                      <p className="text-sm text-muted-foreground">Foco em transformação positiva da sociedade</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Agentes Especializados */}
          <section className="mb-16 animate-scale-in">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Agentes Especializados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card className="text-center shadow-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">TDAH</div>
                  <p className="text-sm text-muted-foreground">Simplificação inteligente</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">Surdo</div>
                  <p className="text-sm text-muted-foreground">Adaptação visual</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">Dislexia</div>
                  <p className="text-sm text-muted-foreground">Formatação otimizada</p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">TEA</div>
                  <p className="text-sm text-muted-foreground">Estruturação clara</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">Audio</div>
                  <p className="text-sm text-muted-foreground">Síntese de voz</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Entre em Contato
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tem sugestões, feedback ou quer colaborar conosco? Adoraríamos ouvir você! 
              Juntos podemos tornar a web mais inclusiva para todos.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 select-none"
                onClick={openEmail}
                type="button"
              >
                <Mail className="h-4 w-4" />
                agentesdeinclusao@gmail.com
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2 select-none"
                onClick={openGitHub}
                type="button"
                >
                
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <Globe className="h-4 w-4 inline mr-2" />
              Projeto open-source • Licença MIT • Feito com{' '}
              <Heart className="inline h-4 w-4 text-red-500 animate-pulse" 
              style={{ fill: "red", stroke: "red" }}/>{' '}
              para a inclusão
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Sobre;