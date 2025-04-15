import React from 'react';

export default function Newsletter() {
  return (
    <section className="bg-orange-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Rooftop Tips, Events & Giveaways
        </h2>
        <p className="text-gray-600 mb-8">
          Join our community and never miss the best rooftop experiences in Marrakech
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500 md:min-w-[300px]"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}