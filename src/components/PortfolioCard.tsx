import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Linkedin, FlipHorizontal } from "lucide-react";

// Define pastel colors for different cards
const pastelColors = [
  "#FCE8E6", // Soft Peach
  "#E3F2FD", // Light Blue
  "#F3E5F5", // Lavender
  "#E8F5E9", // Light Green
  "#FFF3E0", // Light Orange
  "#F1F8E9", // Mint Green
  "#EDE7F6", // Soft Purple
  "#FFEBEE", // Blush Pink
];

interface PortfolioCardProps {
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  fundingStage: string;
  location: string;
  founder?: string;
  founderLinkedIn?: string;
  coInvestors?: string[];
  cardIndex?: number; // Used to assign different colors
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  name,
  category,
  year,
  description,
  image,
  fundingStage,
  location,
  founder,
  founderLinkedIn,
  coInvestors,
  cardIndex = 0, // Default to first color
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardColor = pastelColors[cardIndex % pastelColors.length]; // Rotate colors

  const handleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective h-[420px] w-full cursor-pointer" onClick={handleFlip}>
      <div
        className={cn(
          "relative h-full w-full duration-700 preserve-3d transition-all",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front Card */}
        <div className="absolute inset-0 backface-hidden">
          <div
            className="h-full rounded-2xl overflow-hidden shadow-lg group transition-all duration-500"
            style={{ backgroundColor: cardColor }}
          >
            <div className="relative h-full w-full overflow-hidden">
              <h3 className="flex text-4xl justify-center items-center pt-40">
              {name}
              </h3>
              {/* <img
                src={image || "https://placehold.co/600x400/e2e8f0/1e293b?text=Portfolio+Item"}
                alt={name}
                className="h-auto w-auto object-cover transition-all duration-500 ease-out-expo group-hover:scale-105"
              /> */}
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-gray-900">
                <span className="badge bg-black/10 text-black px-2 py-1 text-xs rounded-full inline-block">
                  {category}
                </span>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-700">{year}</span>
                  
                  {/* Flip Indicator */}
                  <div className="flex items-center bg-black/10 px-2 py-1 rounded-full">
                    <FlipHorizontal size={16} className="text-gray-800 mr-1" />
                    <span className="text-xs text-gray-800">Click to flip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div
          className="absolute inset-0 h-full w-full rounded-2xl p-6 backface-hidden rotate-y-180 shadow-lg"
          style={{ backgroundColor: "#ffffff" }} // White back for contrast
        >
          <div className="flex flex-col h-full ">
            <div className="mb-4">
              <span className="badge bg-black text-white px-2 py-1 text-xs rounded-full inline-block">
                {fundingStage}
              </span>
              <h3 className="text-2xl font-serif font-bold mb-1 text-black">{name}</h3>
              <p className="text-sm text-gray-600">
                {location} • {year}
              </p>
            </div>

            <div className="mb-4">
              {founder && (
                <div className="flex items-center mb-2">
                  <p className="text-gray-800 font-medium">Founder: {founder}</p>
                  {founderLinkedIn && (
                    <a
                      href={founderLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              )}
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            </div>

            {coInvestors && coInvestors.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Co-investors:</p>
                <div className="flex flex-wrap gap-2">
                  {coInvestors.map((investor, index) => (
                    <span
                      key={index}
                      className="badge bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full inline-block"
                    >
                      {investor}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Investment Focus</p>
              <div className="flex flex-wrap gap-2">
                <span className="badge bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full inline-block">
                  {category}
                </span>
                <span className="badge bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full inline-block">
                  Growth
                </span>
                <span className="badge bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full inline-block">
                  Innovation
                </span>
              </div>
            </div>

            <div className="mt-auto text-sm text-gray-500 text-center pt-2">
              Click to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
