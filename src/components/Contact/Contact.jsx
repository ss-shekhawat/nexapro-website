// 📚 Contact Component with EmailJS - NO BACKEND NEEDED!

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { companyInfo } from "../../data/content";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    // 🔥 EMAILJS CONFIGURATION
    // Replace these with your actual EmailJS credentials
    const serviceID = "service_wj1qll9"; // From EmailJS dashboard
    const templateID = "template_pvtw0fs"; // From EmailJS dashboard
    const publicKey = "y6w8HaeZWHt3sVoXM"; // From EmailJS dashboard

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      company_name: formData.company,
      from_email: formData.email,
      phone_number: formData.phone,
      service_required: formData.service,
      message: formData.message,
      to_email: "nexaprotechnology@gmail.com", // Where you want to receive emails
    };

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
        setSubmitError(
          "Failed to send message. Please try again or contact us directly at " +
            companyInfo.email,
        );
      });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Let's transform your enterprise systems together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-dark mb-6">
                Let's Start a Conversation
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Email</p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhone className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Phone</p>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Location</p>
                    <p className="text-gray-600">{companyInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                "Partner with Nexapro Technologies and unlock the full potential
                of your legacy systems."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ✅ Thank you! Your message has been sent successfully. We'll get
                back to you soon!
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                ❌ {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${errors.name ? "border-red-500" : ""}`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`input-field ${errors.company ? "border-red-500" : ""}`}
                  placeholder="Your Company"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? "border-red-500" : ""}`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-field ${errors.phone ? "border-red-500" : ""}`}
                  placeholder="+91-XXXXXXXXXX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service Select */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`input-field ${errors.service ? "border-red-500" : ""}`}
                >
                  <option value="">Select a service</option>
                  <option value="Legacy Systems Services">
                    Legacy Systems Services
                  </option>
                  <option value="Legacy Modernization & Integration">
                    Legacy Modernization & Integration
                  </option>
                  <option value="Modern Technology Solutions">
                    Modern Technology Solutions
                  </option>
                  <option value="Consulting & Support">
                    Consulting & Support
                  </option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`textarea-field ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Tell us about your project..."
                  rows="4"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
