// 📚 About Component - Company information section

import { aboutData } from "../../data/content";
import { FaCheckCircle, FaLightbulb, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">About Us</p>
          <h2 className="section-title">Who We Are</h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              {aboutData.description}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {aboutData.philosophy}
            </p>

            {/* Core Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">
                Core Legacy Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {/* 📚 MAP PATTERN: Converting array to JSX */}
                {aboutData.expertise.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FaRocket className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {aboutData.mission}
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FaLightbulb className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {aboutData.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-dark mb-6 text-center">
            Why Choose Nexapro Technologies?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.strengths.map((strength, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


