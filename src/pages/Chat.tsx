
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Google, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChatPage = () => {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simular resposta do assistente
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Obrigado pelo seu feedback! Como podemos melhorar ainda mais sua experiência?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-primary/80 backdrop-blur-lg z-50 p-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-white" />
            <h1 className="text-xl font-bold text-white">Paprika Feedback</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={() => window.open("https://www.google.com/maps", "_blank")}>
              <Google className="mr-2 h-4 w-4" />
              Avaliar no Google
            </Button>
            <Button variant="secondary" size="sm" onClick={() => window.open("https://www.tripadvisor.com", "_blank")}>
              <Star className="mr-2 h-4 w-4" />
              TripAdvisor
            </Button>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-muted-foreground p-8">
              <MessageSquare className="mx-auto h-12 w-12 mb-2 opacity-50" />
              <p>Comece a conversa compartilhando seu feedback!</p>
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
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
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
          />
          <Button type="submit" className="shrink-0">
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar mensagem</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatPage;
