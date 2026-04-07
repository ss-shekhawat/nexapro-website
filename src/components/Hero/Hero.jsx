

import { heroData, companyInfo } from "../../data/content";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Hero = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-red-50 to-white pt-20"
      // pt-20 = padding-top to account for fixed navbar
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-6 animate-slide-up">
            {/* Company Tagline */}
            <p className="text-primary font-semibold text-lg md:text-xl">
              {companyInfo.tagline}
            </p>

            {/* Main Heading */}
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              {companyInfo.subtitle}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {heroData.description}
            </p>

            {/* Expertise Badge */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-dark">
                  Deep Expertise:{" "}
                </span>
                {heroData.expertise}
              </p>
            </div>

            {/* CTA Buttons */}
            {/* 📚 ACCESSIBILITY: Use <a> for navigation, <button> for actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-dark">10+ Years</p>
                  <p className="text-sm text-gray-600">Legacy Expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-dark">24/7 Support</p>
                  <p className="text-sm text-gray-600">Enterprise Grade</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Illustration/Image */}
          <div className="hidden md:flex items-center justify-center">
            {/* 📚 NOTE: In production, you'd add an actual image here */}
            {/* For now, we'll use an icon placeholder */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary to-red-600 p-16 rounded-full">
                <FaRocket className="text-white text-9xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

