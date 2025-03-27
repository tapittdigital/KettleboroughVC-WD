import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { Card, CardContent, CardHeader } from "./ui/card";

const Contact: React.FC = () => {
  const formFields = [
    { id: "name", label: "Full Name", type: "text", required: true },
    { id: "email", label: "Email Address", type: "email", required: true },
    { id: "company", label: "Company Name", type: "text", required: true },
    { id: "subject", label: "Subject", type: "text", required: false },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "team@kettleboroughvc.com",
      link: "mailto:team@kettleboroughvc.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9874561230",
      link: "tel:+919874561230",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Office",
      value: "Satellite Road, Ahmedabad",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="relative">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/2"></div>
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
       

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 ">Send us a message</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {formFields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                      {field.label} {field.required && <span className="text-red-400">*</span>}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium  mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full min-h-[200px] px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-white"
                ></textarea>
              </div>
              
              <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="w-4 h-4 rounded text-blue-500 focus:ring-blue-400 bg-gray-800 border-gray-600"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-300">
                  I agree to the <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <button
                type="submit"
                className="btn-primary text-sm"
              >
                Submit Inquiry
                {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <CardHeader className="text-xl font-semibold mb-6 ">Contact Information</CardHeader>
              <CardContent>
            <div>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <a href={item.link} className=" hover:text-blue-300 transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <CardHeader className="text-xl font-semibold mb-6">Investment Criteria</CardHeader>
            <CardContent>
            <div  >
              
              <ul className="space-y-3 ">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span>✓</span>
                  </div>
                  <span>Pre-seed to Series A investments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span>✓</span>
                  </div>
                  <span>Check size: $250K to $3M</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span>✓</span>
                  </div>
                  <span>Tech-enabled businesses with global potential</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <span>✓</span>
                  </div>
                  <span>Strong founding team with domain expertise</span>
                </li>
              </ul>
            </div>
            </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;