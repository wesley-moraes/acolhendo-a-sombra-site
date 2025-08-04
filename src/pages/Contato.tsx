import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from 'lucide-react';

const Contato = () => {
  return (
    <Layout>
      <div className="bg-gradient-soft">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dê o primeiro passo em sua jornada de autoconhecimento. 
              Estou aqui para acolher e apoiar você.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Entre em Contato
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entrarei em contato em até 24 horas.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Nome *</label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Telefone</label>
                      <Input placeholder="(11) 99999-9999" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">E-mail *</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Tipo de Serviço</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary">
                      <option value="">Selecione um serviço</option>
                      <option value="individual">Terapia Individual</option>
                      <option value="casal">Terapia de Casal</option>
                      <option value="grupo">Grupo Terapêutico</option>
                      <option value="supervisao">Supervisão Clínica</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Mensagem *</label>
                    <Textarea 
                      placeholder="Conte um pouco sobre o que te trouxe até aqui e como posso ajudar..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth">
                    Enviar Mensagem
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios. Suas informações são tratadas com total confidencialidade.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      Informações de Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-secondary rounded-lg">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">E-mail</h4>
                        <p className="text-muted-foreground">contato@acolhendoasombra.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-secondary rounded-lg">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Telefone/WhatsApp</h4>
                        <p className="text-muted-foreground">(11) 99999-9999</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-secondary rounded-lg">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Localização</h4>
                        <p className="text-muted-foreground">São Paulo, SP</p>
                        <p className="text-sm text-muted-foreground">Atendimento presencial e online</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-secondary rounded-lg">
                        <Clock className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                        <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-muted-foreground">Sábado: 8h às 14h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      Redes Sociais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Acompanhe conteúdos sobre autoconhecimento e bem-estar emocional:
                    </p>
                    
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/acolhendoasombra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-secondary transition-smooth"
                      >
                        <Instagram className="text-primary" size={24} />
                        <div>
                          <h4 className="font-semibold text-foreground">Instagram</h4>
                          <p className="text-sm text-muted-foreground">@acolhendoasombra</p>
                        </div>
                      </a>
                      
                      <a
                        href="https://www.youtube.com/@acolhendoasombra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-secondary transition-smooth"
                      >
                        <Youtube className="text-primary" size={24} />
                        <div>
                          <h4 className="font-semibold text-foreground">YouTube</h4>
                          <p className="text-sm text-muted-foreground">@acolhendoasombra</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Note */}
                <Card className="shadow-medium bg-destructive/10 border-destructive/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-destructive mb-2">
                      Em caso de emergência
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Se você está passando por uma crise emocional ou pensamentos suicidas, 
                      procure ajuda imediata no CVV (Centro de Valorização da Vida): 
                      <strong className="text-destructive"> 188</strong> ou acesse 
                      <strong className="text-destructive"> cvv.org.br</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Como funciona a primeira consulta?',
                  answer: 'A primeira consulta é um momento de conhecimento mútuo, onde conversamos sobre suas necessidades, expectativas e como posso ajudar em sua jornada.'
                },
                {
                  question: 'Vocês atendem convênios?',
                  answer: 'Atualmente não atendemos convênios, mas fornecemos recibos para reembolso conforme as regras do seu plano de saúde.'
                },
                {
                  question: 'Qual a frequência das sessões?',
                  answer: 'Geralmente recomendo sessões semanais, mas a frequência pode variar conforme suas necessidades e disponibilidade.'
                },
                {
                  question: 'Oferecem atendimento online?',
                  answer: 'Sim, oferecemos atendimento online através de plataformas seguras e confiáveis, mantendo a mesma qualidade do atendimento presencial.'
                }
              ].map((faq, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contato;