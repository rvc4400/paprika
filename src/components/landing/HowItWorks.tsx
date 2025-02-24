
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

export const HowItWorks = () => {
  return (
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
  );
};
