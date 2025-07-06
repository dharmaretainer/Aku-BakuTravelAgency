import React from 'react';
import { Link } from 'react-router-dom';
import ary from '../images/ooty.jpg';
import spiti from '../images/spiti.jpg';
import coorg from '../images/mysuru.jpg';
const features = [
  {
    icon: "✈️",
    title: "Worldwide Destinations",
    description: "Explore over 100+ destinations across 6 continents with our expert-curated itineraries."
  },
  {
    icon: "🏨",
    title: "Luxury Accommodations",
    description: "Stay in handpicked hotels and resorts that meet our high standards for comfort and service."
  },
  {
    icon: "👥",
    title: "Expert Guides",
    description: "Travel with certified local guides who bring destinations to life with insider knowledge."
  },
  {
    icon: "🛡️",
    title: "Travel Protection",
    description: "Comprehensive travel insurance and 24/7 support to ensure your peace of mind."
  }
];

const testimonials = [
  {
    name: "Aryan Karewar",
    location: "Parbhani",
    rating: 5,
    text: "Amazing experience! The Bali package exceeded all expectations. The guides were knowledgeable and the accommodations were perfect.",
    // avatar: {ary}
  },
  {
    name: "Karan Kulkarni",
    location: "Pune",
    rating: 5,
    text: "The Goa romantic getaway was absolutely magical. Every detail was perfectly planned. Highly recommend!",
    // avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Kavya Patil",
    location: "Mumbai",
    rating: 5,
    text: "Our family trip to Spiti was incredible. The cultural experiences and traditional Spiti stay were unforgettable.",
    // avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const stats = [
  { number: "10K+", label: "Happy Travelers" },
  { number: "100+", label: "Destinations" },
  { number: "15+", label: "Years Experience" },
  { number: "4.9", label: "Average Rating" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
     
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0">
          <img
            src={ary}
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        </div>

        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400"> Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience the world's most breathtaking destinations with our expertly crafted travel packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Destinations
            </Link>
            <Link
              to="/packages"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
            >
              View Packages
            </Link>
          </div>
        </div>

        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Aku & Baku</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making your travel dreams come true with exceptional service and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most loved destinations that travelers can't stop talking about
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Ooty, Karnataka",
                image: ary,
                price: "From Rs.15000"
              },
              {
                name: "Spiti Valley, Kashmir",
                image: spiti,
                price: "From Rs.20000"
              },
              {
                name: "Mysuru , Karnataka",
                image: coorg,
                price: "From "
              }
            ].map((destination, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-lg">{destination.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/destinations"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              View All Destinations
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Travelers</span>
              Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied travelers around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      
    </div>
  );
}
