import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import therapistPortrait from '@/assets/therapist-portrait.jpg';

const Sobre = () => {
  return (
    <Layout>
      <div className="bg-gradient-soft">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  Sobre Mim
                </h1>
                <p className="text-xl text-muted-foreground">
                  Psicóloga dedicada ao acolhimento e transformação emocional
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={therapistPortrait}
                    alt="Terapeuta - Retrato profissional"
                    className="w-80 h-80 object-cover rounded-full shadow-strong"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Minha Jornada
                  </h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                      Há mais de 10 anos dedico minha vida ao acompanhamento de pessoas em 
                      seus processos de autoconhecimento e transformação emocional. Acredito 
                      profundamente que cada indivíduo possui em si a capacidade de cura e 
                      crescimento.
                    </p>
                    <p>
                      Minha abordagem terapêutica integra diferentes correntes da psicologia, 
                      sempre respeitando a singularidade de cada pessoa. O trabalho com "a sombra" 
                      - aqueles aspectos de nós mesmos que muitas vezes rejeitamos ou negamos - 
                      é fundamental para um processo de integração e wholeness.
                    </p>
                    <p>
                      Acredito que o acolhimento genuíno e a criação de um espaço seguro são 
                      a base para qualquer transformação verdadeira. É neste espaço de confiança 
                      que podemos nos permitir ser vulneráveis e, assim, acessar nossa força interior.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Formação e Especialidades
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-medium mb-3">
                        Formação Acadêmica
                      </h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Graduação em Psicologia</li>
                        <li>• Especialização em Psicologia Clínica</li>
                        <li>• Formação em Psicologia Analítica</li>
                        <li>• Mestrado em Psicologia Profunda</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-medium mb-3">
                        Áreas de Especialização
                      </h3>
                      <ul className="space-y-2 text-foreground">
                        <li>• Trabalho com a Sombra</li>
                        <li>• Ansiedade e Depressão</li>
                        <li>• Relacionamentos</li>
                        <li>• Autoestima e Autoconhecimento</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Minha Filosofia
                  </h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                      "Acolher a sombra não significa aceitar passivamente nossos aspectos 
                      difíceis, mas sim integrá-los conscientemente em nossa jornada de 
                      crescimento. É no encontro conosco mesmos, sem julgamentos, que 
                      encontramos nossa verdadeira força."
                    </p>
                    <p>
                      Acredito que cada pessoa é a especialista de sua própria vida, e meu 
                      papel é oferecer suporte, ferramentas e um espaço seguro para que você 
                      possa se reconectar com sua sabedoria interior.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sobre;