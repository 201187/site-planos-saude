import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './App.css'

// Import das imagens das operadoras
import amilLogo from './assets/operadoras/amil.png';
import bradescoLogo from './assets/operadoras/bradesco.png';
import notredameLogo from './assets/operadoras/notredame.png';
import sulamericaLogo from './assets/operadoras/sulamerica.jpg';
import unimedLogo from './assets/operadoras/unimed.png';
import santanderLogo from './assets/operadoras/santander.png';
import hapvidaLogo from './assets/operadoras/hapvida.png';
import sampLogo from './assets/operadoras/samp.jpg';
import portoSeguroLogo from './assets/operadoras/porto_seguro.jpg';
import omintLogo from './assets/operadoras/omint.png';

export default function App() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (carousel) {
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount = 0;
        } else {
          scrollAmount += 1;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = direction === "left" ? -200 : 200;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const operadoras = [
    { src: amilLogo, alt: "Amil" },
    { src: bradescoLogo, alt: "Bradesco Saúde" },
    { src: notredameLogo, alt: "NotreDame Intermédica" },
    { src: sulamericaLogo, alt: "SulAmérica" },
    { src: unimedLogo, alt: "Unimed" },
    { src: santanderLogo, alt: "Santander Saúde" },
    { src: hapvidaLogo, alt: "Hapvida" },
    { src: sampLogo, alt: "Samp" },
    { src: portoSeguroLogo, alt: "Porto Seguro" },
    { src: omintLogo, alt: "Omint" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-blue-600">Planos de Saúde com Ellen Castro Saturni</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Planos personalizados de acordo com o seu perfil, suas necessidades e seu orçamento. Atendimento humano, direto e eficiente. Conte com a expertise de quem entende do mercado e se importa com o seu bem-estar.
        </p>
      </header>

      {/* CTA Section */}
      <div className="text-center mb-10">
        <a
          href="https://wa.me/5511940365963"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition-colors"
        >
          Fale agora com a Ellen
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-50 rounded-2xl shadow-md p-6 max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Solicite sua cotação</h2>
        <form className="grid gap-4" action="https://formsubmit.co/ellen.saturni@gmail.com" method="POST">
          <input type="text" name="nome" placeholder="Nome completo" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="tel" name="telefone" placeholder="Telefone (WhatsApp)" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" name="email" placeholder="E-mail" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" required />

          <div>
            <label className="block mb-1 font-medium">Tipo de plano:</label>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-1">
                <input type="radio" name="tipo" value="individual" className="text-blue-600" /> Individual
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="tipo" value="familiar" className="text-blue-600" /> Familiar
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="tipo" value="empresarial" className="text-blue-600" /> Empresarial
              </label>
            </div>
          </div>

          <input type="number" name="quantidade" placeholder="Número de pessoas" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="mensagem" placeholder="Mensagem (opcional)" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white rounded-xl p-3 hover:bg-blue-700 transition-colors">
            Enviar solicitação
          </button>
          <input type="hidden" name="_next" value="https://wa.me/5511940365963" />
        </form>
      </section>

      {/* Benefícios */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-4 text-center">Por que contratar com a Ellen?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <li className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200 transition-colors">✔ Atendimento 100% personalizado</li>
          <li className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200 transition-colors">✔ Cotações em até 30 minutos</li>
          <li className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200 transition-colors">✔ Consultoria gratuita e sem compromisso</li>
          <li className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200 transition-colors">✔ As melhores operadoras do mercado</li>
          <li className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200 transition-colors">✔ Suporte direto via WhatsApp</li>
        </ul>
      </section>

      {/* Galeria de operadoras em carrossel */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-6 text-center">Trabalhamos com as principais operadoras do Brasil</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button onClick={() => scrollCarousel("left")} className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition-colors">
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button onClick={() => scrollCarousel("right")} className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-10"
            style={{ scrollBehavior: "smooth" }}
          >
            {operadoras.map((op) => (
              <div key={op.alt} className="flex-shrink-0 w-40 text-center">
                <div className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src={op.src} alt={op.alt} className="w-full h-20 object-contain mb-2" />
                  <p className="text-sm text-gray-600">{op.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a corretora */}
      <section className="max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-2">Sobre a corretora</h2>
        <p className="text-gray-700 leading-relaxed">
          Ellen Castro Saturni é corretora especializada em convênios médicos empresariais e familiares. Atua com transparência e foco na necessidade de cada cliente, oferecendo as melhores opções do mercado com agilidade e clareza. Atendimento 100% personalizado e consultoria completa.
        </p>
      </section>

      {/* Depoimentos */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-4 text-center">O que dizem os clientes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <blockquote className="bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition-shadow">
            <p className="italic text-gray-700">"A Ellen foi super ágil e me ajudou a encontrar o plano ideal para minha família. Super recomendo!"</p>
            <p className="mt-2 font-semibold text-right text-blue-600">— Mariana R., São Paulo</p>
          </blockquote>
          <blockquote className="bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition-shadow">
            <p className="italic text-gray-700">"Excelente atendimento e transparência. A consultoria da Ellen me poupou tempo e dinheiro."</p>
            <p className="mt-2 font-semibold text-right text-blue-600">— Carlos M., Barueri</p>
          </blockquote>
        </div>
      </section>

      {/* Contato */}
      <footer className="max-w-2xl mx-auto border-t pt-6 text-sm text-center">
        <p className="text-gray-600">Contato direto:</p>
        <div className="flex justify-center gap-4 mt-2 flex-wrap">
          <a href="https://wa.me/5511940365963" className="text-blue-600 hover:underline hover:text-blue-700 transition-colors">WhatsApp</a>
          <a href="mailto:ellen.saturni@gmail.com" className="text-blue-600 hover:underline hover:text-blue-700 transition-colors">E-mail</a>
          <a href="https://instagram.com/ellensaturni" className="text-blue-600 hover:underline hover:text-blue-700 transition-colors">Instagram</a>
          <a href="https://linkedin.com/in/ellencastro" className="text-blue-600 hover:underline hover:text-blue-700 transition-colors">LinkedIn</a>
        </div>
        <p className="mt-4 text-gray-500">&copy; {new Date().getFullYear()} Ellen Castro Saturni. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

