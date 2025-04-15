
import React from "react";
import { MapPin, Star, Search, Filter } from "lucide-react";
import './index.css' // 👈 Tailwind must be imported here

const rooftops = [
  {
    name: "Sky Lounge",
    location: "Gueliz",
    rating: 4.8,
    image: "/images/sky-lounge.jpg",
    description: "Stunning sunset views with cozy vibes."
  },
  {
    name: "Nomad Marrakech",
    location: "Medina",
    rating: 4.7,
    image: "/images/nomad.jpg",
    description: "Modern Moroccan cuisine with a rooftop view."
  },
  {
    name: "Kabana",
    location: "Hivernage",
    rating: 4.6,
    image: "/images/kabana.jpg",
    description: "Trendy rooftop bar with music and cocktails."
  }
];

 function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/marrakech-rooftop.jpg')" }}>
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">Discover Marrakech's Best Rooftop Views</h1>
        <p className="mt-4 text-xl text-white/90">Curated spots to chill, dine, and vibe in the Red City.</p>
        <button className="mt-8 text-lg px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-lg transition">Explore Now</button>
      </section>

      {/* Explore Section */}
      <section className="px-4 md:px-16 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Top Picks</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
              <Filter className="w-4 h-4" /> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooftops.map((spot, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow hover:scale-105 transition-transform bg-white">
              <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{spot.name}</h3>
                <p className="text-sm text-gray-500 flex items-center"><MapPin className="w-4 h-4 mr-1" />{spot.location}</p>
                <p className="mt-2 text-gray-700">{spot.description}</p>
                <div className="mt-3 flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4" />
                  <span>{spot.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Vibes Section */}
      <section className="px-4 md:px-16 py-12 bg-orange-50">
        <h2 className="text-2xl font-semibold mb-4">#MarrakechVibes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1,2,3,4].map((id) => (
            <img
              key={id}
              src={`/images/insta-${id}.jpg`}
              alt={`Instagram post ${id}`}
              className="w-full h-40 object-cover rounded-xl"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage/>
    </>
  )
}

export default App
