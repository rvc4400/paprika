
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export const Cta = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">
            Pronto para revolucionar o feedback do seu restaurante?
          </h2>
          <p className="text-white/90 text-lg">
            Junte-se a centenas de restaurantes que já estão transformando
            feedbacks em crescimento com o Paprika.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/chat">
                <MessageSquare className="mr-2" />
                Comece Agora Mesmo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
