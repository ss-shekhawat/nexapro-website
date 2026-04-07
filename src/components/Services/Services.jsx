

import { servicesData } from "../../data/content";
import {
  FaServer,
  FaCloud,
  FaCode,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

// 📚 COMPONENT COMPOSITION PATTERN

const ServiceCard = ({ service }) => {

  const iconMap = {
    FaServer: FaServer,
    FaCloud: FaCloud,
    FaCode: FaCode,
    FaHeadset: FaHeadset,
  };

  const IconComponent = iconMap[service.icon] || FaCode;

  return (
    <div className="card group">
      {/* group class allows child elements to respond to parent hover */}

      {/* Icon Container */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary transition-colors duration-300">
          <IconComponent className="text-primary text-3xl group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-dark">{service.title}</h3>
      </div>

      {/* Services List */}
      <ul className="space-y-3">
        {service.services.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 📚 MAIN SERVICES COMPONENT (Parent)
const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Comprehensive enterprise IT solutions spanning legacy systems,
            modernization, and cutting-edge technologies.
          </p>
        </div>

        {/* Services Grid */}
        {/* 📚 RESPONSIVE GRID: 1 column on mobile, 2 on tablet, 2 on desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 📚 COMPONENT COMPOSITION: We render ServiceCard for each service */}
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service} // 📚 Passing data via props
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your enterprise systems?
          </p>
          <a href="#contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;


