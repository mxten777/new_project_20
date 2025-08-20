import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[#f6f3f9] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-0 sm:px-2 py-4 sm:py-8 z-10 relative transition-all duration-500 animate-fadeIn w-full overflow-x-auto">
        <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto bg-white/90 rounded-2xl sm:rounded-3xl shadow-xl p-1.5 sm:p-3 md:p-6 min-h-[60vh] my-2 sm:my-4 md:my-8 border border-blue-100/30 backdrop-blur-md transition-all duration-500 box-border overflow-x-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
