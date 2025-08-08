import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  Star,
  Heart,
  Zap,
  RefreshCw
} from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manliclic.eugine@gmail.com",
      description: "",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:eugine@example.com",
    },
    // {
    //   icon: Phone,
    //   label: "Availability",
    //   value: "",
    //   description: "Mon-Fri 9AM-6PM (GMT+8)",
    //   color: "from-green-500 to-emerald-500",
    //   href: "#",
    // },
    {
      icon: MapPin,
      label: "Location",
      value: "Metro Manila, PH",
      description: "Available for remote work",
      color: "from-purple-500 to-pink-500",
      href: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center mb-4">
              <MessageCircle className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your next project and turn your ideas into reality
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="space-y-8">
                {/* Introduction */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-pink-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">
                      Let's work together
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I'm always interested in hearing about new projects and
                    opportunities. Whether you're a company looking to hire, or
                    you're a fellow developer wanting to collaborate, I'd love
                    to hear from you.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className={`group flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:scale-105 transform ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                        style={{ animationDelay: `${400 + index * 100}ms` }}
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-lg">
                            {contact.label}
                          </p>
                          <p className="text-blue-300 font-medium">
                            {contact.value}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {contact.description}
                          </p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div
                  className={`transform transition-all duration-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ animationDelay: "800ms" }}
                ></div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ animationDelay: "400ms" }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    {/* <Zap className="w-6 h-6 text-yellow-400 mr-3" /> */}
                    <h3 className="text-2xl font-bold text-white">
                      Send me a message
                    </h3>
                  </div>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-green-300">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Name *
                        </label>
                        <input
                          disabled
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          disabled
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        disabled
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        disabled
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden ${
                        isSubmitting ? "animate-pulse" : ""
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                      </span>
                      {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </button>
                  </div>

                  {/* Response Time Badge */}
                  <div className="mt-6 flex items-center justify-center text-gray-400">
                    {/* <Clock className="w-4 h-4 mr-2" /> */}
                    {/* Status Message */}
                    <div
                      className={`flex items-center justify-center text-gray-400 mt-4 transform transition-all duration-1000 ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ animationDelay: "800ms" }}
                    >
                      <RefreshCw
                        className="w-4 h-4 mr-2 animate-spin"
                        style={{ animationDuration: "2s" }}
                      />
                      <span>System updates in progress...</span>
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

export default Contact;
