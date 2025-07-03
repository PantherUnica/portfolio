
import React from 'react';
import { Download, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a dual-degree student at IIT Madras specializing in Biological + Computational Engineering, 
                  with a passion for building products that bridge the gap between complex problems and elegant solutions.
                </p>
                <p>
                  As Head of the Product Design Club at IIT Madras, I lead a community of 50+ budding product managers, 
                  spearheading hands-on sprints and practical learning initiatives that turn theoretical knowledge into 
                  real-world impact.
                </p>
                <p>
                  My expertise spans across EV technology, fintech innovations, neurotech research, and logistics optimization. 
                  I believe in the power of data-driven decision making combined with human-centered design to create 
                  products that truly matter.
                </p>
              </div>

            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                {/* IIT Madras */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">Indian Institute of Technology, Madras</h4>
                      <p className="text-blue-600 font-medium">Dual Degree</p>
                      <p className="text-gray-600">Biological + Computational Engineering</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        <span>Chennai, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Air Force School */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">Air Force School Jamnagar</h4>
                      <p className="text-blue-600 font-medium">Class X & XII (CBSE)</p>
                      <p className="text-gray-600">Senior Secondary Education</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        <span>Jamnagar, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
