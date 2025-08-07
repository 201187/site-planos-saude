import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Como escolher o plano de saúde ideal para sua família",
      excerpt: "Descubra os principais fatores a considerar na hora de escolher um plano de saúde que atenda às necessidades da sua família.",
      author: "Ellen Castro Saturni",
      date: "15 de Janeiro, 2025",
      readTime: "5 min de leitura",
      category: "Dicas"
    },
    {
      id: 2,
      title: "Diferenças entre planos individuais, familiares e empresariais",
      excerpt: "Entenda as principais diferenças entre os tipos de planos de saúde e qual é o mais adequado para seu perfil.",
      author: "Ellen Castro Saturni",
      date: "12 de Janeiro, 2025",
      readTime: "4 min de leitura",
      category: "Guias"
    },
    {
      id: 3,
      title: "Carência em planos de saúde: o que você precisa saber",
      excerpt: "Tudo sobre períodos de carência, quando se aplicam e como planejar sua contratação para evitar surpresas.",
      author: "Ellen Castro Saturni",
      date: "10 de Janeiro, 2025",
      readTime: "6 min de leitura",
      category: "Educativo"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-700">Artigos e Dicas sobre Planos de Saúde</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{post.readTime}</span>
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Ler mais
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
          Ver todos os artigos
        </button>
      </div>
    </section>
  );
}

