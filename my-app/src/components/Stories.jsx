import React from 'react';
import { stories } from '../data/stories';

export default function Stories() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Rooftop Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover experiences, tips, and magical moments shared by our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <article 
              key={story.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                    {story.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {story.preview}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{story.author}</span>
                  <span>{new Date(story.date).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
}