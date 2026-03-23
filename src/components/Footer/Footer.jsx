// 📚 Footer Component - Simple static component

import { companyInfo, navLinks } from "../../data/content";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/nexapro-logo.png"
              alt="Nexapro Technologies"
              className="h-16 mb-4"
            />
            <p className="text-gray-300 mb-4">{companyInfo.tagline}</p>
            <p className="text-gray-400 text-sm">{companyInfo.subtitle}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>{companyInfo.email}</p>
              <p>{companyInfo.phone}</p>
              <p>{companyInfo.location}</p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              {/* <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaGithub size={24} />
              </a> */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
