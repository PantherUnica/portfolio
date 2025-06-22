
import React from 'react';
import { BarChart3, Palette, Target } from 'lucide-react';

const Skills = () => {
  const services = [
    {
      icon: Target,
      title: "Product Strategy & Consulting",
      description: "MVP scoping, GTM plans, pricing models",
      skills: ["Product Strategy", "Market Research", "Business Models", "Go-to-Market", "Pricing Strategy", "Stakeholder Management"]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Python, SQL, predictive modeling, A/B testing",
      skills: ["Python", "SQL", "Machine Learning", "Statistical Analysis", "A/B Testing", "Data Visualization"]
    },
    {
      icon: Palette,
      title: "UI/UX Design & Research",
      description: "Figma prototypes, UX audits, usability testing",
      skills: ["Figma", "User Research", "Prototyping", "Usability Testing", "Design Systems", "Information Architecture"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive expertise across product development, data science, and design thinking
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-blue-600" size={32} />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
