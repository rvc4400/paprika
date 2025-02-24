
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Transforme Feedbacks em
          <span className="text-primary block">Experiências Inesquecíveis!</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conecte-se com seus clientes através de um sistema inteligente de feedback
          que aumenta sua reputação online e melhora a experiência do seu restaurante.
          Integre seus feedbacks do Google Maps e TripAdvisor em um só lugar!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="default" className="text-lg" asChild>
            <Link to="/chat">
              <MessageSquare className="mr-2" />
              Testar Agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

