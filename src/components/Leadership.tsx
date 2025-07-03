
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

  const positions = [
    {
      title: "Head – Placement & Internship Cell",
      organization: "IIT Madras",
      period: "Mar'25 – Present",
      responsibilities: [
        "Spearheading 3-tier, 21-member team managing 750+ profiles in Finance, Analytics, Core & Research sectors",
        "Formulated 4-sector outreach plan; compiled 250+ prep resources benefiting over 4K+ students",
        "Integrated 3 automated outreach workflows, improving efficiency by 600% and saving 20+ hours per week",
        "Co-led 8-member finance outreach team, driving 240% increase in converts & 6.3x company footfall",
        "Managed Alumni and International Outreach, achieving 32% conversion rate with 18% YoY role increase",
        "Acted as liaison for 8 companies including IMC Trading, Info Edge, ICICI Bank, Hilabs, and Demolish",
        "Mentored 20+ Dual Degree students on resume building and placement strategy navigation"
      ]
    },
    {
      title: "Head of Product Design Club",
      organization: "IIT Madras",
      period: "Previous Role",
      responsibilities: [
        "Hands-on product sprint methodology development",
        "Industry mentorship program with product leaders",
        "Real client project collaborations",
        "Product case study competitions and hackathons"
      ]
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

          {/* Leadership Positions */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {position.title}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">
                  {position.organization}
                </p>
                <p className="text-gray-600 font-medium mb-6">
                  {position.period}
                </p>
                <ul className="space-y-3">
                  {position.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Through my leadership roles at IIT Madras, I've transformed theoretical
                  education into practical, hands-on learning experiences across multiple domains.
                </p>
                <p>
                  My leadership philosophy centers around "learning by doing" - creating real-world
                  challenges that bridge the gap between academic knowledge and industry practice.
                </p>
                <p>
                  From managing placement processes to building product communities, I've built
                  thriving ecosystems that benefit thousands of students and drive measurable outcomes.
                </p>
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
