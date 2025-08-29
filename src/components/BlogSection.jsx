import BlogPost from './BlogPost';

export default function BlogSection() {
  const articles = [
    {
      id: 1,
      title: "Plano de Saúde Empresarial – Benefícios para sua Equipe",
      summary: "Contratar um plano de saúde empresarial é essencial para valorizar seus colaboradores e oferecer segurança médica. Neste artigo, você vai entender as vantagens e como escolher o plano ideal.",
      content: [
        {
          title: "Vantagens para a Empresa",
          items: [
            "Aumenta a satisfação e retenção da equipe",
            "Benefício fiscal em algumas situações",
            "Flexibilidade na escolha de operadoras e tipos de plano"
          ]
        },
        {
          title: "Vantagens para os Funcionários",
          items: [
            "Cobertura completa de consultas, exames e internações",
            "Acesso a hospitais e clínicas de qualidade",
            "Atendimento personalizado"
          ]
        },
        {
          title: "Como Contratar",
          items: [
            "Compare preços e coberturas",
            "Consulte a rede credenciada próxima da empresa",
            "Conte com a orientação de um corretor especializado"
          ]
        }
      ],
      whatsappLink: "https://wa.me/5511940365963"
    },
    {
      id: 2,
      title: "Plano de Saúde Familiar – Proteja sua Família Hoje",
      summary: "Ter um plano de saúde adequado é fundamental para a segurança de você e sua família. Veja como escolher a opção certa de forma simples e rápida.",
      content: [
        {
          title: "Benefícios do Plano Familiar",
          items: [
            "Cobertura completa para todos os membros da família",
            "Consultas, exames e internações sem preocupações",
            "Planos com preços acessíveis e flexíveis"
          ]
        },
        {
          title: "Dicas para Escolha",
          items: [
            "Avalie a faixa etária e necessidades de cada familiar",
            "Verifique a rede credenciada próxima à sua residência",
            "Considere consultoria especializada para facilitar a contratação"
          ]
        },
        {
          title: "Contratação Rápida",
          items: [
            "Compare planos e coberturas",
            "Receba orientação personalizada do corretor",
            "Solicite cotação pelo WhatsApp e finalize sem burocracia"
          ]
        }
      ],
      whatsappLink: "https://wa.me/5511940365963"
    },
    {
      id: 3,
      title: "Plano de Saúde para Autônomos e MEI – Cotação Rápida e Gratuita",
      summary: "Profissionais autônomos e microempreendedores também merecem segurança médica. Veja como escolher o plano de saúde que se adapta ao seu perfil.",
      content: [
        {
          title: "Benefícios do Plano para Autônomos",
          items: [
            "Cobertura completa sem depender de empresa",
            "Acesso a hospitais e clínicas",
            "Planos flexíveis e acessíveis"
          ]
        },
        {
          title: "Como Escolher o Plano Ideal",
          items: [
            "Avalie idade e necessidades médicas",
            "Compare coberturas e preços",
            "Verifique rede credenciada próxima de você"
          ]
        },
        {
          title: "Contratação Simples",
          items: [
            "Entre em contato com um corretor especializado",
            "Receba cotação personalizada pelo WhatsApp",
            "Finalize rapidamente sem burocracia"
          ]
        }
      ],
      whatsappLink: "https://wa.me/5511940365963"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-700">Artigos e Dicas sobre Planos de Saúde</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <BlogPost
            key={article.id}
            title={article.title}
            summary={article.summary}
            content={article.content}
            whatsappLink={article.whatsappLink}
          />
        ))}
      </div>
    </section>
  );
}

