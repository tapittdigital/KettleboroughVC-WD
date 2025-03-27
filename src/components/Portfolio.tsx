import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import PortfolioCard from "./PortfolioCard";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    name: "Otipy",
    category: "Farm",
    year: "2021",
    description: "Farm to Fork, Fresh FnV platform enabled by Social Commerce | Exited",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Otipy",
    fundingStage: "Pre Fund",
    location: "San Francisco, CA",
    founder: "Varun Khurana",
    founderLinkedIn: "https://linkedin.com/in/",
    coInvestors: ["Westbridge Capital, SIG Investments, Omidyar"],
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
    name: "NexGenAI",
    category: "Artificial Intelligence",
    year: "2020",
    description: "Building the next generation of enterprise AI solutions focused on natural language processing and automation.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=NexGenAI",
    fundingStage: "Fund I",
    location: "Austin, TX",
    founder: "Sarah Wilson",
    founderLinkedIn: "https://linkedin.com/in/",
    coInvestors: ["GV", "Accel"],
  },
  {
    id: 4,
    name: "FinEdge",
    category: "FinTech",
    year: "2022",
    description: "Transforming financial inclusion through blockchain-based solutions and decentralized finance protocols.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=FinEdge",
    fundingStage: "Prefund",
    location: "New York, NY",
    founder: "James Rodriguez",
    founderLinkedIn: "https://linkedin.com/in/",
    coInvestors: ["Coinbase Ventures", "Polychain Capital"],
  },
  {
    id: 5,
    name: "CyberShield",
    category: "Cybersecurity",
    year: "2021",
    description: "Protecting enterprises with next-generation threat detection and autonomous security response systems.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=CyberShield",
    fundingStage: "Fund I",
    location: "Seattle, WA",
    founder: "Alex Johnson",
    founderLinkedIn: "https://linkedin.com/in/",
    coInvestors: ["Greylock", "Founders Fund"],
  },
  {
    id: 6,
    name: "MetaWorks",
    category: "Future of Work",
    year: "2023",
    description: "Building collaborative tools for the future of distributed work and virtual team collaboration.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=MetaWorks",
    fundingStage: "Prefund",
    location: "Portland, OR",
    founder: "Lisa Chang",
    founderLinkedIn: "https://linkedin.com/in/",
    coInvestors: ["Kleiner Perkins", "First Round Capital"],
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Prefund", "Fund I"];

  // Show only 6 items on the homepage
  const filteredItems =
    filter === "All"
      ? portfolioItems.slice(0, 6)
      : portfolioItems.filter((item) => item.fundingStage === filter).slice(0, 6);

  return (
    <section id="portfolio" className="py-24 ">
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

        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar mt-[-200px]">
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === category ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
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

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            View All Portfolio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;