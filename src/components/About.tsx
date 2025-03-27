"use client"

import type React from "react"

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-semibold">Our Investment Philosophy</h3>
          <p className="text-gray-600 text-justify">
            At Kettleborough VC, we believe in backing visionary entrepreneurs who are building transformative companies
            that solve real problems. Our approach combines capital with expertise to help founders navigate the
            challenges of scaling a business.
          </p>
          <p className="text-gray-600 text-justify">
            We focus on early-stage investments across technology sectors, with particular interest in AI, fintech,
            healthtech, and sustainable solutions. Our team brings decades of operational experience to help portfolio
            companies succeed.
          </p>

          <div className="pt-4">
            <h4 className="font-medium mb-3">What Sets Us Apart</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-black mt-2 mr-2"></span>
                <span>Founder-first approach with hands-on support</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-black mt-2 mr-2"></span>
                <span>Global network of industry experts and partners</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-black mt-2 mr-2"></span>
                <span>Long-term vision with patient capital</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-serif font-semibold mb-6">Our Investment Process</h3>

          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  1
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Initial Screening</h4>
                <p className="text-gray-600 text-sm">
                  We review your pitch deck and evaluate market opportunity, team, and product-market fit.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  2
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Deep Dive</h4>
                <p className="text-gray-600 text-sm">
                  Our team conducts thorough due diligence, including market analysis and financial review.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Partnership</h4>
                <p className="text-gray-600 text-sm">
                  We structure a deal that aligns incentives and provides the resources you need to succeed.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  4
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Growth Support</h4>
                <p className="text-gray-600 text-sm">
                  Our team provides ongoing strategic guidance, connections, and operational support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

