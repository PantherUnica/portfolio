
import React from 'react';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

const Leadership = () => {
  const achievements = [
    {
      icon: Users,
      number: "50+",
      label: "Product Managers Mentored",
      description: "Led and guided aspiring PMs through hands-on learning"
    },
    {
      icon: Target,
      number: "12+",
      label: "Product Sprints Organized",
      description: "Structured learning through practical project execution"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Member Skill Improvement",
      description: "Measurable growth in product management capabilities"
    },
    {
      icon: Award,
      number: "3",
      label: "Years of Leadership",
      description: "Continuous impact in building product community"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leading by Doing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building the next generation of product managers through hands-on mentorship and practical learning
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Head of Product Design Club
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  IIT Madras
                </p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    As Head of the Product Design Club at IIT Madras, I've transformed theoretical 
                    product management education into a practical, hands-on learning experience.
                  </p>
                  <p>
                    My leadership philosophy centers around "learning by doing" - creating real-world 
                    product challenges that bridge the gap between academic knowledge and industry practice.
                  </p>
                  <p>
                    Through structured product sprints, workshops, and mentorship programs, I've built 
                    a thriving community of 50+ product enthusiasts who are now contributing to 
                    startups and established companies across various domains.
                  </p>
                </div>
              </div>

              {/* Key Initiatives */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Initiatives</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">Hands-on product sprint methodology development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">Industry mentorship program with product leaders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">Real client project collaborations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">Product case study competitions and hackathons</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="text-blue-600" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
