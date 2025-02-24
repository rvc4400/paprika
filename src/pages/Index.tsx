
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, LayoutDashboard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Paprika Feedback</h1>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link to="/chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Acessar Chat
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/dashboard" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Área Logada
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
