
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  MessageSquare,
  Users,
  ListFilter,
} from "lucide-react";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("today");

  // Dados simulados (será substituído por dados reais do backend)
  const feedbackStats = {
    total: 150,
    positive: 120,
    neutral: 20,
    negative: 10,
  };

  const recentFeedback = [
    {
      id: 1,
      message: "Ótimo atendimento! A comida estava deliciosa.",
      sentiment: "positive",
      date: "2024-03-10T15:30:00",
    },
    {
      id: 2,
      message: "O tempo de espera foi um pouco longo hoje.",
      sentiment: "neutral",
      date: "2024-03-10T14:20:00",
    },
    // Adicione mais feedbacks conforme necessário
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl font-bold">Dashboard do Restaurante</h1>
          <div className="flex gap-2">
            <Button
              variant={selectedPeriod === "today" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("today")}
            >
              Hoje
            </Button>
            <Button
              variant={selectedPeriod === "week" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("week")}
            >
              Semana
            </Button>
            <Button
              variant={selectedPeriod === "month" ? "default" : "outline"}
              onClick={() => setSelectedPeriod("month")}
            >
              Mês
            </Button>
          </div>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <MessageSquare className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Feedbacks</p>
                <p className="text-2xl font-bold">{feedbackStats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Clientes Únicos</p>
                <p className="text-2xl font-bold">89</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <BarChart className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Satisfação Média</p>
                <p className="text-2xl font-bold">4.8/5.0</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <ListFilter className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Categorias</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Feedbacks Recentes */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Feedbacks Recentes</h2>
          <div className="space-y-4">
            {recentFeedback.map((feedback) => (
              <div
                key={feedback.id}
                className="border-b pb-4 last:border-b-0 last:pb-0"
              >
                <p className="text-sm text-muted-foreground">
                  {new Date(feedback.date).toLocaleString("pt-BR")}
                </p>
                <p className="mt-1">{feedback.message}</p>
                <span
                  className={`inline-block mt-2 px-2 py-1 rounded-full text-xs ${
                    feedback.sentiment === "positive"
                      ? "bg-green-100 text-green-800"
                      : feedback.sentiment === "neutral"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {feedback.sentiment === "positive"
                    ? "Positivo"
                    : feedback.sentiment === "neutral"
                    ? "Neutro"
                    : "Negativo"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
