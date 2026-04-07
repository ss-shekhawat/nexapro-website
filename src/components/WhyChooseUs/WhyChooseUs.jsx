// 📚 WhyChooseUs Component - Simple but effective section

import { whyChooseUs } from "../../data/content";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="section-padding bg-gradient-to-br from-primary to-red-600 text-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-100 font-semibold text-lg mb-2">
            Our Strengths
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Nexapro Technologies?
          </h2>
          <p className="text-red-100 max-w-2xl mx-auto">
            Decades of combined expertise in enterprise systems and modern
            technologies
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChooseUs.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 
                         hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-white text-xl flex-shrink-0 mt-1" />
                <p className="text-white font-medium text-lg">{reason}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-white mb-6 font-semibold">
            Modernize with Confidence. Transform with Nexapro.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-primary font-bold 
                       rounded-none hover:bg-gray-100 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

