import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-deep text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ACOLHENDO A SOMBRA</h3>
            <p className="text-purple-light max-w-md">
              Espaço de acolhimento, autoconhecimento e transformação emocional. 
              Conectando você com sua essência mais profunda.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-light" />
                <span className="text-purple-light">contato@acolhendoasombra.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-purple-light" />
                <span className="text-purple-light">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-purple-light" />
                <span className="text-purple-light">São Paulo, SP</span>
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
                className="bg-purple-medium p-3 rounded-full hover:bg-purple-accent transition-smooth"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@acolhendoasombra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-medium p-3 rounded-full hover:bg-purple-accent transition-smooth"
              >
                <Youtube size={20} />
              </a>
            </div>
            <p className="text-sm text-purple-light">
              Siga-nos para conteúdos sobre autoconhecimento e bem-estar emocional.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-medium mt-8 pt-8 text-center">
          <p className="text-purple-light">
            © 2024 Acolhendo a Sombra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;