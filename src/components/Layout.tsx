import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <div className="flex flex-col min-h-screen relative bg-gradient-to-br from-[#FFFDE4] via-[#FEE500]/60 to-[#F5F7FA] text-[#22292f]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-0 sm:px-2 py-2 sm:py-6 z-10 relative transition-all duration-500 animate-fadeIn w-full">
        <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto bg-white/95 rounded-3xl shadow-2xl p-2 sm:p-4 md:p-8 min-h-[60vh] my-2 sm:my-4 md:my-8 border border-yellow-100/30 backdrop-blur-2xl transition-all duration-500 box-border">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
