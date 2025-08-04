import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'O Que É a Sombra e Por Que Ela Importa?',
      excerpt: 'Entenda o conceito junguiano de sombra e como trabalhar com os aspectos rejeitados da personalidade pode transformar sua vida.',
      category: 'Autoconhecimento',
      date: '15 de Dezembro, 2024',
      readTime: '8 min',
      featured: true
    },
    {
      title: 'Ansiedade: Inimiga ou Aliada?',
      excerpt: 'Descubra como mudar sua relação com a ansiedade e transformá-la em uma ferramenta de crescimento pessoal.',
      category: 'Bem-estar',
      date: '10 de Dezembro, 2024',
      readTime: '6 min'
    },
    {
      title: 'A Arte de Se Relacionar Conscientemente',
      excerpt: 'Aprenda princípios fundamentais para construir relacionamentos mais profundos e autênticos.',
      category: 'Relacionamentos',
      date: '5 de Dezembro, 2024',
      readTime: '10 min'
    },
    {
      title: 'Vulnerabilidade Como Força',
      excerpt: 'Por que permitir-se ser vulnerável é o caminho para a verdadeira força interior e conexão humana.',
      category: 'Crescimento Pessoal',
      date: '1 de Dezembro, 2024',
      readTime: '7 min'
    },
    {
      title: 'Meditação e Saúde Mental',
      excerpt: 'Como a prática meditativa pode ser uma ferramenta poderosa para o equilíbrio emocional e autoconhecimento.',
      category: 'Práticas',
      date: '28 de Novembro, 2024',
      readTime: '5 min'
    },
    {
      title: 'O Poder das Emoções Difíceis',
      excerpt: 'Entenda como raiva, tristeza e medo podem ser portais para um maior autoconhecimento.',
      category: 'Emoções',
      date: '25 de Novembro, 2024',
      readTime: '9 min'
    }
  ];

  const categories = ['Todos', 'Autoconhecimento', 'Bem-estar', 'Relacionamentos', 'Crescimento Pessoal', 'Práticas', 'Emoções'];

  return (
    <Layout>
      <div className="bg-gradient-soft">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Blog & Artigos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reflexões, insights e conhecimentos sobre psicologia, autoconhecimento 
              e bem-estar emocional
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`px-4 py-2 cursor-pointer transition-smooth ${
                    index === 0 
                      ? 'bg-purple-medium hover:bg-purple-accent' 
                      : 'border-purple-medium text-purple-medium hover:bg-purple-medium hover:text-primary-foreground'
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {articles.filter(article => article.featured).map((article, index) => (
              <Card key={index} className="shadow-strong hover:shadow-strong transition-smooth overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gradient-primary p-12 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground">
                        ARTIGO EM DESTAQUE
                      </Badge>
                      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                      <div className="flex items-center justify-center space-x-6 text-purple-light">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span className="text-sm">{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span className="text-sm">{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <Badge variant="outline" className="border-purple-medium text-purple-medium w-fit">
                        {article.category}
                      </Badge>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {article.excerpt}
                      </p>
                      <button className="flex items-center space-x-2 text-purple-medium hover:text-purple-accent transition-smooth font-semibold">
                        <span>Ler artigo completo</span>
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Artigos Recentes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.filter(article => !article.featured).map((article, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-purple-medium text-purple-medium">
                        {article.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{article.date.split(',')[0]}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <button className="flex items-center space-x-2 text-purple-medium hover:text-purple-accent transition-smooth font-semibold">
                      <span>Continuar lendo</span>
                      <ArrowRight size={16} />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-purple-deep text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Não Perca Nenhum Artigo
            </h2>
            <p className="text-xl text-purple-light mb-8">
              Receba nossos artigos diretamente em seu e-mail e mantenha-se conectado 
              com conteúdos sobre autoconhecimento e bem-estar emocional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-md text-purple-deep"
              />
              <button className="bg-white text-purple-deep px-6 py-3 rounded-md font-semibold hover:bg-purple-light transition-smooth">
                Inscrever-se
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;