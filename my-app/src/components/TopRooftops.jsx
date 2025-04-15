import React, { useState } from 'react';
import { rooftops } from '../data/rooftops';

export default function TopRooftops() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'chill', 'romantic', 'view', 'food'];

  const filteredRooftops = activeFilter === 'all' 
    ? rooftops 
    : rooftops.filter(spot => spot.vibes.includes(activeFilter));

  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top Rooftops</h2>
      
      <div className="flex gap-2 justify-center mb-8">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full capitalize ${
              activeFilter === filter 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRooftops.map(spot => (
          <div key={spot.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src={spot.image} 
              alt={spot.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{spot.name}</h3>
              <p className="text-gray-600 mb-4">{spot.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">{spot.location}</span>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{spot.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}