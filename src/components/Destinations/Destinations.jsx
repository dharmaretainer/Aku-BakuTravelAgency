import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    description: "Tropical paradise with pristine beaches, ancient temples, and vibrant culture.",
    price: "From $899",
    duration: "7 days",
    rating: 4.8
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Stunning white architecture, crystal blue waters, and breathtaking sunsets.",
    price: "From $1,299",
    duration: "6 days",
    rating: 4.9
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Ancient temples, traditional gardens, and authentic Japanese culture.",
    price: "From $1,199",
    duration: "8 days",
    rating: 4.7
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Mystical ancient ruins in the heart of the Andes Mountains.",
    price: "From $1,499",
    duration: "10 days",
    rating: 4.8
  },
  {
    id: 5,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Majestic mountains, pristine lakes, and world-class skiing.",
    price: "From $1,799",
    duration: "7 days",
    rating: 4.9
  },
  {
    id: 6,
    name: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1553603229-0f1a5d2c735b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Exotic souks, stunning architecture, and rich cultural heritage.",
    price: "From $999",
    duration: "6 days",
    rating: 4.6
  }
];

export default function Destinations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Destinations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the world's most breathtaking locations with our curated selection of premium destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-800">{destination.price}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold text-gray-800 ml-1">{destination.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{destination.duration}</span>
                  <Link
                    to={`/packages?destination=${destination.name}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
                  >
                    View Packages
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact our travel experts to create your perfect itinerary
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
            >
              Get Custom Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 