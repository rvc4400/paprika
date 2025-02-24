
import { Star, TrendingUp, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Mais Avaliações",
    description: "Aumente suas avaliações positivas no Google e TripAdvisor."
  },
  {
    icon: TrendingUp,
    title: "Melhoria Contínua",
    description: "Identifique pontos de melhoria com análise de dados."
  },
  {
    icon: ThumbsUp,
    title: "Satisfação do Cliente",
    description: "Melhore a experiência e fidelize mais clientes."
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Benefícios
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Impacto real no seu negócio
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl hover:border-primary/50 transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <benefit.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
            </div>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
