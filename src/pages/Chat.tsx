
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Mic, MapPin, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChatPage = () => {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    toast({
      description: "Em breve você receberá uma resposta!",
    });

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

  const handleVoiceRecord = () => {
    if (!isRecording) {
      // Solicitar permissão do microfone
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          setIsRecording(true);
          toast({
            description: "Gravando áudio... Clique novamente para parar.",
          });
        })
        .catch((err) => {
          toast({
            variant: "destructive",
            description: "Erro ao acessar o microfone. Por favor, permita o acesso.",
          });
        });
    } else {
      setIsRecording(false);
      toast({
        description: "Gravação finalizada!",
      });
    }
  };

  const openExternalReview = (platform: "google" | "tripadvisor") => {
    // Aqui você deve substituir pelos links reais do seu estabelecimento
    const urls = {
      google: "https://www.google.com/maps/place/seu-restaurante",
      tripadvisor: "https://www.tripadvisor.com/seu-restaurante",
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-primary/80 backdrop-blur-lg z-50 p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          <MessageSquare className="text-white" />
          <h1 className="text-xl font-bold text-white">Paprika Feedback</h1>
        </div>
      </header>

      {/* External Review Buttons */}
      <div className="fixed top-20 right-4 flex flex-col gap-2 z-40">
        <Button
          variant="secondary"
          className="w-12 h-12 rounded-full p-0"
          onClick={() => openExternalReview("google")}
        >
          <MapPin className="h-6 w-6" />
          <span className="sr-only">Avaliar no Google Maps</span>
        </Button>
        <Button
          variant="secondary"
          className="w-12 h-12 rounded-full p-0"
          onClick={() => openExternalReview("tripadvisor")}
        >
          <Star className="h-6 w-6" />
          <span className="sr-only">Avaliar no TripAdvisor</span>
        </Button>
      </div>

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
          <Button
            type="button"
            variant="outline"
            size="icon"
            className={`shrink-0 ${isRecording ? "bg-red-100" : ""}`}
            onClick={handleVoiceRecord}
          >
            <Mic className={`h-4 w-4 ${isRecording ? "text-red-500" : ""}`} />
            <span className="sr-only">Gravar áudio</span>
          </Button>
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
