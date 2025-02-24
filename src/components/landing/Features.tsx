
import { QrCode, MessageSquare, BarChart } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Code Simples e Rápido",
    description: "Sistema simplificado de feedback via QR code. Instale em minutos e comece a receber feedback instantaneamente!"
  },
  {
    icon: MessageSquare,
    title: "Chatbot com IA",
    description: "Coleta de feedback guiada por inteligência artificial personalizada."
  },
  {
    icon: BarChart,
    title: "Dashboard Completo",
    description: "Visualize e analise todos os feedbacks em um só lugar."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tudo que Você Precisa
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ferramentas essenciais para transformar feedback em crescimento
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
