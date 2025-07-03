
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "SwapVerse.ev",
      category: "EV Technology",
      problem: "EV battery swapping faced 60% downtime due to inefficient battery management and distribution systems.",
      approach: "Developed a Battery-as-a-Service (BaaS) model with predictive analytics for optimal battery allocation and real-time monitoring.",
      outcome: "Reduced swap downtime by 60% and improved battery utilization efficiency by 45%",
      keyLearnings: "Scalable infrastructure requires predictive modeling and seamless user experience design.",
      image: "/Images/Car_Photo.jpg",
      tags: ["Product Strategy", "IoT", "Predictive Analytics"],
      pdfLink: "https://drive.google.com/file/d/1tOMz59LCrOxPxX8xM__yTghwQeFRiUEf/view?usp=sharing",
      pdfName: "Nirmaan Pitch Deck"
    },
    {
      title: "BCG Ideathon",
      category: "Business Strategy",
      problem: "₹5 crore entry barrier stopped retail investors from investing in high-return movie projects.",
      approach: "Built a trading platform for movie shares targeting $5.1B market in 5 years.",
      outcome: "Created phased roadmap, secured indie makers, aimed 5% market share by 2030.",
      keyLearnings: "Learned how to build scalable products combining finance, entertainment, and investor trust.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      tags: ["Entertainment Finance", "Strategy",],
      pdfLink: "https://drive.google.com/file/d/1FpQ9v3WM9YHXia4Qd07sjIwykLD-rvu8/view?usp=sharing",
      pdfName: "BCG Case Study"
    },
    {
      title: "Netflix Case Study",
      category: ["Growth Marketing","Consumer Insights",],
      problem: "High prices and low engagement caused weak user conversions and rising subscription churn.",
      approach: "Built 3 plans using user research: weekend binge, student lite, bundled streaming combos.",
      outcome: "Added 3.4K new users/day and ₹15.75L/day revenue, closing 80% revenue shortfall.",
      keyLearnings: "Learned how price sensitivity, digital behavior, and micro-personas shape OTT platform strategy.",
      image: "/Images/netflix_photo.jpg",
      tags: ["Consumer Behavior", "Product Marketing",],
      pdfLink: "https://drive.google.com/file/d/1h7EKWisaIcQ2yYEJi9oEWXyn0uojo5vW/view?usp=sharing",
      pdfName: "Netflix Case Study"
    },
    {
      title: "Spotify Case Study",
      category: "AI Product Innovation",
      problem: "Playlists are static; no feature adjusts music in real-time based on mood.",
      approach: "Built AI DJ using mood detection, beat-matching, snippet mashups, and voice synthesis tech.",
      outcome: "Projected 30% revenue boost by 2029 and 20% rise in premium plan conversions.",
      keyLearnings: "Learned to balance desirability, viability, and feasibility in AI-led product development.",
      image: "/Images/Spotify.jpg",
      tags: ["Product Management", "UI/UX",],
      pdfLink: "https://drive.google.com/file/d/1K3o-78P6K7Zbb2AGBa-BPq2_VYCsA5jy/view?usp=sharing",
      pdfName: "Spotify Case Study"
    },
     {
      title: "Ditto Insurance Case Study",
      category: "Financial Literacy",
      problem: "Consumers lack awareness, trust, and accessibility in choosing and understanding insurance plans.",
      approach: "Designed AI chatbot, comparison tools, and rural distribution to bridge trust and access gaps.",
      outcome: "Boosted transparency, enabled 24/7 access, improved rural adoption through local agent training.",
      keyLearnings: "Learned to solve financial inclusion by blending digital tools with trust-focused advisory channels.",
      image: "/Images/Ditto logo_1200_x_630.webp",
      tags: ["User Research", "Product Strategy",],
      pdfLink: "https://drive.google.com/file/d/1bEEPqKHiXct9-rpfiGjzsE7o3y2PISSa/view?usp=sharing",
      pdfName: "Ditto Case Study"
    },
      {
      title: "Inter-IIT Case Study",
      category: "Sustainability Strategy",
      problem: "India’s solar waste to hit 600k tonnes by 2030, with only 20% recycled.",
      approach: "Built AI DJ using mood detection, beat-matching, snippet mashups, and voice synthesis tech.",
      outcome: "Projected 30% revenue boost by 2029 and 20% rise in premium plan conversions.",
      keyLearnings: "Learned to balance desirability, viability, and feasibility in AI-led product development.",
      image: "/Images/Spotify.jpg",
      tags: ["Product Management", "UI/UX",],
      pdfLink: "https://drive.google.com/file/d/1K3o-78P6K7Zbb2AGBa-BPq2_VYCsA5jy/view?usp=sharing",
      pdfName: "Spotify Case Study"
    }, 
  ];


  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Case studies showcasing problem-solving across diverse domains
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>


          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-red-600 mb-2">PROBLEM</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-blue-600 mb-2">APPROACH</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-green-600 mb-2">OUTCOME</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Key Learnings */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-purple-600 mb-2">KEY LEARNINGS</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.keyLearnings}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* PDF Link if available */}
                  {project.pdfLink && (
                    <div className="mt-4">
                      <a
                        href={project.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors duration-300"
                      >
                        {project.pdfName}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
