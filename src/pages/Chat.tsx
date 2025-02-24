
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Map, Star, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ChatPage = () => {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/functions/v1/chat-completion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) throw new Error('Falha ao obter resposta');

      const data = await response.json();
      const assistantMessage = {
        role: "assistant" as const,
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível processar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-primary/80 backdrop-blur-lg z-50 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/90" asChild>
                <Link to="/">
                  <ArrowLeft />
                  <span className="sr-only">Voltar para página inicial</span>
                </Link>
              </Button>
              <MessageSquare className="text-white" />
              <h1 className="text-xl font-bold text-white">Paprika Feedback</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full sm:w-auto text-sm"
                onClick={() => window.open("https://www.google.com/maps", "_blank")}
              >
                <Map className="mr-2 h-4 w-4" />
                Avaliar no Google
              </Button>
              <Button 
                variant="secondary" 
                size="sm"
                className="w-full sm:w-auto text-sm"
                onClick={() => window.open("https://www.tripadvisor.com", "_blank")}
              >
                <Star className="mr-2 h-4 w-4" />
                TripAdvisor
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto pt-32 sm:pt-24 pb-24 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-muted-foreground p-8">
              <MessageSquare className="mx-auto h-12 w-12 mb-2 opacity-50" />
              <p>Olá! Sou um assistente virtual alimentado por GPT, pronto para receber seu feedback sobre o Restaurante X. Sua opinião é muito importante para continuarmos melhorando nossa experiência gastronômica!</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[85%] sm:max-w-[70%] ${
                    message.role === "user"
                      ? "bg-primary text-white"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-2">
                Digitando...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full bg-background border-t p-4"
      >
        <div className="max-w-3xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite seu feedback..."
            className="flex-1 rounded-lg border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar mensagem</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatPage;
