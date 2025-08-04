import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Ebooks', href: '/ebooks' },
    { name: 'Curso', href: '/curso' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-primary hover:text-purple-medium transition-smooth"
          >
            ACOLHENDO A SOMBRA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-purple-medium ${
                  isActive(item.href) 
                    ? 'text-purple-medium border-b-2 border-purple-medium' 
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-border">
              <a
                href="https://www.instagram.com/acolhendoasombra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-medium transition-smooth"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@acolhendoasombra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-medium transition-smooth"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-smooth ${
                    isActive(item.href)
                      ? 'text-purple-medium bg-purple-light'
                      : 'text-foreground hover:text-purple-medium hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-3 py-2 mt-4 pt-4 border-t border-border">
                <a
                  href="https://www.instagram.com/acolhendoasombra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-medium transition-smooth"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@acolhendoasombra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-medium transition-smooth"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;