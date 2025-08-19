import React from "react";
import { Link } from "react-router-dom";

const Oops = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
          Oops!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          oh no, we dont have that feature yet in our page
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Oops;


