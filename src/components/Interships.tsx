
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Intership = () => {
  const projects = [
    {
      title: "FedEx",
      Role: "Supply Chain Manager",
      problem: "Absence of a reliable public API made drone airspace zone detection slow, manual, and inefficient for automation.",
      approach: "Developed a browser automation pipeline using Selenium and OpenCV to detect Digital Sky drone zones from map screenshots.",
      outcome: "Built a FastAPI-based tool achieving 85–90% accuracy in classifying airspace zones across 150+ Indian PIN code locations",
      keyLearnings: "Learned browser automation,backend API development, and navigating challenges in drone regulation and logistics technology",
      image: "/Images/Fedex_Image.webp",
      tags: ["Automation", "APIs", "FrontEnd"]
    },
        {
      title: "OverLeveraged",
      role: "Product Manager",
      problem: "Traditional KYC processes created significant friction, causing 40% user drop-off during onboarding.",
      approach: "Implemented AI-powered document verification and streamlined UX flows with progressive disclosure techniques.",
      outcome: "Achieved 85% DAU/MAU ratio boost and reduced onboarding time by 70%",
      keyLearnings: "User friction elimination requires balancing security with seamless experience design.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      tags: ["Fintech", "AI/ML", "UX Design"]
    },
        {
      title: "Wind Teacher Pvt. Ltd",
      role: "Associate Consultant",
      problem: "Needed strategic location targeting and validation for launching profitable preschool chains in India’s childcare sector",
      approach: "Mapped 750+ preschools via pin-code segmentation and analyzed $300Bn+ childcare and VC-backed models.",
      outcome: "Identified 4 high-potential GTM clusters and validated ₹1.34Cr revenue & EBITDA via 5-year model.",
      keyLearnings: "Gained expertise in GTM strategy, financial modeling, VC analysis, and education market opportunity mapping.",
      image: "/Images/Wind_Teacher.jpg",
      tags: ["Market Analysis", "GTM Strategy"]
      },
          {
      title: "Mercenary Consulting",
      role: "Associate Consultant",
      problem: "Client lacked insight-driven ESG strategy for sustainability improvements.",
      approach: "Conducted ESG research, trend analysis, and financial data mapping using Yahoo Finance and Google Suite.",
      outcome: "mproved client sustainability metrics by 15% with actionable insights and a refined strategic roadmap.",
      keyLearnings: "Learned to translate ESG trends into data-backed strategies that drive measurable impact.",
      image: "/Images/Mercernary Consulting.jpg",
      tags: ["Data Analysis", "Impact Strategy"]
    },
  ];


  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internships</h2>
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
                      {project.role}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intership;
