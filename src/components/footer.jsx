const footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2   ">
            <div className="mb-6 flex flex-col text-left ">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Eugine Manliclic
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Aspiring Front End Developer passionate about creating
                beautiful, functional web experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">
              © 2025 Eugine Manliclic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
