import React, { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Send, Download } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});

    // Reset status after 4 seconds
    setTimeout(() => setSubmitStatus(null), 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manliclic.eugine@gmail.com",
      href: "mailto:manliclic.eugine@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Metro Manila, Philippines",
      href: null,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center mb-4">
              <Mail className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Get In Touch
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your next project.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div
              className={`space-y-6 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ animationDelay: "150ms" }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm always open to discussing new opportunities,
                  collaborations, and interesting projects. Whether you have a
                  question or just want to say hi, I'll try my best to get back
                  to you!
                </p>

                <div className="space-y-4 text-left">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    const row = (
                      <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl">
                        <div className="p-2 bg-blue-500/20 rounded-lg mr-4">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            {contact.label}
                          </div>
                          <div className="text-gray-300 text-sm">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    );
                    return contact.href ? (
                      <a
                        key={index}
                        href={contact.href}
                        className="block hover:border-blue-400/40 transition-colors duration-300"
                      >
                        {row}
                      </a>
                    ) : (
                      <div key={index}>{row}</div>
                    );
                  })}
                </div>

                {/* <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </button> */}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ animationDelay: "250ms" }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/15 border border-green-500/25 text-green-300 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-green-400 rounded-full mr-3 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">
                          Message sent successfully!
                        </div>
                        <div className="text-sm">
                          I'll get back to you within 24 hours.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      disabled
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 ${
                        errors.name
                          ? "border-red-400/60 focus:border-red-400/60"
                          : "border-white/20 focus:border-blue-400/60"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      disabled
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 ${
                        errors.email
                          ? "border-red-400/60 focus:border-red-400/60"
                          : "border-white/20 focus:border-blue-400/60"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      disabled
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none ${
                        errors.message
                          ? "border-red-400/60 focus:border-red-400/60"
                          : "border-white/20 focus:border-blue-400/60"
                      }`}
                      placeholder="Tell me about your project or how I can help..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
