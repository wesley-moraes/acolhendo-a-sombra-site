import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Star } from 'lucide-react';
import therapistHero from '@/assets/therapist-hero.jpg';
import therapistSession from '@/assets/therapist-session.jpg';
import therapistEnvironment from '@/assets/therapist-environment.jpg';
import therapistPortrait from '@/assets/therapist-portrait.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={therapistHero} 
            alt="Terapeuta - Acolhendo a Sombra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            ACOLHENDO A SOMBRA
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground animate-fade-in">
            Espaço de acolhimento, autoconhecimento e transformação emocional
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-muted transition-smooth shadow-medium"
              onClick={() => window.location.href = '/contato'}
            >
              Agendar Consulta
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-smooth"
              onClick={() => window.location.href = '/sobre'}
            >
              Conheça Minha História
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                Um Espaço Seguro Para Sua Jornada
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito profundamente que cada pessoa possui em si a capacidade de cura e 
                crescimento. Meu papel é oferecer suporte, acolhimento e ferramentas para 
                que você possa se reconectar com sua sabedoria interior.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O trabalho com "a sombra" - aqueles aspectos de nós mesmos que muitas vezes 
                rejeitamos - é fundamental para um processo de integração e completude. 
                É no encontro conosco mesmos, sem julgamentos, que encontramos nossa verdadeira força.
              </p>
              <Button 
                className="bg-gradient-primary hover:opacity-90 transition-smooth"
                onClick={() => window.location.href = '/sobre'}
              >
                Saiba Mais Sobre Mim
              </Button>
            </div>
            <div className="relative">
              <img 
                src={therapistSession}
                alt="Terapeuta em sessão"
                className="w-full rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Como Posso Ajudar Você
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofertas terapêuticas personalizadas para sua jornada de autoconhecimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Terapia Individual',
                description: 'Sessões personalizadas focadas no seu crescimento pessoal e autoconhecimento.'
              },
              {
                icon: Users,
                title: 'Terapia de Casal',
                description: 'Fortalecimento de vínculos e melhoria da comunicação em relacionamentos.'
              },
              {
                icon: BookOpen,
                title: 'Grupos Terapêuticos',
                description: 'Experiência de cura coletiva e apoio mútuo em um ambiente seguro.'
              }
            ].map((service, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth"
              onClick={() => window.location.href = '/servicos'}
            >
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Experiências de Transformação
            </h2>
            <p className="text-xl text-muted-foreground">
              Depoimentos de pessoas que encontraram acolhimento e crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Encontrei um espaço verdadeiramente seguro para explorar aspectos de mim que não conseguia aceitar. A terapia me ajudou a abraçar minha totalidade.",
                name: "Maria S.",
                stars: 5
              },
              {
                text: "O trabalho com a sombra transformou completamente minha relação comigo mesma. Hoje me sinto mais integrada e em paz.",
                name: "Ana L.",
                stars: 5
              },
              {
                text: "A abordagem acolhedora e profunda me permitiu acessar recursos internos que nem sabia que tinha. Sou muito grata por essa jornada.",
                name: "Carla M.",
                stars: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={therapistEnvironment}
                alt="Ambiente acolhedor de terapia"
                className="w-full rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                Um Ambiente Acolhedor
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Criamos juntos um espaço onde você pode se sentir seguro para explorar, 
                descobrir e crescer. O ambiente terapêutico é cuidadosamente preparado 
                para proporcionar conforto e tranquilidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seja presencialmente ou online, o mais importante é que você se sinta 
                acolhido e compreendido em sua jornada única de autoconhecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src={therapistPortrait}
              alt="Retrato da terapeuta"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-6 shadow-strong border-4 border-white/20"
            />
            <h2 className="text-4xl font-bold mb-6">
              Pronto Para Começar Sua Jornada?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma conversa inicial e descubra como posso apoiar você em seu 
              processo de autoconhecimento e transformação emocional.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-muted transition-smooth"
              onClick={() => window.location.href = '/contato'}
            >
              Agendar Primeira Consulta
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-smooth"
              onClick={() => window.location.href = '/blog'}
            >
              Ler Nossos Artigos
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
