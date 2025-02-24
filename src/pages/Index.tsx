
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, LayoutDashboard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold">Paprika Feedback</h1>
          <p className="text-lg text-muted-foreground">
            Transforme o feedback dos seus clientes em insights valiosos para o seu restaurante
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 max-w-lg mx-auto">
            <Button asChild size="lg">
              <Link to="/chat" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Acessar Chat
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/dashboard" className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Área Logada
              </Link>
            </Button>
          </div>

          <div className="pt-12">
            <h2 className="text-2xl font-semibold mb-4">Como funciona?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-4">
                <h3 className="font-medium mb-2">1. Acesso Fácil</h3>
                <p className="text-sm text-muted-foreground">
                  Seus clientes acessam o chat através de QR code ou link direto
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">2. Feedback Instantâneo</h3>
                <p className="text-sm text-muted-foreground">
                  Receba feedback em tempo real sobre a experiência no seu restaurante
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">3. Análise Detalhada</h3>
                <p className="text-sm text-muted-foreground">
                  Acesse o dashboard para análises e insights sobre os feedbacks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
