import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { ArrowUp } from "lucide-react"; // Scroll Up Icon
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute("href") as string);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 100,
            behavior: "smooth",
          });
        }
      });
    });

    // Detect Scroll for Scroll-Up Button
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to Top Function
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <StatsCounter />

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">About Us</h2>
        <About />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-2 md:px-10 lg:px-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Portfolio</h2>
          <Portfolio />
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-10 text-center pt-6">Meet Our Team</h2>
        <div className="max-w-5xl mx-auto py-10">
          <Team />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Get in Touch</h2>
        <div className="mt-4">
          <Contact />
        </div>
      </section>

      {/* Scroll Up Button */}
      {showScroll && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-all"
        >
          <ArrowUp size={28} />
        </button>
      )}

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Index;
