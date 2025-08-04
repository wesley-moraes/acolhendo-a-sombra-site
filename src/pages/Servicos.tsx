import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, BookOpen, Video, Clock, MapPin, Shell } from 'lucide-react';

const Servicos = () => {

  const services = [
    {
      icon: Shell,
      title: 'Baralho Cigano',
      description: 'Sessões personalizadas para autoconhecimento e transformação emocional.',
      duration: '50 minutos',
      format: 'Presencial ou Online',
      features: [
        'Acolhimento em espaço seguro',
        'Trabalho com a sombra',
        'Técnicas integradas',
        'Foco na sua singularidade'
      ]
    },
    {
      icon: Users,
      title: 'Constelação Sistêmica Interdimensional',
      description: 'Fortalecimento de vínculos e comunicação em relacionamentos.',
      duration: '60 minutos',
      format: 'Presencial ou Online',
      features: [
        'Melhoria da comunicação',
        'Resolução de conflitos',
        'Fortalecimento do vínculo',
        'Crescimento conjunto'
      ]
    },
    {
      icon: BookOpen,
      title: 'Terapia de Vidas Passadas',
      description: 'Experiência de cura coletiva e apoio mútuo.',
      duration: '90 minutos',
      format: 'Presencial',
      features: [
        'Apoio grupal',
        'Temas específicos',
        'Dinâmicas terapêuticas',
        'Crescimento coletivo'
      ]
    },
    {
      icon: Video,
      title: 'Grupos Terapêuticos de Mulheres',
      description: 'Orientação para profissionais da área de saúde mental.',
      duration: '60 minutos',
      format: 'Online ou Presencial',
      features: [
        'Desenvolvimento profissional',
        'Discussão de casos',
        'Apoio técnico',
        'Crescimento clínico'
      ]
    },
    {
      icon: Video,
      title: 'Desenvolvimento da sensitividade',
      description: 'Orientação para profissionais da área de saúde mental.',
      duration: '60 minutos',
      format: 'Online ou Presencial',
      features: [
        'Desenvolvimento profissional',
        'Discussão de casos',
        'Apoio técnico',
        'Crescimento clínico'
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-soft">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Serviços
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofertas terapêuticas personalizadas para sua jornada de autoconhecimento 
              e transformação emocional
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <service.icon size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-purple-medium" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-purple-medium" />
                        <span>{service.format}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">O que inclui:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-purple-medium rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
                      onClick={() => window.location.href = '/contato'}
                    >
                      Agendar Consulta
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Como Funciona o Processo Terapêutico
              </h2>
              <p className="text-muted-foreground">
                Um caminho estruturado para sua transformação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Primeiro Contato',
                  description: 'Conversa inicial para entender suas necessidades e expectativas.'
                },
                {
                  step: '02',
                  title: 'Avaliação',
                  description: 'Compreensão profunda do seu momento atual e objetivos terapêuticos.'
                },
                {
                  step: '03',
                  title: 'Processo',
                  description: 'Sessões regulares focadas no seu crescimento e autoconhecimento.'
                },
                {
                  step: '04',
                  title: 'Integração',
                  description: 'Consolidação dos aprendizados e planejamento do futuro.'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Servicos;