import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, Star } from 'lucide-react';

const Ebooks = () => {
  const ebooks = [
    {
      title: 'Acolhendo Sua Sombra',
      subtitle: 'Um Guia Prático para Autoconhecimento',
      description: 'Descubra como integrar os aspectos rejeitados de sua personalidade para uma vida mais plena e autêntica.',
      pages: '85 páginas',
      rating: 4.9,
      price: 'Gratuito',
      cover: 'bg-gradient-to-br from-purple-deep to-purple-medium',
      featured: true
    },
    {
      title: 'Relacionamentos Conscientes',
      subtitle: 'Construindo Vínculos Saudáveis',
      description: 'Aprenda a criar e manter relacionamentos mais profundos e significativos baseados na consciência e comunicação.',
      pages: '120 páginas',
      rating: 4.8,
      price: 'R$ 29,90',
      cover: 'bg-gradient-to-br from-purple-medium to-purple-accent'
    },
    {
      title: 'Ansiedade: Compreendendo e Transformando',
      subtitle: 'Ferramentas para o Bem-Estar Emocional',
      description: 'Estratégias práticas para compreender e trabalhar com a ansiedade de forma construtiva.',
      pages: '95 páginas',
      rating: 4.7,
      price: 'R$ 24,90',
      cover: 'bg-gradient-to-br from-purple-accent to-purple-deep'
    },
    {
      title: 'O Poder da Vulnerabilidade',
      subtitle: 'Força Através da Autenticidade',
      description: 'Entenda como a vulnerabilidade pode ser sua maior força na jornada de crescimento pessoal.',
      pages: '110 páginas',
      rating: 4.9,
      price: 'R$ 34,90',
      cover: 'bg-gradient-to-br from-purple-deep via-purple-medium to-purple-accent'
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-soft">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              E-books
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recursos digitais para apoiar sua jornada de autoconhecimento e 
              transformação emocional
            </p>
          </div>
        </section>

        {/* Featured Ebook */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {ebooks.filter(book => book.featured).map((book, index) => (
              <Card key={index} className="shadow-strong mb-16 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`${book.cover} p-12 flex items-center justify-center relative`}>
                    <div className="text-center text-primary-foreground">
                      <BookOpen size={80} className="mx-auto mb-4 opacity-90" />
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
                        <p className="text-lg opacity-90">{book.subtitle}</p>
                        <span className="inline-block mt-4 px-3 py-1 bg-white/20 rounded-full text-sm">
                          DESTAQUE
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-primary mb-4">{book.title}</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {book.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Star className="text-yellow-500 fill-current" size={20} />
                          <span className="font-semibold">{book.rating}</span>
                        </div>
                        <span className="text-muted-foreground">{book.pages}</span>
                        <span className="text-2xl font-bold text-purple-medium">{book.price}</span>
                      </div>

                      <Button 
                        size="lg" 
                        className="bg-gradient-primary hover:opacity-90 transition-smooth w-full md:w-auto"
                      >
                        <Download className="mr-2" size={20} />
                        Baixar Agora
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Ebooks */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Outros E-books Disponíveis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebooks.filter(book => !book.featured).map((book, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth overflow-hidden">
                  <div className={`${book.cover} h-48 flex items-center justify-center`}>
                    <BookOpen size={60} className="text-primary-foreground opacity-90" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{book.title}</CardTitle>
                    <p className="text-muted-foreground">{book.subtitle}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Star className="text-yellow-500 fill-current" size={16} />
                        <span>{book.rating}</span>
                      </div>
                      <span className="text-muted-foreground">{book.pages}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-purple-medium">{book.price}</span>
                      <Button variant="outline" className="border-purple-medium text-purple-medium hover:bg-purple-medium hover:text-primary-foreground">
                        <Download className="mr-2" size={16} />
                        Baixar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-deep text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Receba Novos E-books Primeiro
            </h2>
            <p className="text-xl text-purple-light mb-8">
              Inscreva-se em nossa newsletter e seja notificado sobre novos recursos 
              para sua jornada de autoconhecimento.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-deep hover:bg-purple-light"
            >
              Inscrever-se na Newsletter
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Ebooks;
