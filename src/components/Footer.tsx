import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ACOLHENDO A SOMBRA</h3>
            <p className="text-muted-foreground max-w-md">
              Espaço de acolhimento, autoconhecimento e transformação emocional. 
              Conectando você com sua essência mais profunda.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-muted-foreground">contato@acolhendoasombra.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-muted-foreground">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/acolhendoasombra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary p-3 rounded-full hover:bg-accent transition-smooth"
              >
                <Instagram size={20} className="text-primary-foreground" />
              </a>
              <a
                href="https://www.youtube.com/@acolhendoasombra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary p-3 rounded-full hover:bg-accent transition-smooth"
              >
                <Youtube size={20} className="text-primary-foreground" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Siga-nos para conteúdos sobre autoconhecimento e bem-estar emocional.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Acolhendo a Sombra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;