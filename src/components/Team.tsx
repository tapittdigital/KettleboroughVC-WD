import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Team = () => {
  const teamMember = {
    name: 'Nisarg Shah',
    role: 'General Partner',
    image: 'https://placehold.co/600x800/e2e8f0/1e293b?text=Nisarg+Shah',
    bio: 'I started out as an angel investor to back some really great founders, working on creating legacy companies and help them accelerate their gig. Soon enough, I fell in love with this line of work and the opportunity it gives me to meet people who have audacity to dream crazy big and work even harder for it. I ended up being noticed by some really nice people who put their trust in me to manage their money and I started leading syndicates for sometime, before eventually setting up a VC fund.',
    philosophy: 'Presently, I run a solo GP VC fund, investing in early stage companies. I do not aspire for board seats or need preferential rights. I can move really fast, as there are no formal processes of IC or partner meetings in the fund. Its just me, going all out to support my founders in all the ways possible throughout the journey. You can think of me as your door opener, strategy enhancer or at the least, a listener to your struggles of building a humongous company.',
    experience: [
      'Ex-Partner at Global Ventures', 
      'Former CTO at TechGrowth', 
      'MBA from Stanford Business School',
      'Led 17 successful investments with 4 exits'
    ],
    linkedin: '#',
    twitter: '#',
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-12 max-w-6xl mx-auto px-4 mt-[-90px]">
      <motion.div 
        className="w-full mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-2">{teamMember.name}</h1>
        
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column - Image and Experience */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="space-y-8"
        >
          {/* Image */}
          <motion.div 
            className="overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="Nisarg.png" 
              alt={teamMember.name}
              className="w-full object-cover object-center"
            />
          </motion.div>
          
          {/* Experience */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-gray-500">EXPERIENCE</h2>
            
            <motion.ul className="space-y-5">
              {teamMember.experience.map((exp, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="text-indigo-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{exp}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-3 pt-2">
            {teamMember.linkedin && (
              <motion.a 
                href={teamMember.linkedin} 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            )}
            {teamMember.twitter && (
              <motion.a 
                href={teamMember.twitter} 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            )}
          </div>
        </motion.div>
        
        {/* Right Column - Bio and Philosophy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-medium text-gray-500 mb-4">BIO</h2>
            <p className="text-gray-700 leading-relaxed text-justify">{teamMember.bio}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-medium text-gray-500 mb-4">PHILOSOPHY</h2>
            <p className="text-gray-700 leading-relaxed text-justify">{teamMember.philosophy}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;