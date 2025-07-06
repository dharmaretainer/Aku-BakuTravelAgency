import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 1,
    name: "Adventure Explorer",
    destination: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    duration: "7 days / 6 nights",
    price: 899,
    originalPrice: 1299,
    features: [
      "Luxury accommodation",
      "All meals included",
      "Guided tours",
      "Airport transfers",
      "Travel insurance",
      "24/7 support"
    ],
    highlights: ["Temple visits", "Beach activities", "Cultural experiences"],
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: "Romantic Getaway",
    destination: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "6 days / 5 nights",
    price: 1299,
    originalPrice: 1799,
    features: [
      "Boutique hotel",
      "Breakfast & dinner",
      "Wine tasting",
      "Sunset cruise",
      "Photography session",
      "Spa treatment"
    ],
    highlights: ["Sunset views", "Wine tours", "Island hopping"],
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Cultural Immersion",
    destination: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "8 days / 7 nights",
    price: 1199,
    originalPrice: 1599,
    features: [
      "Traditional ryokan",
      "Tea ceremony",
      "Zen meditation",
      "Kimono experience",
      "Bullet train pass",
      "Local guide"
    ],
    highlights: ["Temple tours", "Garden visits", "Traditional crafts"],
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Mountain Expedition",
    destination: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "7 days / 6 nights",
    price: 1799,
    originalPrice: 2299,
    features: [
      "Mountain lodge",
      "Ski equipment",
      "Professional guide",
      "Lift passes",
      "Wellness center",
      "Gourmet dining"
    ],
    highlights: ["Skiing", "Hiking", "Scenic trains"],
    rating: 4.9,
    reviews: 203
  }
];

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Travel
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Packages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated travel packages designed to create unforgettable experiences
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold text-gray-800 ml-1">{pkg.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({pkg.reviews})</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <span className="text-sm text-gray-500">{pkg.duration}</span>
                </div>
                
                <p className="text-lg text-gray-600 mb-4">{pkg.destination}</p>
                
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-green-600">${pkg.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">${pkg.originalPrice}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Book Package</h3>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">{selectedPackage.name}</h4>
                <p className="text-gray-600">{selectedPackage.destination}</p>
                <p className="text-2xl font-bold text-green-600 mt-2">${selectedPackage.price}</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-semibold"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-gray-600 mb-6">
              Our travel experts can create a personalized itinerary just for you
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
            >
              Create Custom Package
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