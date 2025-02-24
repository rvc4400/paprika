
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, LogIn } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold">
            Paprika Feedback
          </h1>
          
          <p className="text-xl text-muted-foreground">
            A maneira mais simples de receber feedback dos seus clientes e melhorar seu restaurante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/chat" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Teste Agora
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/dashboard" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Entrar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
