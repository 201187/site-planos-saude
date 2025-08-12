import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Lightbulb, Star, MessageCircle } from "lucide-react";
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
import corretoraFoto from './assets/corretora.jpg';
import whatsappIcon from './assets/whatsapp_icon.png';

import aliceLogo from './assets/operadoras/alice.png';
import amplaSaudeLogo from './assets/operadoras/ampla_saude.jpg';
import biovidaLogo from './assets/operadoras/biovida.jpg';
import carePlusLogo from './assets/operadoras/care_plus.png';
import medseniorLogo from './assets/operadoras/medsenior.png';
import plenaSaudeLogo from './assets/operadoras/plena_saude.jpeg';
import portoSaudePortomedLogo from './assets/operadoras/porto_saude_portomed.png';
import sagradaFamiliaLogo from './assets/operadoras/sagrada_familia.jpg';
import samiLogo from './assets/operadoras/sami.jpg';
import santaHelenaLogo from './assets/operadoras/santa_helena.png';
import saoCristovaoLogo from './assets/operadoras/sao_cristovao.png';
import segurosUnimedLogo from './assets/operadoras/seguros_unimed.png';
import trasmontanoLogo from './assets/operadoras/trasmontano.png';
import unihospLogo from './assets/operadoras/unihosp.png';

