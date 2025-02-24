import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Star, 
  TrendingUp, 
  QrCode,
  BarChart,
  ThumbsUp,
  LogIn
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Transforme Feedbacks em
            <span className="text-primary block">Experiências Inesquecíveis!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conecte-se com seus clientes através de um sistema inteligente de feedback
            que aumenta sua reputação online e melhora a experiência do seu restaurante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="default" className="text-lg" asChild>
              <Link to="/chat">
                <MessageSquare className="mr-2" />
                Login
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recursos Principais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para transformar feedback em crescimento
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

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Processo simples e eficiente para coletar feedbacks valiosos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* CTA Section */}
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
    </div>
  );
}

const features = [
  {
    icon: QrCode,
    title: "QR Code Inteligente",
    description: "Sistema simplificado de feedback via QR code para seus clientes."
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

const steps = [
  {
    title: "Escaneie o QR Code",
    description: "Cliente escaneia o código QR disponível no restaurante."
  },
  {
    title: "Interaja com o Chatbot",
    description: "IA guia o cliente para coletar feedback detalhado."
  },
  {
    title: "Análise os Resultados",
    description: "Acesse insights valiosos no dashboard do restaurante."
  }
];

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
