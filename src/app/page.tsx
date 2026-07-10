export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-amber-600">🐾 PetShop</h1>
            <nav className="hidden md:flex gap-8">
              <a href="#servicos" className="text-gray-700 dark:text-gray-300 hover:text-amber-600">
                Serviços
              </a>
              <a href="#promocao" className="text-gray-700 dark:text-gray-300 hover:text-amber-600">
                Promoção
              </a>
              <a href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-amber-600">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-black py-20 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Cuidado com carinho para seu melhor amigo
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Oferecemos os melhores serviços de banho, tosa, vacinação e consultoria veterinária para manter seu pet saudável e feliz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                  Agendar Consulta
                </button>
                <button className="border-2 border-amber-600 text-amber-600 dark:text-amber-500 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 dark:hover:bg-gray-900 transition-colors">
                  Conhecer Mais
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Nossos Serviços
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="promocao" className="py-20 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-100 dark:bg-amber-900 rounded-2xl p-12 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                Promoção Especial! 🎉
              </h3>
              <p className="text-lg text-amber-800 dark:text-amber-200 mb-8 max-w-2xl mx-auto">
                Aproveite 20% de desconto em banho e tosa para novos clientes. Válido até o final do mês.
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Aproveitar Oferta
              </button>
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Entre em Contato
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="flex items-center justify-center gap-2">
                  <span>📞</span> (11) 9999-9999
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📧</span> contato@petshop.com.br
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📍</span> Rua das Flores, 123 - São Paulo, SP
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 PetShop. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    id: 1,
    icon: "🛁",
    name: "Banho",
    description: "Banho completo com produtos premium para deixar seu pet limpo e hidratado",
  },
  {
    id: 2,
    icon: "✂️",
    name: "Tosa",
    description: "Tosa estética profissional adaptada à raça e preferências do seu pet",
  },
  {
    id: 3,
    icon: "💉",
    name: "Vacinação",
    description: "Atualização de vacinas e controle de parasitas com veterinário",
  },
  {
    id: 4,
    icon: "🏥",
    name: "Consulta Vet",
    description: "Consulta veterinária completa com diagnóstico e prescrição de medicamentos",
  },
];
