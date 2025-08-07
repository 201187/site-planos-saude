import React from 'react';

export default function BlogPost({ title, author, date, content }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h1 className="text-3xl font-bold mb-2 text-blue-700">{title}</h1>
      <p className="text-gray-600 text-sm mb-4">Por {author} em {date}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}


