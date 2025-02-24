
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <img
              src="/lovable-uploads/f59ff8a2-4019-4a17-a2e2-b85c7f88eb17.png"
              alt="Paprika Logo"
              className="h-8"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#benefits" className="text-foreground/80 hover:text-foreground transition-colors">
              Benefícios
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <a
                href="#how-it-works"
                className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#benefits"
                className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <div className="px-4">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