export default function App() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel) {
          if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
          } else {
            scrollAmount += 1;
          }
          carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }, 30);
    };

    startAutoScroll();

    const handleScroll = () => {
      const sections = document.querySelectorAll(".fade-in-up");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionTop < viewportHeight - 100) {
          section.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      clearInterval(scrollInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const itemWidth = 200; // Fixed width for simplicity
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const operadoras = [
    { src: amilLogo, alt: "Amil" },
    { src: aliceLogo, alt: "Alice" },
    { src: amplaSaudeLogo, alt: "Ampla Saúde" },
    { src: biovidaLogo, alt: "Biovida" },
    { src: bradescoLogo, alt: "Bradesco Saúde" },
    { src: carePlusLogo, alt: "Care Plus" },
    { src: hapvidaLogo, alt: "Hapvida" },
    { src: medseniorLogo, alt: "MedSênior" },
    { src: omintLogo, alt: "Omint" },
    { src: plenaSaudeLogo, alt: "Plena Saúde" },
    { src: portoSeguroLogo, alt: "Porto Saúde" },
    { src: portoSaudePortomedLogo, alt: "Porto Saúde Portomed" },
    { src: sagradaFamiliaLogo, alt: "Sagrada Família" },
    { src: samiLogo, alt: "Sami" },
    { src: santaHelenaLogo, alt: "Santa Helena Saúde" },
    { src: saoCristovaoLogo, alt: "São Cristóvão Saúde" },
    { src: segurosUnimedLogo, alt: "Seguros Unimed" },
    { src: sulamericaLogo, alt: "SulAmérica" },
    { src: trasmontanoLogo, alt: "Trasmontano Saúde" },
    { src: unihospLogo, alt: "UniHosp" },
  ];

  return (
      <div className="min-h-screen bg-[#f8f8f8] text-gray-800 p-6">
      <a
        href="https://wa.me/5511940365963"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
      </a>
      
      {/* Header */}
      <header className="text-center mb-10">
        <img src="/logo_ellen.png" alt="Ellen Castro Saturni - Corretora de Planos de Saúde" className="h-24 mx-auto mb-4" />
        <p className="font-bold text-lg max-w-2xl mx-auto">
          Planos personalizados de acordo com o seu perfil, suas necessidades e seu orçamento. Atendimento humano, direto e eficiente. Conte com a expertise de quem entende do mercado e se importa com o seu bem-estar.
        </p>
      </header>

      {/* CTA Section */}
      <div className="text-center mb-10">
        <a
          href="https://wa.me/5511940365963"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-800 transition-colors blink-animation"
        >
          Fale agora com a Ellen
        </a>
      </div>

      {/* Hero Section - Formulário de cotação */}
      <section className="bg-[#f8f8f8] rounded-2xl shadow-md p-6 max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Solicite sua cotação</h2>
        <form className="grid gap-4" action="https://formsubmit.co/ellen.saturni@gmail.com" method="POST">
          <input type="text" name="nome" placeholder="Nome completo" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="tel" name="telefone" placeholder="Telefone (WhatsApp)" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" name="email" placeholder="E-mail" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" required />

          <div>
            <label className="block mb-1 font-bold">Tipo de plano:</label>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-1">
                <input type="radio" name="tipo" value="individual" className="text-blue-700" /> Individual
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="tipo" value="familiar" className="text-blue-700" /> Familiar
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="tipo" value="empresarial" className="text-blue-700" /> Empresarial
              </label>
            </div>
          </div>

          <input type="number" name="quantidade" placeholder="Número de pessoas" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="mensagem" placeholder="Mensagem (opcional)" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
          <button type="submit" className="bg-blue-700 text-white rounded-xl p-3 hover:bg-blue-800 transition-colors">
            Enviar solicitação
          </button>
          <input type="hidden" name="_next" value="https://wa.me/5511940365963" />
        </form>
      </section>

      {/* Benefícios */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-bold mb-4 text-center">Por que contratar com a Ellen?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <li className="bg-[#d9e2e3] rounded-xl p-4 hover:bg-[#c9d2d3] transition-colors flex items-center justify-center gap-2">
            <CheckCircle size={20} className="text-blue-700" /> Atendimento 100% personalizado
          </li>
          <li className="bg-[#d9e2e3] rounded-xl p-4 hover:bg-[#c9d2d3] transition-colors flex items-center justify-center gap-2">
            <Lightbulb size={20} className="text-blue-700" /> Consultoria gratuita e sem compromisso
          </li>
          <li className="bg-[#d9e2e3] rounded-xl p-4 hover:bg-[#c9d2d3] transition-colors flex items-center justify-center gap-2">
            <Star size={20} className="text-blue-700" /> As melhores operadoras do mercado
          </li>
          <li className="bg-[#d9e2e3] rounded-xl p-4 hover:bg-[#c9d2d3] transition-colors flex items-center justify-center gap-2">
            <MessageCircle size={20} className="text-blue-700" /> Suporte direto via WhatsApp
          </li>
        </ul>
      </section>

      {/* Galeria de operadoras em carrossel */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-xl font-bold mb-6 text-center">Trabalhamos com as principais operadoras do Brasil</h2>
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-10"
            style={{ scrollBehavior: "smooth" }}
          >
            {operadoras.map((op) => (
              <div key={op.alt} className="flex-shrink-0 w-40 text-center operator-card">
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
      <section className="max-w-2xl mx-auto mb-10 text-center">
        <img src={corretoraFoto} alt="Ellen Castro Saturni" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg" />
        <h2 className="text-xl font-bold mb-2">Sobre a corretora</h2>
        <p className="text-gray-700 leading-relaxed">
          Ellen Castro Saturni é corretora especializada em convênios médicos empresariais e familiares. Atua com transparência e foco na necessidade de cada cliente, oferecendo as melhores opções do mercado com agilidade e clareza. Atendimento 100% personalizado e consultoria completa.
        </p>
      </section>

      {/* Depoimentos */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-bold mb-4 text-center">O que dizem os clientes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <blockquote className="bg-[#f5f5f5] rounded-xl p-4 shadow hover:shadow-md transition-shadow testimonial-card">
            <p className="italic text-gray-700">"A Ellen foi super ágil e me ajudou a encontrar o plano ideal para minha família. Super recomendo!"</p>
            <p className="mt-2 font-bold text-right text-blue-700">— Mariana R., São Paulo</p>
          </blockquote>
          <blockquote className="bg-[#f5f5f5] rounded-xl p-4 shadow hover:shadow-md transition-shadow testimonial-card">
            <p className="italic text-gray-700">"Excelente atendimento e transparência. A consultoria da Ellen me poupou tempo e dinheiro."</p>
            <p className="mt-2 font-bold text-right text-blue-700">— Carlos M., Barueri</p>
          </blockquote>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-bold mb-4 text-center">Perguntas Frequentes (FAQ)</h2>
        <div className="space-y-4">
          <details className="bg-[#f5f5f5] rounded-xl p-4 shadow hover:shadow-md transition-shadow">
            <summary className="font-bold cursor-pointer">Como funciona a cotação de planos de saúde?</summary>
            <p className="mt-2 text-gray-700">A cotação é feita de forma personalizada, levando em consideração seu perfil, necessidades e orçamento. Basta preencher o formulário acima ou entrar em contato via WhatsApp para um atendimento rápido e eficiente.</p>
          </details>
          <details className="bg-[#f5f5f5] rounded-xl p-4 shadow hover:shadow-md transition-shadow">
            <summary className="font-bold cursor-pointer">Quais documentos são necessários para contratar um plano?</summary>
            <p className="mt-2 text-gray-700">Os documentos variam de acordo com o tipo de plano (individual, familiar ou empresarial). Geralmente, são solicitados RG, CPF, comprovante de residência e, para planos empresariais, documentos da empresa e dos beneficiários.</p>
          </details>
          <details className="bg-[#f5f5f5] rounded-xl p-4 shadow hover:shadow-md transition-shadow">
            <summary className="font-bold cursor-pointer">Posso incluir dependentes no meu plano?</summary>
            <p className="mt-2 text-gray-700">Sim, a maioria dos planos permite a inclusão de dependentes, como cônjuge, filhos e, em alguns casos, outros parentes. As regras de elegibilidade variam conforme a operadora e o tipo de plano.</p>
          </details>
          <details className="bg-[#f5f5f5] rounded-xl p-4 shadow hover:shadow-md transition-shadow">
            <summary className="font-bold cursor-pointer">Qual a diferença entre plano individual, familiar e empresarial?</summary>
            <p className="mt-2 text-gray-700">**Plano Individual:** Contratado por uma única pessoa. **Plano Familiar:** Contratado por uma pessoa para si e seus dependentes. **Plano Empresarial:** Contratado por uma empresa para seus funcionários e seus dependentes, geralmente com custos mais acessíveis.</p>
          </details>
        </div>
      </section>

      {/* Contato */}
      <footer className="max-w-2xl mx-auto border-t pt-6 text-sm text-center">
        <p className="text-gray-600">Contato direto:</p>
        <div className="flex justify-center gap-4 mt-2 flex-wrap">
          <a href="https://wa.me/5511940365963" className="text-blue-700 hover:underline hover:text-blue-700 transition-colors">WhatsApp</a>
          <a href="mailto:ellen.saturni@gmail.com" className="text-blue-700 hover:underline hover:text-blue-700 transition-colors">E-mail</a>
          <a href="https://instagram.com/ellensaturni" className="text-blue-700 hover:underline hover:text-blue-700 transition-colors">Instagram</a>
          <a href="https://linkedin.com/in/ellencastro" className="text-blue-700 hover:underline hover:text-blue-700 transition-colors">LinkedIn</a>
        </div>
        <p className="mt-4 text-gray-500">&copy; {new Date().getFullYear()} Ellen Castro Saturni. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

