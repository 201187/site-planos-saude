import React from 'react';
import { Play, Clock } from 'lucide-react';

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "Como funciona um plano de saúde?",
      description: "Entenda de forma simples como funcionam os planos de saúde no Brasil.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "8:30",
      views: "1.2k visualizações"
    },
    {
      id: 2,
      title: "Plano individual vs familiar: qual escolher?",
      description: "Compare as vantagens e desvantagens de cada tipo de plano.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "6:15",
      views: "890 visualizações"
    },
    {
      id: 3,
      title: "Dicas para economizar no seu plano de saúde",
      description: "Estratégias práticas para reduzir custos sem perder qualidade.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      duration: "5:42",
      views: "2.1k visualizações"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-700">Vídeos Explicativos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <Play size={24} className="text-blue-700 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                <Clock size={12} />
                {video.duration}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {video.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3">
                {video.description}
              </p>
              
              <p className="text-gray-500 text-xs">
                {video.views}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
          Ver mais vídeos
        </button>
      </div>
    </section>
  );
}

