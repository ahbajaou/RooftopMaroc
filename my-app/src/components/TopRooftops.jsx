import React, { useState } from 'react';
import { rooftops } from '../data/rooftops'; // Import the rooftops data

const TopRooftops = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Marrakech', 'Essaouira'];

  const filteredRooftops =
  activeTab === 'All'
    ? rooftops
    : rooftops.filter((rooftop) => rooftop.category === activeTab);

  return (
    <section id="rooftop" className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top Rooftops</h2>

      {/* Tabs for Filtering */}
      <div className="flex gap-4 justify-center mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full capitalize ${
              activeTab === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Rooftop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooftops.map((rooftop) => (
          <div
            key={rooftop.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Rooftop Image */}
            <div className="h-48">
              <img
                src={rooftop.image}
                alt={rooftop.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{rooftop.name}</h3>
              <p className="text-gray-600 text-sm">{rooftop.description}</p>
              <p className="text-gray-500 text-sm mt-2">Location: {rooftop.location}</p>
              <p className="text-gray-500 text-sm">Rating: {rooftop.rating} ⭐</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Plan Your Trip Button */}
      <div className="text-center mt-8">
        {/* <button className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600">
          Plan Your Trip
        </button> */}
      </div>
    </section>
  );
};

export default TopRooftops;