import React, { useState, useEffect } from "react";
import { Settings, Clock, Wrench, RefreshCw } from "lucide-react";

const UnderMaintenance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Update current time
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Icon with rotating animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25">
                  <Settings className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Wrench className="w-3 h-3 text-gray-800" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
              Under Maintenance
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're working hard to improve your experience. 
              <br />
              Please check back soon!
            </p>

            {/* Status Card */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-gray-300 font-medium">Current Time</span>
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-gray-400">
                {currentTime.toLocaleDateString()}
              </div>
            </div>

            {/* Status Message */}
            <div
              className={`flex items-center justify-center text-gray-400 mb-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ animationDelay: "800ms" }}
            >
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: '2s' }} />
              <span>System updates in progress...</span>
            </div>

            {/* Estimated Time */}
            <div
              className={`bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ animationDelay: "1000ms" }}
            >
              <p className="text-purple-300 font-medium">
                Expected to be back online shortly
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Thank you for your patience
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`mt-12 text-gray-500 text-sm transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ animationDelay: "1200ms" }}
          >
            For urgent inquiries, please contact support
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse" />
      <div 
        className="absolute top-8 right-8 w-3 h-3 bg-pink-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div 
        className="absolute bottom-1/3 right-12 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
};

export default UnderMaintenance;