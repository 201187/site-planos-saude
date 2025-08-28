import { MessageCircle } from "lucide-react";

export default function BlogPost({ title, content, summary, whatsappLink }) {
  return (
    <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-3 text-blue-700">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{summary}</p>
      
      <div className="space-y-4 mb-6">
        {content.map((section, index) => (
          <div key={index}>
            <h4 className="font-bold text-gray-800 mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-700 flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4">
        <a
          href={whatsappLink}
          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={18} />
          Receba sua cotação pelo WhatsApp
        </a>
      </div>
    </article>
  );
}


