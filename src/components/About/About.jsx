import React from 'react';
import vaishnavi from '../images/vaishnavi.jpg';
import harsh from '../images/harsh.jpg';
import aryan from '../images/DSC01787.JPG';

const teamMembers = [
  {
    name: "Vaishnavi Pagar",
    role: "Founder & CEO",
    image: vaishnavi,
    bio: "15+ years of experience in luxury travel planning"
  },
  {
    name: "Harshvardhan Nikam",
    role: "Head of Operations",
    image: harsh,
    bio: "Expert in creating seamless travel experiences"
  },
  {
    name: "Aryan Karewar",
    role: "Senior Travel Consultant",
    image: aryan,
    bio: "Specialist in cultural and adventure tourism"
  }
];

const values = [
  {
    icon: "🌟",
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from initial planning to post-trip support."
  },
  {
    icon: "🤝",
    title: "Trust",
    description: "Building lasting relationships with our clients through transparency and reliable service."
  },
  {
    icon: "🌍",
    title: "Sustainability",
    description: "Committed to responsible tourism that benefits local communities and preserves natural beauty."
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "Continuously innovating to provide unique and memorable travel experiences."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400"> AKu & Baku</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're passionate about creating extraordinary travel experiences that inspire, connect, and transform lives
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, Wanderlust began with a simple mission: to make extraordinary travel accessible to everyone. What started as a small local agency has grown into a trusted partner for travelers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founders, Sarah and Michael, met while backpacking through Southeast Asia. Their shared passion for authentic travel experiences and cultural immersion inspired them to create a travel company that goes beyond typical tourism.
              </p>
              <p className="text-lg text-gray-600">
                Today, we've helped over 10,000 travelers discover the world's most incredible destinations, from hidden gems to iconic landmarks, always with a focus on authentic experiences and sustainable tourism.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the experiences we create for our travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of travel experts is dedicated to making your dreams come true
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg text-green-100">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg text-green-100">Happy Travelers</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg text-green-100">Destinations</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
              <div className="text-lg text-green-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To inspire and enable people to explore the world through authentic, sustainable, and transformative travel experiences that create lasting memories and meaningful connections.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted travel partner, known for creating extraordinary journeys that enrich lives and foster a deeper understanding of our diverse world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}