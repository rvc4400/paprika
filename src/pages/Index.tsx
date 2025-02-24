
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Paprika Feedback</h1>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link to="/chat">Acessar Chat</Link>
          </Button>
          <Button asChild>
            <Link to="/dashboard">Acessar Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
