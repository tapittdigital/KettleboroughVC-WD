import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { ArrowLeft,ArrowUp } from "lucide-react"; // Import back arrow icon
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import PortfolioCard from "@/components/PortfolioCard";

const portfolioItems = [
  {
    id: 1,
    name: "Quantum Health",
    category: "Healthcare",
    year: "2021",
    description: "Pioneering AI-driven diagnostic tools that are revolutionizing early disease detection and treatment planning.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Quantum+Health",
    fundingStage: "Fund I",
    location: "San Francisco, CA",
    founder: "Dr. Elena Chen",
    founderLinkedIn: "https://linkedin.com/in/",
    coInvestors: ["Sequoia Capital", "Andreessen Horowitz"],
  },
  {
    id: 2,
    name: "EcoSphere",
    category: "CleanTech",
    year: "2022",
    description: "Developing sustainable energy solutions through advanced battery technology and smart grid systems.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=EcoSphere",
    fundingStage: "Prefund",
    location: "Boston, MA",
    founder: "Michael Green",
    founderLinkedIn: "https://linkedin.com/in/",
    coInvestors: ["Y Combinator", "Khosla Ventures"],
  },
  {
    id: 3,
    name: 'NexGenAI',
    category: 'Artificial Intelligence',
    year: '2020',
    description: 'Building the next generation of enterprise AI solutions focused on natural language processing and automation.',
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=NexGenAI',
    fundingStage: 'Fund I',
    location: 'Austin, TX',
    founder: 'Sarah Wilson',
    founderLinkedIn: 'https://linkedin.com/in/',
    coInvestors: ['GV', 'Accel']
  },
  {
    id: 4,
    name: 'FinEdge',
    category: 'FinTech',
    year: '2022',
    description: 'Transforming financial inclusion through blockchain-based solutions and decentralized finance protocols.',
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=FinEdge',
    fundingStage: 'Prefund',
    location: 'New York, NY',
    founder: 'James Rodriguez',
    founderLinkedIn: 'https://linkedin.com/in/',
    coInvestors: ['Coinbase Ventures', 'Polychain Capital']
  },
  {
    id: 5,
    name: 'CyberShield',
    category: 'Cybersecurity',
    year: '2021',
    description: 'Protecting enterprises with next-generation threat detection and autonomous security response systems.',
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=CyberShield',
    fundingStage: 'Fund I',
    location: 'Seattle, WA',
    founder: 'Alex Johnson',
    founderLinkedIn: 'https://linkedin.com/in/',
    coInvestors: ['Greylock', 'Founders Fund']
  },
  {
    id: 6,
    name: 'MetaWorks',
    category: 'Future of Work',
    year: '2023',
    description: 'Building collaborative tools for the future of distributed work and virtual team collaboration.',
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=MetaWorks',
    fundingStage: 'Prefund',
    location: 'Portland, OR',
    founder: 'Lisa Chang',
    founderLinkedIn: 'https://linkedin.com/in/',
    coInvestors: ['Kleiner Perkins', 'First Round Capital']
  },
  {
    id: 7,
    name: 'BioInnovate',
    category: 'Biotech',
    year: '2021',
    description: 'Developing breakthrough gene therapy solutions for rare genetic disorders with proprietary CRISPR technology.',
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=BioInnovate',
    fundingStage: 'Fund I',
    location: 'Cambridge, MA',
    founder: 'Dr. Robert Kim',
    founderLinkedIn: 'https://linkedin.com/in/',
    coInvestors: ['Atlas Venture', 'RA Capital']
  },
  {
    id: 8,
    name: 'UrbanMobility',
    category: 'Transportation',
    year: '2022',
    description: 'Revolutionizing urban transportation with sustainable, electric micro-mobility solutions for smart cities.',
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=UrbanMobility',
    fundingStage: 'Prefund',
    location: 'Chicago, IL',
    founder: 'Melissa Torres',
    founderLinkedIn: 'https://linkedin.com/in/',
    coInvestors: ['Obvious Ventures', 'Toyota Ventures']
  },
  {
    id: 9,
    name: 'CloudDefense',
    category: 'Cloud Security',
    year: '2020',
    description: 'Securing enterprise cloud infrastructure with AI-powered security automation and compliance monitoring.',
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=CloudDefense',
    fundingStage: 'Fund I',
    location: 'Denver, CO',
    founder: 'David Park',
    founderLinkedIn: 'https://linkedin.com/in/',
    coInvestors: ['Benchmark', 'CRV']
  }
];

const PortfolioPage: React.FC = () => {
    const [filter, setFilter] = useState<string>("All");
    const navigate = useNavigate(); // Navigation function
    const [showScroll, setShowScroll] = useState(false); // Scroll to top state
  
    // Show Scroll Up Button when user scrolls down
    useEffect(() => {
      const handleScroll = () => {
        setShowScroll(window.scrollY > 300);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <div className="relative min-h-screen bg-white">
        <Navbar />
  
        {/* Back Button */}
        <div className="absolute top-24 left-10 cursor-pointer">
          <ArrowLeft 
            onClick={() => navigate("/")} 
            size={32} 
            className="text-gray-800 hover:text-gray-900 transition-all"
          />
        </div>
  
        <section className="pt-32 pb-24 bg-gray-50">
          <div className="content-container">
            <AnimatedText
              text="Our Portfolio"
              className="font-sans text-sm uppercase tracking-widest text-gray-500 mb-4 text-center"
              animation="slide-up"
              tag="p"
            />
            <AnimatedText
              text="We invest in category-defining companies"
              className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-12 text-center max-w-3xl mx-auto"
              animation="slide-up"
              delay={0.2}
              tag="h2"
            />
  
            {/* Filter Buttons */}
            <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar mt-[-120px]">
              <div className="flex space-x-2">
                {["All", "Prefund", "Fund I"].map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      filter === category
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Portfolio Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems
                .filter((item) => filter === "All" || item.fundingStage === filter)
                .map((item, index) => (
                  <div
                    key={item.id}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <PortfolioCard
                name={item.name}
                category={item.category}
                year={item.year}
                description={item.description}
                image={item.image}
                fundingStage={item.fundingStage}
                location={item.location}
                founder={item.founder}
                founderLinkedIn={item.founderLinkedIn}
                coInvestors={item.coInvestors}
                cardIndex={index} // Ensures unique pastel colors
              />
                  </div>
                ))}
            </div>
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
      </div>
    );
  };
  
  export default PortfolioPage;
